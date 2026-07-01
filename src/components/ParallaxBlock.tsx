import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  /**
   * Pixeles de desplazamiento vertical total al scrollear.
   * Default 60 = el contenido se mueve 60px en total (de -30 a +30).
   */
  range?: number;
};

/**
 * Envoltorio que aplica un parallax suave: el contenido se desplaza en Y
 * a medida que entra y sale del viewport. Mismo efecto que el Hero y el
 * VideoCallout, ahora reutilizable en cualquier sección.
 */
export default function ParallaxBlock({
  children,
  className,
  range = 60,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const half = range / 2;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${half}px`, `${half}px`],
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
