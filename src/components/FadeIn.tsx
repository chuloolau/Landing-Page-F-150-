import { motion } from 'framer-motion';
import type {
  ReactNode,
  ElementType,
  ComponentType,
  CSSProperties,
} from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

const motionCache = new Map<string, ComponentType<Record<string, unknown>>>();

function getMotionComponent(as: ElementType): ComponentType<Record<string, unknown>> {
  if (typeof as === 'string') {
    const cached = motionCache.get(as);
    if (cached) return cached;
    const created = motion.create(as) as ComponentType<Record<string, unknown>>;
    motionCache.set(as, created);
    return created;
  }
  return motion.create(as) as ComponentType<Record<string, unknown>>;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
}: FadeInProps) {
  const MotionComponent = getMotionComponent(as);

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px', amount: 0.1 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
}
