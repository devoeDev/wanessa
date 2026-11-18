import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowUp, Leaf, Sprout, Menu, X, Plus, Minus, Instagram, MessageCircle, Phone } from 'lucide-react';
import { MotionConfig } from 'framer-motion';
import { profile, content } from './config';
import { AnimatedSection, Collapsible } from './components/Animations';
import Hero from './components/Hero';
import Brand from './components/Brand';
import Portrait from './components/Portrait';
import About from './components/About';
import Care from './components/Care';
import Process from './components/Process';
import { Areas, Benefits, Testimonials, ContactLinks } from './components/Sections';

const links = [['sobre', 'Sobre mim'], ['atuacao', 'O cuidado'], ['processo', 'Como funciona'], ['duvidas', 'Dúvidas']];
function WhatsAppIcon({ size }) {
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.45L3.5 20.5l1.05-4.4A8.5 8.5 0 1 1 20.5 12Z"/>
  <path d="M9 8h1l1 2-1 1a7 7 0 0 0 3 3l1-1 2 1v1a1 1 0 0 1-1 1 8 8 0 0 1-7-7 1 1 0 0 1 1-1Z"/>
 </svg>;
}

export default function App() {
 const [menu, setMenu] = useState(false);
 const [open, setOpen] = useState(null);
 const [active, setActive] = useState('inicio');
 const [scrolled, setScrolled] = useState(false);
 const toggle = useRef(null);
 const whatsapp = /^\d{10,15}$/.test(profile.whatsapp) ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('Olá, Wanessa Freire! Gostaria de saber mais sobre o atendimento nutricional e consultar a disponibilidade de horários.')}` : null;
 useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 24);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: '-20% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
 }, []);
 useEffect(() => {
  if (!menu) return;
  const close = event => { if (event.key === 'Escape') { setMenu(false); toggle.current?.focus(); } };
  const media = matchMedia('(min-width: 768px)');
  const resize = () => { if (media.matches) setMenu(false); };
  document.addEventListener('keydown', close); media.addEventListener('change', resize);
  return () => { document.removeEventListener('keydown', close); media.removeEventListener('change', resize); };
 }, [menu]);
 return <MotionConfig reducedMotion="user"><a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
 <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="shell header-inner"><Brand/><nav className="desktop-nav" aria-label="Navegação principal">{links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav><a className="button button-small header-cta" href="#contato">Vamos conversar <ArrowUpRight size={16}/></a><button ref={toggle} className="menu-toggle" onClick={() => setMenu(!menu)} aria-controls="mobile-menu" aria-expanded={menu} aria-label={menu ? 'Fechar menu' : 'Abrir menu'}>{menu ? <X/> : <Menu/>}</button></div><Collapsible open={menu} id="mobile-menu" className="mobile-menu"><nav className="shell" aria-label="Navegação móvel">{[...links, ['contato','Agendamento']].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}<ArrowUpRight size={18}/></a>)}</nav></Collapsible></header>
 <main id="conteudo"><Hero/><div className="values-strip"><div className="shell">{content.values.map(t => <span key={t}><Sprout size={17}/>{t}</span>)}</div></div><About/><Areas/><Care/><Process/><Benefits/><Testimonials/>
 <AnimatedSection className="quote-section">
  <div className="shell quote-layout">
   <Portrait photo={content.photos.quote} className="quote-portrait" sizes="(max-width: 767px) 70vw, 320px"/>
   <div><Leaf size={32} strokeWidth={1}/><p>Alimentar o corpo.<br/><em>Acolher a sua história.</em></p><span>UM CONVITE A OLHAR PARA VOCÊ COM MAIS GENTILEZA</span></div>
  </div>
 </AnimatedSection>
 <AnimatedSection id="duvidas" className="shell section faq-layout"><div><p className="eyebrow">06 / PERGUNTAS FREQUENTES</p><h2>Uma conversa<br/>começa com <em>perguntas.</em></h2><p className="body-copy">Algumas respostas para dar o primeiro passo com mais tranquilidade.</p><a className="text-link" href="#contato">Ainda tem uma dúvida? <ArrowUpRight size={18}/></a></div><div>{content.faqs.map(([q,a],i) => <div className="faq" key={q}><h3><button id={`question-${i}`} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`answer-${i}`}><span className="faq-number">0{i + 1}</span><span>{q}</span>{open === i ? <Minus size={18}/> : <Plus size={18}/>}</button></h3><Collapsible id={`answer-${i}`} open={open === i}><div role="region" aria-labelledby={`question-${i}`}><p>{a}</p></div></Collapsible></div>)}</div></AnimatedSection>
 <AnimatedSection id="contato" className="shell contact-wrap"><div className="contact-panel"><div className="contact-photo"><Portrait photo={content.photos.contact} className="contact-portrait" sizes="(max-width: 767px) 90vw, (max-width: 1100px) 35vw, 30vw"/><span className="contact-photo-caption">Cuidado com presença.<br/><em>Escuta com atenção.</em></span></div><div className="contact-content"><div><p className="eyebrow">UM NOVO COMEÇO, NO SEU TEMPO</p><h2>O próximo passo<br/>pode ser <em>uma conversa.</em></h2><p>Conheça o atendimento e encontre espaço<br className="hidden md:block"/> para cuidar de você.</p></div><div className="contact-actions">{whatsapp ? <a className="button button-light" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={19}/> Agendar pelo WhatsApp <ArrowUpRight size={18}/></a> : <div className="contact-pending"><MessageCircle size={25}/><strong>Em breve, mais perto de você.</strong><p>Os canais de agendamento serão<br/>disponibilizados aqui.</p></div>}{whatsapp && profile.phoneLabel && <a className="contact-link" href={`tel:+${profile.whatsapp}`}><Phone size={18} aria-hidden="true"/> {profile.phoneLabel}</a>}{profile.instagram && <a className="contact-link" href={profile.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18}/> Acompanhe no Instagram <ArrowUpRight size={16}/></a>}<ContactLinks/></div></div><Sprout className="contact-decoration" size={290} strokeWidth={0.6}/></div></AnimatedSection></main>
 {whatsapp && <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Agendar pelo WhatsApp"><WhatsAppIcon size={25}/></a>}
 <footer className="shell"><div className="footer-top"><Brand/><p>Cuidar da alimentação.<br/>Respeitar a sua história.</p><nav aria-label="Navegação do rodapé"><a href="#sobre">Sobre mim</a><a href="#processo">Minha abordagem</a><a href="#contato">Contato</a></nav></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.{profile.crn && ` · ${profile.crn}`}</p>{profile.privacyUrl && <a href={profile.privacyUrl}>Política de privacidade</a>}<a href="#inicio">Voltar ao início <ArrowUp size={14}/></a></div></footer></MotionConfig>;
}
