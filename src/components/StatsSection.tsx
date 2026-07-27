import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function StatsSection() {
  const countFunnels = useCountUp(1000, 2200)
  const countClients = useCountUp(500, 2200)
  const countConversion = useCountUp(3, 1800)
  const heading = useScrollReveal(0.4)

  return (
    <section id="stats" className="section-v relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-teal)]/[0.03] blur-[160px]" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[40px] md:mb-[64px]"
        >
          <div className="eyebrow mb-[12px]">Our Impact</div>
          <div ref={heading.ref}>
            <h2 className={`text-[28px] sm:text-4xl md:text-[48px] font-bold font-display tracking-[-0.03em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
              Proven Results That Speak
            </h2>
          </div>
        </motion.div>

        {/* Big stat numbers — centered row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-[16px] sm:gap-[24px] md:gap-[32px] mb-[40px] md:mb-[56px] max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div ref={countFunnels.ref} className="text-[32px] sm:text-[48px] md:text-[64px] font-bold font-display stat-value leading-none mb-[6px] md:mb-[8px]">{countFunnels.count}+</div>
            <div className="text-[var(--color-body)] text-[10px] sm:text-[12px] md:text-[13px] font-medium uppercase tracking-[0.1em] md:tracking-[0.12em]">Funnels Built</div>
          </div>
          <div className="text-center">
            <div ref={countClients.ref} className="text-[32px] sm:text-[48px] md:text-[64px] font-bold font-display stat-value leading-none mb-[6px] md:mb-[8px]">{countClients.count}+</div>
            <div className="text-[var(--color-body)] text-[10px] sm:text-[12px] md:text-[13px] font-medium uppercase tracking-[0.1em] md:tracking-[0.12em]">Clients Served</div>
          </div>
          <div className="text-center">
            <div ref={countConversion.ref} className="text-[32px] sm:text-[48px] md:text-[64px] font-bold font-display gradient-text-teal leading-none mb-[6px] md:mb-[8px]">{countConversion.count}X</div>
            <div className="text-[var(--color-body)] text-[10px] sm:text-[12px] md:text-[13px] font-medium uppercase tracking-[0.1em] md:tracking-[0.12em]">Avg. Conversion Boost</div>
          </div>
        </motion.div>

        {/* Supporting detail */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[var(--color-body)] text-[15px] md:text-[16px] leading-relaxed px-[8px]">
            We deliver measurable growth, scale operations, and build long-term revenue channels for our partners across India.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
