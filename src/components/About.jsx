import { AnimatedSection } from './Animations';
import { Leaf } from 'lucide-react';
import { profile, content } from '../config';
import Portrait from './Portrait';
export default function About() {
 return <AnimatedSection id="sobre" className="shell section grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
  <div className="about-visual"><Portrait photo={content.photos.about} className="about-portrait"/><span className="about-label">Um olhar para o todo.<Leaf size={22} strokeWidth={1}/></span></div>
  <div><p className="eyebrow">PRAZER, WANESSA FREIRE</p><h2>Antes de falar de comida,<br/>vamos falar <em>de você.</em></h2><p className="body-copy">{content.about[0]}</p><p className="body-copy">{content.about[1]}</p><div className="qualifications" aria-label="Formação e atuação profissional"><p className="eyebrow">FORMAÇÃO & ENSINO</p><ul>{content.qualifications.map(item => <li key={item.title}><div><h3>{item.title}</h3>{item.detail && <p>{item.detail}</p>}</div><span className={item.status === "Em andamento" ? "qualification-status is-pending" : "qualification-status"}>{item.status}</span></li>)}</ul></div><div className="signature">Wanessa Freire <span>Nutricionista{profile.crn ? ` · ${profile.crn}` : ''}</span></div></div>
 </AnimatedSection>;
}
