import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type NavLink = { label: string; href: string };

type Props = {
  links: NavLink[];
  ctaHref: string;
  ctaLabel?: string;
};

export default function MobileMenu({
  links,
  ctaHref,
  ctaLabel = 'Cotizar',
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-ink/15 text-ink/80 hover:border-ink/40 hover:text-ink transition-colors"
      >
        <Menu size={20} strokeWidth={2} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navegación principal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50"
          >
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="absolute inset-0 w-full h-full cursor-default"
              style={{
                backgroundColor: 'rgba(10,10,11,0.45)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute top-3 left-3 right-3 rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: '#1C1C1C',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 60px -10px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-ink/5">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
                  Menú
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full text-ink/60 hover:text-ink hover:bg-ink/5 transition-colors"
                >
                  <X size={18} strokeWidth={2} />
                </button>
              </div>
              <nav className="flex flex-col p-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-4 rounded-xl text-ink font-display font-black uppercase text-lg tracking-[-0.01em] hover:bg-[#DDE227] hover:text-[#0A0A0A] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="p-4 pt-1">
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-full font-semibold uppercase tracking-[0.18em] py-3.5 text-xs"
                  style={{
                    backgroundColor: '#DDE227',
                    color: '#0A0A0B',
                    boxShadow:
                      '0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 32px -8px rgba(221,226,39,0.45)',
                  }}
                >
                  {ctaLabel}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
