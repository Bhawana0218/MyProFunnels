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
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-[var(--color-frost-violet)]/[0.025] blur-[120px]" />
      </div>

      <div className="section-container relative">
        <div className="grid md:grid-cols-12 gap-[48px] items-center">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[var(--color-signal-green)] text-[13px] font-bold tracking-widest uppercase mb-[12px]">Our Impact</div>
              <div ref={heading.ref}>
                <h2 className={`text-4xl md:text-5xl font-bold font-display tracking-[-0.02em] text-[var(--color-headline)] text-reveal mb-[40px] ${heading.isRevealed ? 'revealed' : ''}`}>
                  Proven Results That Speak
                </h2>
              </div>
              <p className="text-[var(--color-body)] text-[16px] leading-relaxed mb-[40px]">
                We deliver measurable growth, scale operations, and build long-term revenue channels for our partners.
              </p>

              <div className="flex flex-col gap-[20px]">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-48px" }}
                  transition={{ duration: 0.5, delay: 0 }}
                  className="flex items-baseline gap-[12px]"
                >
                  <span className="text-4xl font-bold font-display stat-value">{countFunnels.count}+</span>
                  <span className="text-[var(--color-body)] text-[14px] font-medium">Funnels Built</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-48px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-baseline gap-[12px]"
                >
                  <span className="text-4xl font-bold font-display stat-value">{countClients.count}+</span>
                  <span className="text-[var(--color-body)] text-[14px] font-medium">Clients Served</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-48px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-baseline gap-[12px]"
                >
                  <span className="text-4xl font-bold font-display gradient-text-signal">{countConversion.count}X</span>
                  <span className="text-[var(--color-body)] text-[14px] font-medium">Avg. Conversion Boost</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-[48px] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-signal-green)] via-[var(--color-signal-green-dark)] to-[var(--color-frost-violet)] opacity-60" />
              <div className="grid grid-cols-3 gap-[32px] text-center">
                <div>
                  <div className="text-5xl md:text-6xl font-bold font-display mb-[8px] stat-value">
                    {countFunnels.count}+
                  </div>
                  <div className="text-[var(--color-body)] text-[13px] font-medium uppercase tracking-wider">Funnels Built</div>
                </div>
                <div ref={countClients.ref}>
                  <div className="text-5xl md:text-6xl font-bold font-display mb-[8px] stat-value">
                    {countClients.count}+
                  </div>
                  <div className="text-[var(--color-body)] text-[13px] font-medium uppercase tracking-wider">Clients Served</div>
                </div>
                <div ref={countConversion.ref}>
                  <div className="text-5xl md:text-6xl font-bold font-display mb-[8px] gradient-text-signal">
                    {countConversion.count}X
                  </div>
                  <div className="text-[var(--color-body)] text-[13px] font-medium uppercase tracking-wider">Avg. Conversion Boost</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
