// import { motion } from 'framer-motion'
// import { useScrollReveal } from '../hooks/useScrollReveal'

// const features = [
//   {
//     title: "AI Landing Pages",
//     desc: "Conversion-optimized pages built for you. Fast, beautiful, and engineered to turn traffic into qualified leads.",
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
//       </svg>
//     ),
//     size: "large" as const
//   },
//   {
//     title: "Smart CRM",
//     desc: "Every lead tracked, scored, and followed up without manual data entry.",
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
//       </svg>
//     ),
//     size: "normal" as const
//   },
//   {
//     title: "WhatsApp Automation",
//     desc: "Auto-replies, broadcasts, and smart drip sequences directly to their phone.",
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
//       </svg>
//     ),
//     size: "normal" as const
//   },
//   {
//     title: "Sales Funnels",
//     desc: "Multi-step funnels that close while you sleep. Upsells, downsells, and automated follow-ups designed to maximize LTV.",
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//       </svg>
//     ),
//     size: "large" as const
//   },
//   {
//     title: "Email Marketing",
//     desc: "Beautiful campaigns, zero design skills needed. High deliverability guaranteed.",
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
//       </svg>
//     ),
//     size: "normal" as const
//   },
//   {
//     title: "Analytics Dashboard",
//     desc: "Real revenue metrics, not vanity numbers. Know exactly what's working.",
//     icon: (
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
//       </svg>
//     ),
//     size: "normal" as const
//   }
// ]

// const stagger = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.07 } }
// }

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
// }

// export function FeaturesSection() {
//   const heading = useScrollReveal(0.4)

//   return (
//     <section id="features" className="section-v relative z-10">
//       <div className="section-container">
//         {/* Left-aligned heading — asymmetric rhythm */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-64px" }}
//           transition={{ duration: 0.5 }}
//           className="mb-[64px]"
//         >
//           <div className="text-[var(--color-signal-green)] text-[13px] font-bold tracking-widest uppercase mb-[12px]">DFY Features</div>
//           <div ref={heading.ref}>
//             <h2 className={`text-4xl md:text-5xl font-bold font-display mb-[16px] tracking-[-0.02em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
//               Everything You Need.<br />Nothing You Don't.
//             </h2>
//           </div>
//           <p className="text-[var(--color-body)] text-lg leading-relaxed max-w-xl">
//             The complete stack to scale your coaching or agency business. We take care of everything from funnel architecture to automation logic.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-48px" }}
//           className="bento-grid"
//         >
//           {features.map((feat, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               className={`glass-card glass-card-hover p-[32px] flex flex-col justify-between ${feat.size === 'large' ? 'bento-large' : ''}`}
//             >
//               <div>
//                 <div className="text-[var(--color-signal-green)] mb-[24px] bg-[var(--color-signal-green)]/8 w-12 h-12 rounded-xl flex items-center justify-center border border-[var(--color-signal-green)]/15">
//                   {feat.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-[var(--color-headline)] mb-[12px] font-display">{feat.title}</h3>
//                 <p className="text-[var(--color-body)] leading-relaxed text-[15px]">{feat.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }



import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useRef, useState } from 'react'

const features = [
  {
    title: 'AI Landing Pages',
    desc: 'Conversion-optimized pages built for you. Fast, beautiful, and engineered to turn traffic into qualified leads.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    size: 'large',
    accent: 'orange',
    metric: { value: '3.2x', label: 'avg. conversion lift' },
  },
  {
    title: 'Smart CRM',
    desc: 'Every lead tracked, scored, and followed up without manual data entry.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    size: 'normal',
    accent: 'teal',
  },
  {
    title: 'WhatsApp Automation',
    desc: 'Auto-replies, broadcasts, and smart drip sequences directly to their phone.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    size: 'normal',
    accent: 'orange',
  },
  {
    title: 'Sales Funnels',
    desc: 'Multi-step funnels that close while you sleep. Upsells, downsells, and automated follow-ups designed to maximize LTV.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    size: 'large',
    accent: 'teal',
    metric: { value: '47%', label: 'higher close rate' },
  },
  {
    title: 'Email Marketing',
    desc: 'Beautiful campaigns, zero design skills needed. High deliverability guaranteed.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
      </svg>
    ),
    size: 'normal',
    accent: 'orange',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Real revenue metrics, not vanity numbers. Know exactly what\'s working.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
    size: 'normal',
    accent: 'teal',
  },
]

// ─── Interactive tilt card ───────────────────────────────────────────
function FeatureCard({ feat, index }: { feat: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })

  const glowX = useTransform(mx, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(my, [-0.5, 0.5], ['0%', '100%'])

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => {
    mx.set(0)
    my.set(0)
    setHovered(false)
  }

  const isOrange = feat.accent === 'orange'
  const accentColor = isOrange ? 'var(--color-orange)' : 'var(--color-teal)'
  const isLarge = feat.size === 'large'

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group ${isLarge ? 'bento-large' : ''}`}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-[24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${glowX} ${glowY}, ${accentColor}30, transparent 60%)`,
        }}
      />

      {/* Card body */}
      <div
        className="relative h-full p-[32px] flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/[0.06]"
        style={{
          background: isLarge
            ? `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)`
            : 'rgba(255,255,255,0.02)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Corner accent */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: accentColor }}
        />

        {/* Top row: index + icon */}
        <div className="flex items-start justify-between mb-[28px]">
          <motion.div
            className="text-[11px] font-mono tracking-[0.2em] uppercase"
            style={{ color: accentColor }}
            animate={hovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            0{index + 1}
          </motion.div>

          <motion.div
            className="relative w-12 h-12 rounded-xl flex items-center justify-center border"
            style={{
              color: accentColor,
              background: `${accentColor}10`,
              borderColor: `${accentColor}25`,
            }}
            animate={hovered ? { scale: 1.08, rotate: [0, -6, 6, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            {feat.icon}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{ boxShadow: `0 0 0 0 ${accentColor}` }}
              animate={hovered ? { boxShadow: `0 0 24px -4px ${accentColor}60` } : {}}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-end">
          <h3 className="text-[22px] font-bold text-[var(--color-headline)] mb-[12px] font-display tracking-[-0.01em] leading-tight">
            {feat.title}
          </h3>
          <p className="text-[var(--color-body)] leading-relaxed text-[15px]">{feat.desc}</p>

          {/* Metric badge for large cards */}
          {feat.metric && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-[24px] flex items-center gap-[16px] pt-[20px] border-t border-white/[0.06]"
            >
              <div>
                <div
                  className="text-[28px] font-bold font-display leading-none"
                  style={{ color: accentColor }}
                >
                  {feat.metric.value}
                </div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-body-dim)] mt-[6px]">
                  {feat.metric.label}
                </div>
              </div>
              <motion.div
                className="ml-auto flex items-center gap-[6px] text-[12px] font-medium"
                style={{ color: accentColor }}
                animate={hovered ? { x: [0, 4, 0] } : {}}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <span>Explore</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Bottom shine line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] w-full origin-left"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

// ─── Main Section ────────────────────────────────────────────────────
export function FeaturesSection() {
  const heading = useScrollReveal(0.4)

  return (
    <section id="features" className="section-v relative z-10 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--color-orange), transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.08,
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--color-teal), transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.06,
          }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          }}
        />
      </div>

      <div className="section-container relative">
        {/* ─── Heading ─────────────────────────────────────────────── */}
        <div className="mb-[72px] max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-64px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-[12px] mb-[20px]"
          >
            <div className="w-[32px] h-[1px]" style={{ background: 'var(--color-orange)' }} />
            <div className="text-[var(--color-orange)] text-[12px] font-bold tracking-[0.22em] uppercase">
              DFY Features
            </div>
            <div className="text-[11px] font-mono text-[var(--color-body-dim)] tracking-wider">
              / 06 modules
            </div>
          </motion.div>

          <div ref={heading.ref}>
            <h2
              className={`text-4xl md:text-[64px] font-bold font-display mb-[24px] tracking-[-0.03em] text-reveal leading-[1.02] ${heading.isRevealed ? 'revealed' : ''}`}
              style={{
                backgroundImage:
                  'linear-gradient(120deg, var(--color-headline) 0%, var(--color-headline) 50%, var(--color-orange) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Everything You Need.
              <br />
              <span style={{ WebkitTextFillColor: 'var(--color-headline)' }}>Nothing You Don't.</span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--color-body)] text-[17px] md:text-[18px] leading-relaxed max-w-xl"
          >
            The complete stack to scale your coaching or agency business. We take care of everything — from{' '}
            <span className="text-[var(--color-headline)] font-medium">funnel architecture</span> to{' '}
            <span className="text-[var(--color-headline)] font-medium">automation logic</span>.
          </motion.p>
        </div>

        {/* ─── Bento Grid ──────────────────────────────────────────── */}
        <div className="bento-grid">
          {features.map((feat, i) => (
            <FeatureCard key={i} feat={feat} index={i} />
          ))}
        </div>

        {/* ─── Bottom CTA strip ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: 0.7 }}
          className="mt-[64px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[24px] pt-[40px] border-t border-white/[0.06]"
        >
          <div className="flex items-center gap-[20px]">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[var(--color-bg)] flex items-center justify-center text-[11px] font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${i % 2 === 0 ? 'var(--color-orange)' : 'var(--color-teal)'}, ${i % 2 === 0 ? '#ff6b35' : '#2dd4bf'})`,
                    zIndex: 4 - i,
                  }}
                >
                  {['A', 'M', 'K', 'R'][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="text-[14px] font-semibold text-[var(--color-headline)]">
                Trusted by 500+ founders
              </div>
              <div className="text-[12px] text-[var(--color-body-dim)]">
                Agencies & coaches scaling with our stack
              </div>
            </div>
          </div>

          <motion.a
            href="#contact"
            className="group flex items-center gap-[10px] text-[14px] font-semibold text-[var(--color-headline)] no-underline"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <span>See the full platform</span>
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[var(--color-orange)]/50 group-hover:bg-[var(--color-orange)]/10 transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
