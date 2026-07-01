import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ParallaxBlock from '../components/ParallaxBlock';
import AssetPlaceholder from '../components/AssetPlaceholder';

type Application = {
  title: string;
  filename: string;
  objectPosition?: string;
  ready?: boolean;
};

const applications: Application[] = [
  {
    title: 'Off road',
    filename: 'Ford-F-150-2025-5.jpg',
    objectPosition: '50% 60%',
    ready: true,
  },
  {
    title: 'Campo',
    filename: '2025_RSF_Build_F-150KingRanch_1.avif',
    objectPosition: '50% 55%',
    ready: true,
  },
  {
    title: 'Pick-up',
    filename: 'f-150-lariat-blanca.jpg',
    objectPosition: '50% 60%',
    ready: true,
  },
];

export default function ApplicationsSection() {
  return (
    <section
      id="aplicaciones"
      className="relative px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-32 bg-bg overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/amortiguadores-bg.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: '50% 55%',
            opacity: 0.25,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.65) 18%, rgba(10,10,10,0.20) 38%, rgba(10,10,10,0.20) 62%, rgba(10,10,10,0.75) 82%, rgba(10,10,10,1) 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(circle at 85% 50%, rgba(221,226,39,0.10) 0%, rgba(10,10,10,0) 45%)',
          }}
        />
      </div>

      <ParallaxBlock className="relative z-10 max-w-[1600px] mx-auto" range={50}>
        <FadeIn>
          <h2
            className="font-display font-black uppercase leading-[0.88] tracking-[-0.02em] text-ink text-center mb-10 sm:mb-14 md:mb-20"
            style={{ fontSize: 'clamp(2.25rem, 12vw, 11rem)' }}
          >
            High Performance
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {applications.map((app, i) => (
            <FadeIn key={app.title} delay={i * 0.1}>
              <a
                href="#contacto"
                className="relative block overflow-hidden aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] group cursor-pointer transition-transform duration-500 hover:-translate-y-1"
              >
                {app.ready ? (
                  <img
                    src={`/${app.filename}`}
                    alt={`${app.title} — Aplicación Baratec F-150`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    style={
                      app.objectPosition
                        ? { objectPosition: app.objectPosition }
                        : undefined
                    }
                  />
                ) : (
                  <AssetPlaceholder
                    filename={app.filename}
                    className="absolute inset-0 w-full h-full transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  />
                )}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,10,11,0) 40%, rgba(10,10,11,0.85) 100%)',
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 100%, rgba(221,226,39,0.2) 0%, rgba(10,10,11,0) 60%)',
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 md:bottom-8 md:left-8 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <h3 className="font-display font-black uppercase tracking-[-0.01em] text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1.5 sm:mb-2">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/80 transition-colors duration-300 group-hover:text-[#DDE227]">
                    <span>Conocer más</span>
                    <ArrowUpRight
                      size={12}
                      strokeWidth={2.2}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </ParallaxBlock>
    </section>
  );
}
