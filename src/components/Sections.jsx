import { m, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check, Leaf, Quote, Mail } from 'lucide-react';
import { content, profile } from '../config';

function Enter({ children, className = '' }) {
  const reduced = useReducedMotion();
  return <m.div className={className} initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }}>{children}</m.div>;
}
export function Areas() {
  return <section id="atuacao" className="shell section"><Enter><p className="eyebrow">ÁREAS DE ATUAÇÃO</p><div className="section-heading"><h2>Seu momento.<br/><em>Um cuidado possível.</em></h2><p>Conheça as possibilidades de atendimento<br/>e encontre espaço para suas dúvidas.</p></div>{content.areas.length ? <div className="grid md:grid-cols-3 gap-6 mt-10">{content.areas.map((area) => <article className="care-card" key={area.title}><Leaf size={28}/><h3>{area.title}</h3><p>{area.description}</p></article>)}</div> : <div className="editorial-note"><Leaf size={27} strokeWidth={1.2}/><div><h3>Vamos entender o que você procura?</h3><p>Converse com Wanessa Freire para conhecer as áreas e modalidades de atendimento disponíveis.</p></div><a href="#contato" className="text-link">Consultar atendimento <ArrowUpRight size={18}/></a></div>}</Enter></section>;
}
export function Benefits() {
  return <section className="shell section benefits-section"><Enter><p className="eyebrow">PARA ALÉM DO PRATO</p><h2>Pequenos passos.<br/><em>Novas possibilidades.</em></h2><div className="grid md:grid-cols-3 gap-8 mt-10">{content.benefits.map(item => <article key={item.title} className="benefit"><Check size={22}/><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><p className="results-note">Cada trajetória é individual. Objetivos e resultados dependem das necessidades e do contexto de cada pessoa.</p></Enter></section>;
}
export function Testimonials() {
  if (!content.testimonials.length) return null;
  return <section id="depoimentos" className="testimonials-section"><div className="shell section"><Enter><p className="eyebrow">HISTÓRIAS & EXPERIÊNCIAS</p><h2>Cada história merece<br/><em>ser ouvida.</em></h2>{content.testimonials.length ? <div className="grid md:grid-cols-2 gap-6 mt-10">{content.testimonials.map((item, i) => <figure className="care-card" key={i}><Quote size={25}/><blockquote>{item.quote}</blockquote><figcaption>{item.name}</figcaption></figure>)}</div> : <p className="body-copy testimonial-empty">Este espaço está reservado a depoimentos reais, compartilhados com autorização. Novas histórias serão publicadas aqui quando estiverem disponíveis.</p>}</Enter></div></section>;
}
export function ContactLinks() {
  return profile.email ? <a className="contact-link" href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true"/> <span>{profile.email}</span></a> : null;
}
