import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const reasons = [
  "5+ Expert Team Members Working for You",
  "AI-Powered Funnel System",
  "Done-For-You Setup",
  "Weekly Growth Strategy Calls",
  "Scalable Business Model"
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
}

export function WhyUsSection() {
  const heading = useScrollReveal(0.4)

  return (
    <section id="why-us" className="section-v relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-[var(--color-frost-violet)]/[0.02] blur-[100px]" />
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
              <div className="text-[var(--color-frost-violet)] text-[13px] font-bold tracking-widest uppercase mb-[12px]">Why Us</div>
              <div ref={heading.ref}>
                <h2 className={`text-4xl md:text-5xl font-bold font-display mb-[40px] tracking-[-0.02em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
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
              className="flex flex-col gap-[24px]"
            >
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-[20px] p-[24px] glass-card group hover:border-[var(--color-frost-violet)]/20 transition-colors duration-300"
                >
                  <div className="w-[40px] h-[40px] rounded-lg bg-[var(--color-frost-violet)]/10 border border-[var(--color-frost-violet)]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B7CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[var(--color-headline)] text-[17px] font-display font-semibold">{reason}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
