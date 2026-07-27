import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    title: "AI Landing Pages",
    desc: "Conversion-optimized pages built for you. Fast, beautiful, and engineered to turn traffic into qualified leads.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    size: "large" as const
  },
  {
    title: "Smart CRM",
    desc: "Every lead tracked, scored, and followed up without manual data entry.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    size: "normal" as const
  },
  {
    title: "WhatsApp Automation",
    desc: "Auto-replies, broadcasts, and smart drip sequences directly to their phone.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    size: "normal" as const
  },
  {
    title: "Sales Funnels",
    desc: "Multi-step funnels that close while you sleep. Upsells, downsells, and automated follow-ups designed to maximize LTV.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    size: "large" as const
  },
  {
    title: "Email Marketing",
    desc: "Beautiful campaigns, zero design skills needed. High deliverability guaranteed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
      </svg>
    ),
    size: "normal" as const
  },
  {
    title: "Analytics Dashboard",
    desc: "Real revenue metrics, not vanity numbers. Know exactly what's working.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
    size: "normal" as const
  }
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
}

export function FeaturesSection() {
  const heading = useScrollReveal(0.4)

  return (
    <section id="features" className="section-v relative z-10">
      <div className="section-container">
        {/* Left-aligned heading — asymmetric rhythm */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5 }}
          className="mb-[64px]"
        >
          <div className="text-[var(--color-signal-green)] text-[13px] font-bold tracking-widest uppercase mb-[12px]">DFY Features</div>
          <div ref={heading.ref}>
            <h2 className={`text-4xl md:text-5xl font-bold font-display mb-[16px] tracking-[-0.02em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
              Everything You Need.<br />Nothing You Don't.
            </h2>
          </div>
          <p className="text-[var(--color-body)] text-lg leading-relaxed max-w-xl">
            The complete stack to scale your coaching or agency business. We take care of everything from funnel architecture to automation logic.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-48px" }}
          className="bento-grid"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`glass-card glass-card-hover p-[32px] flex flex-col justify-between ${feat.size === 'large' ? 'bento-large' : ''}`}
            >
              <div>
                <div className="text-[var(--color-signal-green)] mb-[24px] bg-[var(--color-signal-green)]/8 w-12 h-12 rounded-xl flex items-center justify-center border border-[var(--color-signal-green)]/15">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-headline)] mb-[12px] font-display">{feat.title}</h3>
                <p className="text-[var(--color-body)] leading-relaxed text-[15px]">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
