import { useScrollProgress } from '../hooks/useScrollProgress'
import { useMagneticButton } from '../hooks/useMagneticButton'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import { STRATEGY_CALL_URL } from '../constants'

const navLinks = [
  { href: '#problem', label: 'Challenge' },
  { href: '#solution', label: 'Solution' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#stats', label: 'Results' },
  { href: '#testimonials', label: 'Testimonials' },
]

// ─── Navbar ───
export function Navbar() {
  const { pastThreshold, progress } = useScrollProgress(50)
  const magnetic = useMagneticButton<HTMLAnchorElement>(0.2)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60] transition-none"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, #2dd4bf, #14b8a6, #ff6b35)',
        }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          pastThreshold
            ? 'bg-[var(--color-obsidian)]/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'py-5 md:py-7 bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-20 flex justify-end md:justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block text-[20px] md:text-[22px] font-bold font-display tracking-tight cursor-pointer select-none"
          >
            My<span className="gradient-text-teal">Pro</span>Funnels
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2 text-[13px] font-medium">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative px-4 py-2 text-[var(--color-body-dim)] hover:text-[var(--color-headline)] transition-colors duration-300 group no-underline"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[var(--color-teal)] group-hover:w-3/4 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </motion.a>
            ))}

            <motion.a
              href={STRATEGY_CALL_URL}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              ref={magnetic.ref}
              onMouseMove={magnetic.handleMouseMove}
              onMouseLeave={magnetic.handleMouseLeave}
              style={{ x: magnetic.springX, y: magnetic.springY }}
              className="btn-teal btn-shimmer px-5 py-2.5 text-[13px] no-underline ml-3"
            >
              Book Strategy Call
            </motion.a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden ml-auto relative w-[44px] h-[44px] flex items-center justify-center bg-transparent border-none cursor-pointer z-[110]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="flex flex-col justify-center items-center w-[22px] h-[16px]">
              <span className={`block h-[2px] bg-[var(--color-headline)] rounded-full transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileOpen ? 'w-[22px] rotate-45 translate-y-[0px]' : 'w-[22px] -translate-y-[5px]'}`} />
              <span className={`block h-[2px] bg-[var(--color-headline)] rounded-full transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileOpen ? 'w-[22px] -rotate-45 translate-y-[0px]' : 'w-[14px] translate-y-[3px]'}`} />
            </span>
          </button>
        </div>
      </header>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 my-20 z-[100] md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[var(--color-obsidian)]/85 backdrop-blur-2xl"
              onClick={closeMobile}
            />

            {/* Menu panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 w-[min(85vw,360px)] h-full pt-[90px] pb-[40px] px-6 flex flex-col"
              style={{
                background: 'linear-gradient(180deg, rgba(14,14,20,0.98) 0%, rgba(10,10,15,0.99) 100%)',
                borderLeft: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex flex-col gap-[4px]">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="relative py-[14px] px-[16px] text-[var(--color-body)] text-[16px] font-display font-medium rounded-xl hover:text-[var(--color-headline)] hover:bg-white/[0.04] transition-all duration-300 no-underline group"
                  >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-[var(--color-teal)] rounded-full group-hover:h-5 transition-all duration-300" />
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + navLinks.length * 0.06 }}
                >
                  <a
                    href={STRATEGY_CALL_URL}
                    onClick={closeMobile}
                    className="btn-orange btn-shimmer w-full text-center no-underline text-[15px] py-[16px]"
                  >
                    Book Strategy Call
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-[24px] flex items-center gap-[8px] justify-center"
                >
                  <span className="w-[6px] h-[6px] rounded-full bg-[var(--color-teal)] shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
                  <span className="text-[11px] text-[var(--color-body-dim)] uppercase tracking-[0.15em]">Available for new clients</span>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
