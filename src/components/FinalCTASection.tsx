import { motion } from 'framer-motion'
import { useMagneticButton } from '../hooks/useMagneticButton'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function FinalCTASection() {
  const magnetic = useMagneticButton(0.15)
  const heading = useScrollReveal(0.4)

  return (
    <section id="contact" className="section-v relative z-10"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(255,93,58,0.05) 0%, var(--color-obsidian) 70%)'
      }}
    >
      <div className="section-container text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div ref={heading.ref}>
            <h2 className={`text-5xl md:text-6xl lg:text-[68px] font-bold font-display mb-[32px] tracking-[-0.03em] leading-[1.05] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
              <span className="text-[var(--color-headline)]">Ready to Scale to</span><br />
              <span className="gradient-text-signal">₹10 Lakh/Month?</span>
            </h2>
          </div>
          <p className="text-xl text-[var(--color-body)] mb-[48px] leading-relaxed max-w-xl mx-auto">
            Book your free strategy call today. We'll map out your custom funnel, show you the gaps in your current system, and build the entire revenue engine for you.
          </p>
          <motion.button
            ref={magnetic.ref as React.RefObject<HTMLButtonElement>}
            onMouseMove={magnetic.handleMouseMove}
            onMouseLeave={magnetic.handleMouseLeave}
            style={{ x: magnetic.springX, y: magnetic.springY }}
            className="btn-coral btn-pulse-glow-coral px-[48px] py-[24px] text-lg cursor-pointer border-none"
          >
            Book Your Free Strategy Call Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
