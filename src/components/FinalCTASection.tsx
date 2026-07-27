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
      className="section-v relative z-10 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 45%, rgba(255,107,53,0.08) 0%, rgba(10,10,15,0) 58%)'
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[var(--color-orange)]/[0.02] to-transparent" />
      </div>

      <div className="section-container relative">
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-[var(--color-orange)]/[0.04] px-[24px] py-[56px] md:px-[64px] md:py-[72px] text-center shadow-[0_24px_100px_rgba(0,0,0,0.28)]">
          <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[420px] h-[260px] rounded-full bg-[var(--color-orange)]/8 blur-[90px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-64px' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="eyebrow mb-[28px]">Limited Time Offer</div>

            <div ref={heading.ref}>
              <h2 className={`text-4xl md:text-[56px] font-bold font-display leading-[1.02] tracking-[-0.04em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
                Your Growth Starts Here
              </h2>
            </div>
            <p className="text-[16px] md:text-[20px] text-[var(--color-body)] max-w-2xl mt-[24px] mb-[36px] leading-relaxed">
              Book your free strategy call and get a custom growth roadmap for your business.
            </p>

            <motion.a
              href={STRATEGY_CALL_URL}
              ref={magnetic.ref}
              onMouseMove={magnetic.handleMouseMove}
              onMouseLeave={magnetic.handleMouseLeave}
              style={{ x: magnetic.springX, y: magnetic.springY }}
              className="btn-orange btn-pulse-orange no-underline px-[32px] md:px-[44px] py-[20px] text-[16px] md:text-[18px]"
            >
              Book Your Free Strategy Call Today
              <span aria-hidden="true">↗</span>
            </motion.a>

            <div className="flex flex-wrap justify-center gap-x-[24px] gap-y-[8px] mt-[28px] text-[12px] text-[var(--color-body-dim)]">
              <span>Personalised growth roadmap</span>
              <span className="hidden sm:inline text-[var(--color-orange)]/60">•</span>
              <span>No pressure, just clarity</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
