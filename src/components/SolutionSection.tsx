import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const promises = [
  'Complete AI Funnel Setup',
  'Done-for-You Marketing Systems',
  'Automation & CRM Integration',
  'Expert Growth Team Support'
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
}

const nodes = [
  {
    label: "Landing Page",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    desc: "Capture"
  },
  {
    label: "CRM",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    desc: "Organize"
  },
  {
    label: "WhatsApp",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    desc: "Nurture"
  },
  {
    label: "Funnel",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    desc: "Convert"
  },
  {
    label: "Sale",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    desc: "Revenue"
  }
]

export function SolutionSection() {
  const heading = useScrollReveal(0.4)
  const pipelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(pipelineRef, { once: true, margin: "-100px" })

  return (
    <section id="solution" className="section-v relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[var(--color-signal-green)]/[0.03] blur-[120px]" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[40px]"
        >
          <div className="text-[var(--color-signal-green)] text-[13px] font-bold tracking-widest uppercase mb-[12px]">Our Solution</div>
          <div ref={heading.ref}>
            <h2 className={`text-4xl md:text-5xl font-bold font-display mb-[40px] tracking-[-0.02em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
              One Ecosystem. <span className="gradient-text-signal">Zero Chaos.</span>
            </h2>
          </div>
          <p className="text-[var(--color-body)] max-w-2xl mx-auto text-lg leading-relaxed">
            A complete done-for-you AI funnel system that connects your marketing, automation, and growth strategy in one place.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-64px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] max-w-4xl mx-auto mb-[64px]"
        >
          {promises.map((promise) => (
            <motion.div
              key={promise}
              variants={fadeUp}
              className="glass-card p-[22px] flex items-center gap-[16px] border border-[var(--color-signal-green)]/10"
            >
              <span className="w-[32px] h-[32px] rounded-full bg-[var(--color-signal-green)]/10 text-[var(--color-signal-green)] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span className="text-[var(--color-headline)] text-[15px] font-display font-semibold">{promise}</span>
            </motion.div>
          ))}
        </motion.div>

        <div ref={pipelineRef} className="relative max-w-6xl mx-auto">
          <div className="hidden md:block relative h-[200px]">
            <div className="absolute top-[48px] left-[48px] right-[48px] h-[2px] bg-white/[0.06] rounded-full" />

            <motion.div
              className="absolute top-[48px] left-[48px] h-[2px] rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00E28A, #00B8D9, #8B7CF6, #00E28A)',
                backgroundSize: '200% 100%',
              }}
              initial={{ width: "0%" }}
              animate={isInView ? { width: "calc(100% - 96px)" } : { width: "0%" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />

            {isInView && (
              <motion.div
                className="absolute top-[44px] h-[12px] w-[80px] rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(0,226,138,0.5), transparent)',
                  filter: 'blur(4px)',
                }}
                initial={{ left: "48px", opacity: 0 }}
                animate={{ left: ["48px", "calc(100% - 128px)", "48px"], opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
              />
            )}

            {nodes.map((node, i) => {
              const leftPercent = (i / (nodes.length - 1)) * 100
              return (
                <motion.div
                  key={i}
                  className="absolute flex flex-col items-center group"
                  style={{ left: `${leftPercent}%`, top: 0, transform: 'translateX(-50%)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  <div className="mb-[16px] text-center">
                    <div className="text-[11px] text-[var(--color-body-dim)] uppercase tracking-wider font-medium mb-[2px]">Step {String(i + 1).padStart(2, '0')}</div>
                    <div className="text-sm font-bold text-[var(--color-headline)] font-display">{node.label}</div>
                  </div>

                  <div className="relative z-10">
                    <div className="absolute inset-[-8px] rounded-full bg-[var(--color-signal-green)]/0 group-hover:bg-[var(--color-signal-green)]/10 transition-all duration-500 blur-md" />
                    <div className="w-[96px] h-[96px] rounded-full glass-card flex items-center justify-center text-[var(--color-signal-green)] border border-white/[0.08] group-hover:border-[var(--color-signal-green)]/30 transition-all duration-500 bg-[var(--color-obsidian)] relative">
                      <div className="text-[var(--color-signal-green)]/70 group-hover:text-[var(--color-signal-green)] transition-colors duration-300">
                        {node.icon}
                      </div>
                    </div>
                  </div>

                  <div className="mt-[12px] px-[12px] py-[4px] rounded-full bg-[var(--color-signal-green)]/5 border border-[var(--color-signal-green)]/10">
                    <span className="text-[11px] font-bold text-[var(--color-signal-green)]/60 group-hover:text-[var(--color-signal-green)] transition-colors uppercase tracking-wider">{node.desc}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="md:hidden relative">
            <div className="absolute left-[40px] top-[48px] bottom-[48px] w-[2px] bg-white/[0.06]" />
            <div className="flex flex-col gap-[32px]">
              {nodes.map((node, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-[20px] relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-48px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="relative z-10 w-[80px] h-[80px] rounded-full glass-card flex items-center justify-center text-[var(--color-signal-green)] border border-white/[0.08] bg-[var(--color-obsidian)] flex-shrink-0">
                    {node.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-[var(--color-body-dim)] uppercase tracking-wider font-medium mb-[4px]">Step {String(i + 1).padStart(2, '0')}</div>
                    <div className="text-lg font-bold text-[var(--color-headline)] font-display mb-[4px]">{node.label}</div>
                    <div className="text-[13px] text-[var(--color-body)]">{node.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-48px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-[40px]"
        >
          <div className="inline-flex items-center gap-[12px] px-[24px] py-[12px] rounded-full glass-card border border-[var(--color-signal-green)]/10">
            <div className="w-2 h-2 rounded-full bg-[var(--color-signal-green)] animate-pulse" />
            <span className="text-[var(--color-headline)] text-[15px] font-display font-semibold">
              Generate consistent leads and scale revenue effortlessly.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
