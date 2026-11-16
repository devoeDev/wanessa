import { AnimatedSection, AnimatedItem } from './Animations';
import React from 'react';

import { content } from '../config';
export default function Process() { return (
<AnimatedSection id="processo" className="shell section"><div className="text-center"><p className="eyebrow">UM PASSO DE CADA VEZ</p><h2>Seu cuidado começa<br/><em>com uma conversa.</em></h2></div><div className="steps grid md:grid-cols-3 gap-10">{content.steps.map(([n,t,d], index)=><AnimatedItem index={index} key={n}><span className="step-number">{n}</span><h3>{t}</h3><p>{d}</p></AnimatedItem>)}</div></AnimatedSection>
); }
