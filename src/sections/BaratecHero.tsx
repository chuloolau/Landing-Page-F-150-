import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import MobileMenu from '../components/MobileMenu';

const WHATSAPP_HREF =
  'https://wa.me/5493571623675?text=' +
  encodeURIComponent('Hola, quiero cotizar un kit Baratec.');

const NAV_LINKS = [
  { label: 'Desarrollo', href: '#aplicaciones' },
  { label: 'Producto', href: '#productos' },
  { label: 'Instalación', href: '#casos' },
];

export default function BaratecHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col w-full overflow-hidden bg-white"
    >
      <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-12 pt-5 sm:pt-6 md:pt-8 gap-3">
        <a href="#" className="flex items-center" aria-label="Baratec — Inicio">
          <img
            src="/logo-b.png"
            alt="Baratec"
            className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto"
          />
        </a>
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link-fox">
              {link.label}
            </a>
          ))}
        </div>
        <MobileMenu links={NAV_LINKS} ctaHref={WHATSAPP_HREF} />
      </nav>

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] w-full">
        <motion.div
          style={reducedMotion ? undefined : { y: contentY }}
          className="relative flex flex-col items-start justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-16 lg:py-0 bg-white"
        >
          <FadeIn delay={0.25} y={40}>
            <h1
              className="font-display font-black uppercase leading-[0.95] tracking-[-0.01em] text-ink text-left select-none break-words"
              style={{ fontSize: 'clamp(1.875rem, 7vw, 6.5rem)' }}
            >
              <span className="block">F-150</span>
              <span className="accent-gradient block">FORD</span>
              <span className="block">
                CAMBIA TU MANERA
                <br />
                <span className="accent-gradient">DE ANDAR</span>
              </span>
            </h1>
          </FadeIn>
        </motion.div>

        <div className="relative w-full h-[50vh] sm:h-[55vh] lg:h-auto overflow-hidden bg-bg">
          <motion.img
            src="/ford-f-150-lariat-luxury-1225065.jpg"
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            style={
              reducedMotion
                ? { objectPosition: '50% 55%' }
                : {
                    objectPosition: '50% 55%',
                    y: imageY,
                    scale: imageScale,
                  }
            }
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 80% 20%, rgba(221,226,39,0.18) 0%, rgba(0,0,0,0) 55%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
