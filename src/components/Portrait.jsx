import { useEffect, useRef, useState } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// Move the entire frame instead of zooming/cropping the face. Mobile stays still.
export default function Portrait({ photo, className = '', priority = false, delay = 0, sizes = '(max-width: 767px) 90vw, 44vw' }) {
 const frame = useRef(null);
 const reduced = useReducedMotion();
 const [desktop, setDesktop] = useState(false);
 useEffect(() => {
  const media = matchMedia('(min-width: 1024px) and (pointer: fine)');
  const update = () => setDesktop(media.matches);
  update(); media.addEventListener('change', update);
  return () => media.removeEventListener('change', update);
 }, []);
 const { scrollYProgress } = useScroll({ target: frame, offset: ['start end', 'end start'] });
 const y = useTransform(scrollYProgress, [0, 1], [8, -8]);
 const reveal = { opacity: 1, y: '-101%' };
 return <div ref={frame} className={`portrait ${className}`} style={{ '--portrait-position': photo.position, '--portrait-mobile-position': photo.mobilePosition || photo.position }}>
  <m.div className="portrait-drift" style={{ y: desktop && !reduced ? y : 0 }}>
   <div className="portrait-mask">
    <m.picture initial={reduced ? false : { opacity: .35 }} {...(priority ? { animate: { opacity: 1 } } : { whileInView: { opacity: 1 }, viewport: { once: true, amount: .15 } })} transition={{ duration: .8, delay }}>
     <source type="image/webp" srcSet={photo.srcSet} sizes={sizes}/>
     <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={sizes} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async"/>
    </m.picture>
    {!reduced && <m.span aria-hidden="true" className="portrait-curtain" initial={{ opacity: 1, y: '0%' }} {...(priority ? { animate: reveal } : { whileInView: reveal, viewport: { once: true, amount: .15 } })} transition={{ duration: 1.05, delay, ease: [.22, 1, .36, 1] }}/>} 
   </div>
  </m.div>
 </div>;
}
