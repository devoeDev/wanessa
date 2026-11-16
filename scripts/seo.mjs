import { writeFile, readFile } from 'node:fs/promises';
import { profile } from '../src/config.js';

const escapeXml = value => value.replace(/[<>&'\"]/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char]);
let html = await readFile('dist/index.html', 'utf8');
let origin;
if (profile.siteUrl) {
 const url = new URL(profile.siteUrl);
 if (!['https:', 'http:'].includes(url.protocol)) throw new Error('siteUrl precisa ser uma URL HTTP(S).');
 origin = url.href;
 html = html.replace('</head>', `<link rel="canonical" href="${escapeXml(origin)}"/><meta property="og:url" content="${escapeXml(origin)}"/></head>`);
 await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapeXml(origin)}</loc></url></urlset>`);
}
const schema = { '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: 'Nutricionista', ...(origin ? { url: origin } : {}), ...(profile.instagram ? { sameAs: [profile.instagram] } : {}) };
html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script></head>`);
await writeFile('dist/index.html', html);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${new URL('sitemap.xml', origin).href}\n` : ''}`);
console.log(`SEO gerado. ${origin ? 'Canonical e sitemap configurados.' : 'Canonical e sitemap aguardam profile.siteUrl; nenhum domínio foi inventado.'}`);
