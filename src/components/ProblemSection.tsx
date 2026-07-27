import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    title: "No Lead Capture System",
    desc: "Leads visit, leave, and are gone forever without a trace."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Zero Automation",
    desc: "Still manually following up on WhatsApp at midnight."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "No Sales Funnel",
    desc: "No sequence to nurture cold leads into paying clients."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
    title: "10 Tools, 10 Logins",
    desc: "Paying for tools you barely use, none talk to each other."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Revenue Plateaued",
    desc: "Working harder but your income stays exactly flat."
  }
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
}

export function ProblemSection() {
  const heading = useScrollReveal(0.4)

  return (
    <section id="problem" className="section-v relative z-10">
      <div className="section-container">
        {/* Left-aligned heading for asymmetric rhythm */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5 }}
          className="mb-[48px]"
        >
          <div ref={heading.ref}>
            <h2 className={`text-4xl md:text-5xl font-bold font-display mb-[16px] tracking-[-0.02em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
              Sound familiar?
            </h2>
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[var(--color-signal-green)] to-[var(--color-signal-green-dark)] rounded-full"></div>
        </motion.div>

        {/* Asymmetric card layout: 2-col on md, with first card spanning wider on lg */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-64px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]"
        >
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card glass-card-hover p-[32px] relative overflow-hidden group"
            >
              {/* Signal-green top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-signal-green)] to-[var(--color-signal-green-dark)] opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-[var(--color-signal-green)] mb-[24px] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {prob.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--color-headline)] mb-[12px] font-display">{prob.title}</h3>
              <p className="text-[var(--color-body)] text-[15px] leading-relaxed">{prob.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
