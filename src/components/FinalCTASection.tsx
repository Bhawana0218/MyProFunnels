import { motion } from 'framer-motion'
import { useMagneticButton } from '../hooks/useMagneticButton'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { STRATEGY_CALL_URL } from '../constants'

export function FinalCTASection() {
  const magnetic = useMagneticButton<HTMLAnchorElement>(0.15)
  const heading = useScrollReveal(0.4)

  return (
    <section
      id="contact"
      className="section-v relative z-10 overflow-hidden mt-[48px] md:mt-[64px]"
      style={{
        background: 'radial-gradient(ellipse at 50% 45%, rgba(255,93,58,0.09) 0%, rgba(11,12,16,0) 58%)'
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-[8%] top-[18%] w-[180px] h-[180px] rounded-full border border-[var(--color-coral)]/10" />
        <div className="absolute left-[calc(8%+24px)] top-[calc(18%+24px)] w-[132px] h-[132px] rounded-full border border-[var(--color-coral)]/10" />
        <div className="absolute right-[8%] bottom-[16%] w-[220px] h-[220px] rounded-full border border-[var(--color-frost-violet)]/10" />
      </div>

      <div className="section-container relative">
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.055] via-white/[0.02] to-[var(--color-coral)]/[0.06] px-[24px] py-[56px] md:px-[64px] md:py-[72px] text-center shadow-[0_24px_100px_rgba(0,0,0,0.28)]">
          <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[420px] h-[260px] rounded-full bg-[var(--color-coral)]/10 blur-[90px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-64px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-[10px] px-[14px] py-[8px] rounded-full bg-[var(--color-coral)]/[0.1] border border-[var(--color-coral)]/20 text-[var(--color-coral-light)] text-[11px] font-bold tracking-[0.16em] uppercase mb-[28px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              Limited Time Offer
            </div>

            <div ref={heading.ref}>
              <h2 className={`text-4xl md:text-6xl font-bold font-display leading-[1.02] tracking-[-0.04em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
                Your Growth Starts Here
              </h2>
            </div>
            <p className="text-lg md:text-xl text-[var(--color-body)] max-w-2xl mt-[24px] mb-[36px] leading-relaxed">
              Book your free strategy call and get a custom growth roadmap for your business.
            </p>

            <motion.a
              href={STRATEGY_CALL_URL}
              ref={magnetic.ref}
              onMouseMove={magnetic.handleMouseMove}
              onMouseLeave={magnetic.handleMouseLeave}
              style={{ x: magnetic.springX, y: magnetic.springY }}
              className="btn-coral btn-pulse-glow-coral no-underline px-[32px] md:px-[44px] py-[20px] text-base md:text-lg"
            >
              Book Your Free Strategy Call Today
              <span aria-hidden="true">↗</span>
            </motion.a>

            <div className="flex flex-wrap justify-center gap-x-[24px] gap-y-[8px] mt-[28px] text-[12px] text-[var(--color-body-dim)]">
              <span>Personalised growth roadmap</span>
              <span className="hidden sm:inline text-[var(--color-coral)]/60">•</span>
              <span>No pressure, just clarity</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
