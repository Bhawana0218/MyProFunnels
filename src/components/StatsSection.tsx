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
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-[var(--color-teal)]/[0.02] blur-[120px]" />
      </div>

      <div className="section-container relative">
        <div className="grid md:grid-cols-12 gap-[48px] items-center">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="eyebrow mb-[12px]">Our Impact</div>
              <div ref={heading.ref}>
                <h2 className={`text-4xl md:text-[48px] font-bold font-display tracking-[-0.03em] text-[var(--color-headline)] text-reveal mb-[40px] ${heading.isRevealed ? 'revealed' : ''}`}>
                  Proven Results That Speak
                </h2>
              </div>
              <p className="text-[var(--color-body)] text-[16px] leading-relaxed mb-[40px]">
                We deliver measurable growth, scale operations, and build long-term revenue channels for our partners.
              </p>

              <div className="flex flex-col gap-[24px]">
                <div ref={countFunnels.ref}>
                  <div className="flex items-baseline gap-[12px] mb-[8px]">
                    <span className="text-[40px] font-bold font-display stat-value">{countFunnels.count}+</span>
                    <span className="text-[var(--color-body)] text-[14px] font-medium">Funnels Built</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-teal-dark)]"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${Math.min((countFunnels.count / 1200) * 100, 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    />
                  </div>
                </div>

                <div ref={countClients.ref}>
                  <div className="flex items-baseline gap-[12px] mb-[8px]">
                    <span className="text-[40px] font-bold font-display stat-value">{countClients.count}+</span>
                    <span className="text-[var(--color-body)] text-[14px] font-medium">Clients Served</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-teal-dark)]"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${Math.min((countClients.count / 600) * 100, 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                    />
                  </div>
                </div>

                <div ref={countConversion.ref}>
                  <div className="flex items-baseline gap-[12px] mb-[8px]">
                    <span className="text-[40px] font-bold font-display gradient-text-teal">{countConversion.count}X</span>
                    <span className="text-[var(--color-body)] text-[14px] font-medium">Avg. Conversion Boost</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-teal-dark)]"
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${Math.min((countConversion.count / 5) * 100, 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-card p-[48px] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-teal)] via-[var(--color-teal-dark)] to-[var(--color-teal)] opacity-60" />
              <div className="grid grid-cols-3 gap-[32px] text-center">
                <div>
                  <div className="text-[48px] md:text-[56px] font-bold font-display mb-[8px] stat-value">{countFunnels.count}+</div>
                  <div className="text-[var(--color-body)] text-[12px] font-medium uppercase tracking-[0.15em]">Funnels Built</div>
                </div>
                <div>
                  <div className="text-[48px] md:text-[56px] font-bold font-display mb-[8px] stat-value">{countClients.count}+</div>
                  <div className="text-[var(--color-body)] text-[12px] font-medium uppercase tracking-[0.15em]">Clients Served</div>
                </div>
                <div>
                  <div className="text-[48px] md:text-[56px] font-bold font-display mb-[8px] gradient-text-teal">{countConversion.count}X</div>
                  <div className="text-[var(--color-body)] text-[12px] font-medium uppercase tracking-[0.15em]">Avg. Conversion Boost</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
