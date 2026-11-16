import { m, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

// Small, one-time entrances keep long pages calm and respect system preferences.
export function AnimatedSection({ children, delay = 0, ...props }) {
  const reduced = useReducedMotion();
  return <m.section {...props}
    initial={reduced ? false : { opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.75, delay, ease }}>
    {children}
  </m.section>;
}

export function AnimatedItem({ children, index = 0, className = '' }) {
  const reduced = useReducedMotion();
  return <m.div className={className}
    initial={reduced ? false : { opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.65, delay: Math.min(index * 0.09, 0.27), ease }}>
    {children}
  </m.div>;
}

export function Collapsible({ open, children, id, className = '' }) {
  const reduced = useReducedMotion();
  return <m.div id={id} className={`collapsible ${className}`}
    initial={false}
    animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
    transition={{ duration: reduced ? 0 : 0.3, ease }}
    aria-hidden={!open} inert={!open}>
    {children}
  </m.div>;
}
