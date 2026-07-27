import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="17" y1="11" x2="23" y2="11" />
      </svg>
    ),
    title: "Low-Quality Leads",
    desc: "Wasting time on prospects who never convert into paying customers.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "No Proper Funnel",
    desc: "No clear path from visitor to paying customer — just hope and pray.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Manual Follow-Ups",
    desc: "Losing leads daily because your team can't respond fast enough.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Poor Conversions",
    desc: "Great traffic, great product — but the money just isn't growing.",
  }
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
}

export function ProblemSection() {
  const heading = useScrollReveal(0.4)

  return (
    <section id="problem" className="section-v relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[var(--color-orange)]/[0.03] blur-[120px]" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5 }}
          className="mb-[56px] max-w-2xl"
        >
          <div className="eyebrow mb-[12px]">The Struggle</div>
          <div ref={heading.ref}>
            <h2 className={`text-4xl md:text-[48px] font-bold font-display mb-[24px] tracking-[-0.03em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
              Most Businesses Struggle With...
            </h2>
          </div>
          <p className="text-[var(--color-body)] text-[16px] leading-relaxed">
            Without proper marketing funnels and automation, high-potential businesses fail to scale due to leakage in their lead lifecycle.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-64px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[20px]"
        >
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card p-[32px] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-orange)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-[20px]">
                <div className="w-[44px] h-[44px] rounded-xl bg-[var(--color-orange)]/10 border border-[var(--color-orange)]/15 flex items-center justify-center text-[var(--color-orange)] flex-shrink-0">
                  {prob.icon}
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[var(--color-headline)] mb-[8px] font-display">{prob.title}</h3>
                  <p className="text-[var(--color-body)] text-[14px] leading-relaxed">{prob.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-[32px] p-[24px] border-l-[3px] border-l-[var(--color-orange)]/60"
        >
          <p className="text-[var(--color-body)] text-[16px]">
            <span className="text-[var(--color-headline)] font-semibold">The result?</span> Wasted ad spend, missed opportunities, and competitors eating your market share.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
