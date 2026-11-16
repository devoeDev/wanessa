import { AnimatedSection, AnimatedItem } from './Animations';
import React from 'react';
import { Leaf, Sprout, Heart } from 'lucide-react';
import { content } from '../config';
export default function Care() { return (
<AnimatedSection id="cuidado" className="care-section"><div className="shell section"><div className="section-heading"><div><p className="eyebrow">MEU OLHAR PARA A NUTRIÇÃO</p><h2>Cuidado que cabe<br/><em>na vida real.</em></h2></div><p>Cada pessoa é única.<br/>A conversa sobre alimentação também deve ser.</p></div><div className="grid md:grid-cols-3 gap-6 mt-12">{content.care.map(([icon,n,title,body], index)=>{const Icon = {leaf: Leaf, heart: Heart, sprout: Sprout}[icon]; return <AnimatedItem className="care-card" index={index} key={n}><div className="flex justify-between items-center"><Icon size={30} strokeWidth={1.2}/><span>{n}</span></div><h3>{title}</h3><p>{body}</p></AnimatedItem>})}</div></div></AnimatedSection>
); }
