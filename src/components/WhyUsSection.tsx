import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const reasons = [
  "5+ Expert Team Members Working for You",
  "AI-Powered Funnel System",
  "Done-For-You Setup",
  "Weekly Growth Strategy Calls",
  "Scalable Business Model"
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } } }

export function WhyUsSection() {
  const heading = useScrollReveal(0.4)

  return (
    <section id="why-us" className="section-v relative z-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--color-obsidian) 0%, rgba(45,212,191,0.01) 50%, var(--color-obsidian) 100%)' }}
    >
      <div className="section-container relative">
        <div className="grid md:grid-cols-12 gap-[48px] items-center">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="eyebrow mb-[12px]">Why Us</div>
              <div ref={heading.ref}>
                <h2 className={`text-4xl md:text-[48px] font-bold font-display mb-[40px] tracking-[-0.03em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
                  What Makes Us Different
                </h2>
              </div>
              <p className="text-[var(--color-body)] text-[16px] leading-relaxed">
                We aren&apos;t just another software platform or agency. We provide a complete, done-for-you growth ecosystem backed by actual business architects who build, support, and optimize every funnel with you.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-64px" }}
              className="flex flex-col gap-[16px]"
            >
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="glass-card p-[24px] flex items-center gap-[20px]"
                >
                  <div className="w-[40px] h-[40px] rounded-xl bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[var(--color-headline)] text-[16px] font-display font-semibold">{reason}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
