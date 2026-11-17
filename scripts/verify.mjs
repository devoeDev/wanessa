import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { content, profile } from '../src/config.js';
test('configuração não publica credenciais, contatos ou depoimentos fictícios', () => {
 assert.equal(typeof profile.crn, 'string');
 assert.ok(!profile.whatsapp || /^\d{10,15}$/.test(profile.whatsapp));
 for (const entry of content.testimonials) assert.ok(entry.name && entry.quote);
 for (const entry of content.areas) assert.ok(entry.title && entry.description);
 assert.ok(content.faqs.some(([q]) => q.includes('preparar')));
});
test('build inclui metadados, schema válido e arquivos de rastreamento', async () => {
 const html = await readFile('dist/index.html', 'utf8');
 assert.match(html, /lang="pt-BR"/);
 assert.match(html, /name="description"/);
 assert.match(html, /name="twitter:title"/);
 const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
 assert.equal(JSON.parse(json[1]).name, profile.name);
 const robots = await readFile('dist/robots.txt', 'utf8');
 assert.match(robots, /Allow: \//);
 if (profile.siteUrl) assert.match(await readFile('dist/sitemap.xml', 'utf8'), /<urlset/);
 else assert.doesNotMatch(html, /rel="canonical"/);
});

test('cada retrato possui original e variantes WebP locais disponiveis no build', async () => {
 const mapping = { hero: '/foto04.jpeg', quote: '/foto3.jpeg', about: '/foto1.jpeg', contact: '/foto2.jpeg' };
 for (const [placement, source] of Object.entries(mapping)) {
  const photo = content.photos[placement];
  assert.equal(photo.src, source);
  assert.ok(photo.width > 0 && photo.height > 0 && photo.alt.length > 15);
  const original = await readFile(`public${photo.src}`);
  assert.equal(original.readUInt16BE(0), 0xffd8);
  for (const entry of photo.srcSet.split(',')) {
   const [path] = entry.trim().split(' ');
   const bytes = await readFile(`dist${path}`);
   assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
   assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
  }
 }
});
