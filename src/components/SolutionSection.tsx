import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const nodes = [
  {
    label: "Landing Page",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    )
  },
  {
    label: "CRM",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    label: "WhatsApp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    )
  },
  {
    label: "Funnel",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  },
  {
    label: "Sale",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
}

const fadeScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
}

export function SolutionSection() {
  const heading = useScrollReveal(0.4)

  return (
    <section id="how-it-works" className="section-v relative z-10 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[48px]"
        >
          <div ref={heading.ref}>
            <h2 className={`text-4xl md:text-5xl font-bold font-display mb-[16px] tracking-[-0.02em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
              One Ecosystem. <span className="gradient-text-signal">Zero Chaos.</span>
            </h2>
          </div>
          <p className="text-[var(--color-body)] max-w-2xl mx-auto text-lg leading-relaxed">
            We build a completely automated, done-for-you system that handles everything from the first click to the final payment.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting signal line — the stream flowing between nodes */}
          <div className="absolute top-[48px] left-[8%] w-[84%] h-[3px] bg-white/[0.04] hidden md:block rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-frost-violet)] via-[var(--color-signal-green)] to-[var(--color-signal-green-dark)] rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-64px" }}
            className="flex flex-col md:flex-row justify-between items-center gap-[32px] md:gap-[16px] relative z-10"
          >
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                variants={fadeScale}
                className="relative flex flex-col items-center group w-full md:w-auto"
              >
                <div className="w-[80px] h-[80px] rounded-full glass-card flex items-center justify-center text-[var(--color-signal-green)] mb-[16px] transition-all duration-400 group-hover:node-glow-active node-glow bg-[var(--color-obsidian)] relative z-20 border border-white/[0.06] group-hover:border-[var(--color-signal-green)]/30">
                  {node.icon}
                </div>
                <div className="font-semibold text-sm text-[var(--color-body)] group-hover:text-[var(--color-headline)] transition-colors duration-300">{node.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
