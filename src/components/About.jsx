import { AnimatedSection } from './Animations';
import { Leaf } from 'lucide-react';
import { profile, content } from '../config';
import Portrait from './Portrait';
export default function About() {
 return <AnimatedSection id="sobre" className="shell section grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
  <div className="about-visual"><Portrait photo={content.photos.about} className="about-portrait"/><span className="about-label">Um olhar para o todo.<Leaf size={22} strokeWidth={1}/></span></div>
  <div>
   <p className="eyebrow">SOBRE MIM</p>
   <h2>{profile.name}</h2>
   <p className="about-credentials">Nutricionista | {profile.crn}</p>
   {content.about.map(paragraph => <p className="body-copy" key={paragraph}>{paragraph}</p>)}
   <p className="body-copy about-purpose"><em>{content.purpose}</em></p>
   <p className="body-copy"><strong>{content.aboutTagline}</strong></p>
   <div className="qualifications" aria-label="Formação e atuação profissional"><p className="eyebrow">FORMAÇÃO & ENSINO</p><ul>{content.qualifications.map(item => <li key={item.title}><div><h3>{item.title}</h3>{item.detail && <p>{item.detail}</p>}</div><span className="qualification-status">{item.status}</span></li>)}</ul></div>
   <div className="signature">{profile.name}<span>Nutricionista · {profile.crn}</span></div>
  </div>
  <div className="about-axes grid md:grid-cols-3 gap-6" aria-label="Eixos de atuação">
   {content.professionalAxes.map(axis => <article className="care-card" key={axis.title}><Leaf size={28} strokeWidth={1}/><h3>{axis.title}</h3><p>{axis.description}</p></article>)}
  </div>
 </AnimatedSection>;
}
