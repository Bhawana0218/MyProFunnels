import { motion } from 'framer-motion'
import { FunnelScene } from '../three/FunnelScene'
import { FunnelMobile } from '../three/FunnelMobile'
import { useMagneticButton } from '../hooks/useMagneticButton'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { STRATEGY_CALL_URL } from '../constants'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
}

export function HeroSection() {
  const magnetic = useMagneticButton<HTMLAnchorElement>(0.2)
  const headline = useScrollReveal(0.4)

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-[128px] pb-[96px] overflow-hidden">
      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-[48px] items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="md:col-span-8 pt-[64px] md:pt-[96px]"
          >
            <motion.div
              variants={fadeUp}
              className="inline-block px-[16px] py-[8px] rounded-full border border-[var(--color-signal-green)]/20 bg-[var(--color-signal-green)]/5 mb-[32px] text-sm font-medium text-[var(--color-signal-green)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-[6px] -mt-[2px]"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
               India's #1 AI Funnel System
            </motion.div>

            <div ref={headline.ref}>
              <motion.h1
                variants={fadeUp}
                className={`text-5xl md:text-6xl lg:text-[72px] font-display leading-[1.05] mb-[32px] tracking-[-0.03em] text-reveal ${headline.isRevealed ? 'revealed' : ''}`}
              >
                <span className="text-[var(--color-headline)]">Build, Automate &</span><br />
                <span className="text-[var(--color-headline)]">Scale Your Business</span><br />
                <span className="gradient-text-signal">with AI Funnels</span>
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-[var(--color-body)] mb-[40px] leading-relaxed max-w-xl"
            >
              India's Complete Done-For-You AI Funnel System with Expert Team Support — So You Focus on Growth, Not Tech.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-[16px] items-center mb-[48px]">
              <motion.a
                href={STRATEGY_CALL_URL}
                ref={magnetic.ref}
                onMouseMove={magnetic.handleMouseMove}
                onMouseLeave={magnetic.handleMouseLeave}
                style={{ x: magnetic.springX, y: magnetic.springY }}
                className="btn-coral no-underline"
              >
                Book Free Strategy Call
              </motion.a>
              <a href={STRATEGY_CALL_URL} className="btn-ghost no-underline">
                Get Started Now
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-[12px]">
              <p className="text-[13px] text-[var(--color-body-dim)] font-medium tracking-wider uppercase">Trusted by 500+ Indian entrepreneurs</p>
              <div className="flex gap-[24px] items-center">
                <svg className="h-6 w-auto opacity-25" viewBox="0 0 64 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="1" y="4" width="16" height="16" rx="3" />
                  <line x1="9" y1="8" x2="9" y2="16" />
                  <line x1="5" y1="12" x2="13" y2="12" />
                  <circle cx="32" cy="12" r="8" />
                  <path d="M29 12h6M32 9v6" strokeLinecap="round" />
                  <path d="M48 4l-5 16-5-16M43 16h7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          <div className="md:col-span-4">
            <FunnelScene />
          </div>
        </div>

        <FunnelMobile />
      </div>
    </section>
  )
}
