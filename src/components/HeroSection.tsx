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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } }
}

export function HeroSection() {
  const magnetic = useMagneticButton<HTMLAnchorElement>(0.2)
  const headline = useScrollReveal(0.4)

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-[128px] pb-[96px] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[var(--color-teal)]/[0.03] blur-[150px]" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-[48px] items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 pt-[64px] md:pt-[96px]"
          >
            <motion.div
              variants={fadeUp}
              className="inline-block px-[16px] py-[8px] rounded-full border border-[var(--color-teal)]/20 bg-[var(--color-teal)]/5 mb-[32px]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-[6px] -mt-[2px] text-[var(--color-teal)]"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span className="eyebrow">India&apos;s #1 AI Funnel System</span>
            </motion.div>

            <div ref={headline.ref}>
              <motion.h1
                variants={fadeUp}
                className={`text-5xl md:text-6xl lg:text-[78px] font-display leading-[1.02] mb-[32px] tracking-[-0.04em] text-reveal ${headline.isRevealed ? 'revealed' : ''}`}
              >
                <span className="text-[var(--color-headline)]">Build, Automate &</span><br />
                <span className="text-[var(--color-headline)]">Scale Your Business</span><br />
                <span className="gradient-text-teal">with AI Funnels</span>
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-[var(--color-body)] mb-[40px] leading-relaxed max-w-[500px]"
            >
              India&apos;s Complete Done-For-You AI Funnel System with Expert Team Support — So You Focus on Growth, Not Tech.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-[16px] items-center mb-[48px]">
              <motion.a
                href={STRATEGY_CALL_URL}
                ref={magnetic.ref}
                onMouseMove={magnetic.handleMouseMove}
                onMouseLeave={magnetic.handleMouseLeave}
                style={{ x: magnetic.springX, y: magnetic.springY }}
                className="btn-orange no-underline"
              >
                Book Free Strategy Call
              </motion.a>
              <a href={STRATEGY_CALL_URL} className="btn-ghost no-underline">
                Get Started Now
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-[12px]">
              <p className="text-[12px] text-[var(--color-body-dim)] font-medium tracking-[0.15em] uppercase">Trusted by 500+ Indian entrepreneurs</p>
            </motion.div>
          </motion.div>

          <div className="md:col-span-5">
            <FunnelScene />
          </div>
        </div>

        <FunnelMobile />
      </div>
    </section>
  )
}
