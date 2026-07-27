// import { motion } from 'framer-motion'
// import { useScrollReveal } from '../hooks/useScrollReveal'

// const testimonials = [
//   { name: "Rahul D.", role: "High-Ticket Coach", quote: "MyProFunnels completely transformed my business. We went from ₹2L to ₹12L/month in just 90 days. The WhatsApp automation is magic.", initials: "RD", color: "from-[var(--color-teal)]/25 to-[var(--color-teal-dark)]/15" },
//   { name: "Priya S.", role: "Agency Owner", quote: "Finally, a system where everything connects. No more Zapier breaking down. The team built everything perfectly and it just works.", initials: "PS", color: "from-[var(--color-orange)]/20 to-[var(--color-orange-light)]/10" },
//   { name: "Amit K.", role: "Consultant", quote: "I was hesitant about the investment, but it paid for itself in week one. The CRM is intuitive and the funnels convert like crazy.", initials: "AK", color: "from-purple-500/15 to-indigo-500/10" },
//   { name: "Sneha M.", role: "Course Creator", quote: "Neeraj's team is exceptional. They don't just give you software, they give you a complete revenue engine. Best decision I made.", initials: "SM", color: "from-[var(--color-teal)]/20 to-emerald-500/10" },
// ]

// const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
// const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } } }

// function StarRating() {
//   return (
//     <div className="flex gap-[2px]">
//       {[...Array(5)].map((_, j) => (
//         <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
//           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//         </svg>
//       ))}
//     </div>
//   )
// }

// export function TestimonialsSection() {
//   const heading = useScrollReveal(0.4)

//   return (
//     <section id="testimonials" className="section-v relative z-10 overflow-hidden">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-64px" }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-[40px] md:mb-[56px]"
//         >
//           <div className="eyebrow mb-[12px]">Testimonials</div>
//           <div ref={heading.ref}>
//             <h2 className={`text-[28px] sm:text-4xl md:text-[48px] font-bold font-display tracking-[-0.03em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
//               Real Results. Real People.
//             </h2>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-64px" }}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] md:gap-[20px] max-w-4xl mx-auto"
//         >
//           {testimonials.map((test, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               className="glass-card p-[24px] sm:p-[32px] relative group"
//             >
//               <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-gold)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               <StarRating />

//               <p className="text-[var(--color-body)] my-[16px] sm:my-[20px] text-[14px] leading-relaxed">&ldquo;{test.quote}&rdquo;</p>

//               <div className="flex items-center gap-[12px] pt-[16px] border-t border-white/[0.06]">
//                 <div className={`w-[40px] h-[40px] rounded-full bg-gradient-to-br ${test.color} flex items-center justify-center text-[13px] font-bold text-[var(--color-headline)] border border-white/[0.06] flex-shrink-0`}>
//                   {test.initials}
//                 </div>
//                 <div>
//                   <div className="font-bold text-[var(--color-headline)] text-[14px]">{test.name}</div>
//                   <div className="text-[12px] text-[var(--color-body-dim)]">{test.role}</div>
//                 </div>
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
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Rahul D.',
    role: 'High-Ticket Coach',
    quote: 'MyProFunnels completely transformed my business. We went from ₹2L to ₹12L/month in just 90 days. The WhatsApp automation is magic.',
    initials: 'RD',
    color: 'from-[var(--color-teal)]/25 to-[var(--color-teal-dark)]/15',
    metric: { value: '₹12L', label: 'MRR in 90 days' },
    featured: true,
  },
  {
    name: 'Priya S.',
    role: 'Agency Owner',
    quote: 'Finally, a system where everything connects. No more Zapier breaking down. The team built everything perfectly and it just works.',
    initials: 'PS',
    color: 'from-[var(--color-orange)]/20 to-[var(--color-orange-light)]/10',
    metric: { value: '3x', label: 'client retention' },
    featured: false,
  },
  {
    name: 'Amit K.',
    role: 'Consultant',
    quote: 'I was hesitant about the investment, but it paid for itself in week one. The CRM is intuitive and the funnels convert like crazy.',
    initials: 'AK',
    color: 'from-purple-500/15 to-indigo-500/10',
    metric: { value: '7d', label: 'ROI payback' },
    featured: false,
  },
  {
    name: 'Sneha M.',
    role: 'Course Creator',
    quote: "Neeraj's team is exceptional. They don't just give you software, they give you a complete revenue engine. Best decision I made.",
    initials: 'SM',
    color: 'from-[var(--color-teal)]/20 to-emerald-500/10',
    metric: { value: '4.9★', label: 'client rating' },
    featured: false,
  },
]

// ─── Animated star rating ────────────────────────────────────────────
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-[3px]">
      {[...Array(count)].map((_, j) => (
        <motion.svg
          key={j}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#f59e0b"
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + j * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </motion.svg>
      ))}
    </div>
  )
}

// ─── Shimmer badge ───────────────────────────────────────────────────
function ShimmerBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative inline-flex items-center gap-[8px] px-[14px] py-[7px] rounded-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,107,53,0.04))',
        border: '1px solid rgba(255,107,53,0.25)',
      }}
    >
      <span className="relative flex h-[6px] w-[6px]">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-orange)] opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-[var(--color-orange)]" />
      </span>
      <span className="relative text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-orange)]">
        {children}
      </span>
      <motion.div
        className="absolute inset-0 w-1/3 h-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
          transform: 'skewX(-20deg)',
        }}
        animate={{ x: ['-150%', '450%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
      />
    </div>
  )
}

// ─── Decorative giant quote mark ─────────────────────────────────────
function FloatingQuote({ variant = 'open' }: { variant?: 'open' | 'close' }) {
  const isTop = variant === 'open'
  return (
    <motion.svg
      className="absolute pointer-events-none select-none"
      style={{
        top: isTop ? '24px' : 'auto',
        bottom: isTop ? 'auto' : '24px',
        right: isTop ? 'auto' : '24px',
        left: isTop ? '24px' : 'auto',
        opacity: 0.06,
      }}
      width="72"
      height="72"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      animate={{
        y: isTop ? [0, -6, 0] : [0, 6, 0],
        rotate: isTop ? [0, -3, 0] : [0, 3, 0],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      {isTop ? (
        <path d="M7 7h4v4H7c0 2 1 3 3 3v2c-3 0-5-2-5-5V7zm8 0h4v4h-4c0 2 1 3 3 3v2c-3 0-5-2-5-5V7z" />
      ) : (
        <path d="M17 17h-4v-4h4c0-2-1-3-3-3V8c3 0 5 2 5 5v4zm-8 0H5v-4h4c0-2-1-3-3-3V8c3 0 5 2 5 5v4z" />
      )}
    </motion.svg>
  )
}

// ─── 3D tilt testimonial card ────────────────────────────────────────
function TestimonialCard({
  test,
  index,
  featured = false,
}: {
  test: (typeof testimonials)[number]
  index: number
  featured?: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [featured ? 4 : 6, featured ? -4 : -6]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [featured ? -4 : -6, featured ? 4 : 6]), {
    stiffness: 200,
    damping: 20,
  })

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
  }

  const accentColor = featured ? 'var(--color-orange)' : 'var(--color-teal)'

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group ${featured ? 'sm:col-span-2' : ''}`}
    >
      {/* Cursor-following glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-[24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${glowX} ${glowY}, ${accentColor}25, transparent 60%)`,
        }}
      />

      {/* Animated border (featured only) */}
      {featured && (
        <motion.div
          className="absolute -inset-[1px] rounded-[24px] pointer-events-none opacity-60"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0%, rgba(255,107,53,0.5) 15%, transparent 30%, transparent 50%, rgba(45,212,191,0.4) 65%, transparent 80%)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full rounded-[24px] bg-[var(--color-bg)]" />
        </motion.div>
      )}

      {/* Card body */}
      <div
        className="relative h-full overflow-hidden rounded-[24px] border border-white/[0.06]"
        style={{
          background: featured
            ? 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'
            : 'rgba(255,255,255,0.02)',
          backdropFilter: 'blur(20px)',
          padding: featured ? '40px' : '28px',
        }}
      >
        {/* Corner accent blob */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: accentColor }}
        />

        {/* Decorative quote marks */}
        <FloatingQuote variant="open" />
        {featured && <FloatingQuote variant="close" />}

        {/* Featured badge */}
        {featured && (
          <div className="relative mb-[24px]">
            <ShimmerBadge>Featured Success Story</ShimmerBadge>
          </div>
        )}

        {/* Star rating */}
        <div className="relative">
          <StarRating />
        </div>

        {/* Quote */}
        <p
          className={`relative text-[var(--color-body)] leading-relaxed ${
            featured ? 'text-[18px] md:text-[20px] my-[24px]' : 'text-[14px] md:text-[15px] my-[16px]'
          }`}
        >
          &ldquo;{test.quote}&rdquo;
        </p>

        {/* Metric highlight (featured) */}
        {featured && test.metric && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative flex items-center gap-[20px] p-[20px] rounded-[16px] mb-[24px]"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,107,53,0.08), rgba(45,212,191,0.04))',
              border: '1px solid rgba(255,107,53,0.15)',
            }}
          >
            <div>
              <div
                className="text-[32px] md:text-[40px] font-bold font-display leading-none tracking-[-0.02em]"
                style={{
                  backgroundImage:
                    'linear-gradient(120deg, var(--color-orange) 0%, var(--color-teal) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {test.metric.value}
              </div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-body-dim)] mt-[6px]">
                {test.metric.label}
              </div>
            </div>
            <div className="ml-auto hidden sm:flex items-center gap-[6px] text-[12px] font-medium text-[var(--color-orange)]">
              <span>Verified result</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </motion.div>
        )}

        {/* Author row */}
        <div className="relative flex items-center gap-[12px] pt-[16px] border-t border-white/[0.06]">
          <motion.div
            className={`w-[44px] h-[44px] rounded-full bg-gradient-to-br ${test.color} flex items-center justify-center text-[13px] font-bold text-[var(--color-headline)] border border-white/[0.08] flex-shrink-0`}
            whileHover={{ scale: 1.08, rotate: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {test.initials}
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-[var(--color-headline)] text-[14px] truncate">
              {test.name}
            </div>
            <div className="text-[12px] text-[var(--color-body-dim)] truncate">{test.role}</div>
          </div>

          {/* Mini metric badge for non-featured */}
          {!featured && test.metric && (
            <div
              className="hidden sm:flex flex-col items-end px-[10px] py-[6px] rounded-full"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span className="text-[13px] font-bold text-[var(--color-headline)] leading-none">
                {test.metric.value}
              </span>
              <span className="text-[9px] tracking-[0.1em] uppercase text-[var(--color-body-dim)] mt-[3px]">
                {test.metric.label}
              </span>
            </div>
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
export function TestimonialsSection() {
  const heading = useScrollReveal(0.4)

  return (
    <section id="testimonials" className="section-v relative z-10 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--color-orange), transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.07,
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
          className="absolute inset-0 opacity-[0.03]"
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-64px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[56px] md:mb-[72px] max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-[12px] mb-[20px]"
          >
            <div className="w-[32px] h-[1px]" style={{ background: 'var(--color-orange)' }} />
            <div className="text-[var(--color-orange)] text-[12px] font-bold tracking-[0.22em] uppercase">
              Client Stories
            </div>
            <div className="w-[32px] h-[1px]" style={{ background: 'var(--color-orange)' }} />
          </motion.div>

          <div ref={heading.ref}>
            <h2
              className={`text-[28px] sm:text-4xl md:text-[56px] font-bold font-display tracking-[-0.03em] text-reveal leading-[1.05] ${
                heading.isRevealed ? 'revealed' : ''
              }`}
              style={{
                backgroundImage:
                  'linear-gradient(120deg, var(--color-headline) 0%, var(--color-headline) 50%, var(--color-orange) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Real Results.
              <br />
              <span style={{ WebkitTextFillColor: 'var(--color-headline)' }}>Real People.</span>
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[var(--color-body)] text-[16px] md:text-[17px] leading-relaxed mt-[20px] max-w-xl mx-auto"
          >
            Don't take our word for it — hear from founders who turned our system into their{' '}
            <span className="text-[var(--color-headline)] font-medium">unfair advantage</span>.
          </motion.p>
        </motion.div>

        {/* ─── Testimonial Grid (Bento-style) ─────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] md:gap-[20px] max-w-5xl mx-auto">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-48px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={test.featured ? 'sm:col-span-2' : ''}
            >
              <TestimonialCard test={test} index={i} featured={test.featured} />
            </motion.div>
          ))}
        </div>

        {/* ─── Bottom Trust Strip ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-[64px] flex flex-col md:flex-row items-center justify-between gap-[24px] pt-[40px] border-t border-white/[0.06] max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-[20px]">
            <div className="flex -space-x-2">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} border-2 border-[var(--color-bg)] flex items-center justify-center text-[10px] font-bold text-[var(--color-headline)]`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08, type: 'spring', stiffness: 300 }}
                  style={{ zIndex: testimonials.length - i }}
                >
                  {t.initials}
                </motion.div>
              ))}
            </div>
            <div>
              <div className="text-[14px] font-semibold text-[var(--color-headline)]">
                Trusted by 500+ founders
              </div>
              <div className="text-[12px] text-[var(--color-body-dim)] flex items-center gap-[6px]">
                <span className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </span>
                <span>4.9/5 from 200+ reviews</span>
              </div>
            </div>
          </div>

          <motion.a
            href="#contact"
            className="group flex items-center gap-[10px] text-[14px] font-semibold text-[var(--color-headline)] no-underline"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <span>Share your story</span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[var(--color-orange)]/50 group-hover:bg-[var(--color-orange)]/10 transition-all duration-300">
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
