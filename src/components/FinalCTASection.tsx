// import { motion } from 'framer-motion'
// import { useMagneticButton } from '../hooks/useMagneticButton'
// import { useScrollReveal } from '../hooks/useScrollReveal'
// import { STRATEGY_CALL_URL } from '../constants'

// export function FinalCTASection() {
//   const magnetic = useMagneticButton<HTMLAnchorElement>(0.15)
//   const heading = useScrollReveal(0.4)

//   return (
//     <section
//       id="contact"
//       className="section-v relative z-10 overflow-hidden"
//       style={{
//         background: 'radial-gradient(ellipse at 50% 50%, rgba(255,107,53,0.06) 0%, rgba(10,10,15,0) 60%)'
//       }}
//     >
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-orange)]/[0.04] blur-[140px]" />
//       </div>

//       <div className="section-container relative">
//         <div className="relative max-w-3xl mx-auto px-[20px] py-[48px] sm:px-[24px] sm:py-[56px] md:px-[64px] md:py-[72px] text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: '-64px' }}
//             transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             className="relative flex flex-col items-center"
//           >
//             <div className="eyebrow mb-[20px] md:mb-[24px]">Limited Time Offer</div>

//             <div ref={heading.ref}>
//               <h2 className={`text-[28px] sm:text-4xl md:text-[56px] font-bold font-display leading-[1.05] md:leading-[1.02] tracking-[-0.03em] md:tracking-[-0.04em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
//                 Your Growth Starts Here
//               </h2>
//             </div>
//             <p className="text-[15px] md:text-[18px] text-[var(--color-body)] max-w-xl mt-[20px] md:mt-[24px] mb-[32px] md:mb-[40px] leading-relaxed px-[4px]">
//               Book your free strategy call and get a custom growth roadmap for your business.
//             </p>

//             <motion.a
//               href={STRATEGY_CALL_URL}
//               ref={magnetic.ref}
//               onMouseMove={magnetic.handleMouseMove}
//               onMouseLeave={magnetic.handleMouseLeave}
//               style={{ x: magnetic.springX, y: magnetic.springY }}
//               className="btn-orange btn-pulse-orange no-underline px-[28px] md:px-[48px] py-[18px] md:py-[20px] text-[15px] md:text-[18px] group"
//             >
//               Book Your Free Strategy Call
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//             </motion.a>

//             <div className="flex flex-wrap justify-center gap-x-[16px] gap-y-[6px] mt-[24px] md:mt-[28px] text-[12px] md:text-[13px] text-[var(--color-body-dim)]">
//               <span>Personalised growth roadmap</span>
//               <span className="text-[var(--color-teal)]/40">|</span>
//               <span>No pressure, just clarity</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }



import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useMagneticButton } from '../hooks/useMagneticButton'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { STRATEGY_CALL_URL } from '../constants'
import { useMemo } from 'react'

// ─── Premium floating orb ────────────────────────────────────────────
function FloatingOrb({ delay = 0, duration = 18, size = 420, color = 'var(--color-orange)', x = '50%', y = '50%' }: { delay?: number, duration?: number, size?: number, color?: string, x?: string, y?: string }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
        filter: 'blur(100px)',
        opacity: 0.35,
      }}
      animate={{
        x: ['-50%', '-40%', '-60%', '-50%'],
        y: ['-50%', '-60%', '-40%', '-50%'],
        scale: [1, 1.15, 0.95, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

// ─── Animated conic gradient border ─────────────────────────────────
function AnimatedBorder() {
  return (
    <motion.div
      className="absolute inset-0 rounded-[28px] pointer-events-none"
      style={{
        background:
          'conic-gradient(from 0deg, transparent 0%, rgba(255,107,53,0.6) 15%, transparent 30%, transparent 50%, rgba(45,212,191,0.4) 65%, transparent 80%)',
        padding: '1px',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
    >
      <div className="w-full h-full rounded-[28px]" style={{ background: 'rgba(10,10,15,0.6)', backdropFilter: 'blur(24px)' }} />
    </motion.div>
  )
}

// ─── Shimmer badge ──────────────────────────────────────────────────
function ShimmerBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center gap-2 px-[14px] py-[7px] rounded-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,107,53,0.04))',
        border: '1px solid rgba(255,107,53,0.25)',
      }}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-orange)] opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-orange)]" />
      </span>
      <span className="relative text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-orange)]">
        {children}
      </span>
      <motion.div
        className="absolute inset-0 w-1/3 h-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
          skewX: -20,
        }}
        animate={{ x: ['-150%', '450%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
      />
    </div>
  )
}

// ─── Staggered word reveal heading ──────────────────────────────────
function RevealHeading({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <h2 className="text-4xl md:text-[64px] font-bold font-display leading-[1.02] tracking-[-0.04em] text-[var(--color-headline)]">
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden align-top mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.9,
              delay: wi * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              backgroundImage: 'linear-gradient(120deg, var(--color-headline) 0%, var(--color-headline) 60%, var(--color-orange) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  )
}

// ─── Trust stat pill ────────────────────────────────────────────────
function TrustStat({ value, label, delay = 0 }: { value: string, label: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-[2px] px-[18px]"
    >
      <div className="flex items-baseline gap-[2px]">
        <motion.span
          className="text-[22px] md:text-[26px] font-bold font-display text-[var(--color-headline)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        >
          {value}
        </motion.span>
      </div>
      <span className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-body-dim)]">{label}</span>
    </motion.div>
  )
}

// ─── Main CTA Section ───────────────────────────────────────────────
export function FinalCTASection() {
  const magnetic = useMagneticButton<HTMLAnchorElement>(0.18)
  const heading = useScrollReveal(0.4)

  // Parallax on mouse
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.5 })
  const sy = useSpring(my, { stiffness: 50, damping: 20, mass: 0.5 })
  const bgX = useTransform(sx, (v) => v * 0.4)
  const bgY = useTransform(sy, (v) => v * 0.4)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.04)
    my.set((e.clientY - rect.top - rect.height / 2) * 0.04)
  }
  const handleMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const noiseSvg = useMemo(
    () =>
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
    []
  )

  return (
    <section
      id="contact"
      className="section-v relative z-10 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, rgba(255,107,53,0.08) 0%, rgba(10,10,15,0) 60%)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-overlay"
        style={{ backgroundImage: noiseSvg }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      {/* Floating orbs */}
      <FloatingOrb delay={0} duration={20} size={520} color="var(--color-orange)" x="50%" y="50%" />
      <FloatingOrb delay={3} duration={24} size={360} color="var(--color-teal)" x="20%" y="30%" />
      <FloatingOrb delay={6} duration={22} size={300} color="var(--color-orange)" x="80%" y="70%" />

      {/* Parallax content wrapper */}
      <motion.div
        className="section-container relative"
        style={{ x: bgX, y: bgY }}
      >
        <div className="relative max-w-4xl mx-auto px-[24px] py-[56px] md:px-[64px] md:py-[88px]">
          {/* Card with animated border */}
          <div className="relative rounded-[28px] p-[1px]">
            <AnimatedBorder />

            <div className="relative rounded-[28px] px-[28px] py-[56px] md:px-[72px] md:py-[80px] text-center overflow-hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(20,20,28,0.6) 0%, rgba(10,10,15,0.8) 100%)',
                backdropFilter: 'blur(24px)',
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(255,107,53,0.12) 0%, transparent 50%)',
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-64px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-[28px]"
                >
                  <ShimmerBadge>Limited Time Offer</ShimmerBadge>
                </motion.div>

                {/* Heading */}
                <div ref={heading.ref} className="relative">
                  <RevealHeading text="Your Growth Starts Here" />
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-[16px] md:text-[18px] text-[var(--color-body)] max-w-xl mt-[24px] mb-[40px] leading-relaxed"
                >
                  Book your free strategy call and get a{' '}
                  <span className="text-[var(--color-headline)] font-medium">
                    custom growth roadmap
                  </span>{' '}
                  tailored to your business.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href={STRATEGY_CALL_URL}
                  ref={magnetic.ref}
                  onMouseMove={magnetic.handleMouseMove}
                  onMouseLeave={magnetic.handleMouseLeave}
                  style={{ x: magnetic.springX, y: magnetic.springY }}
                  className="btn-orange btn-pulse-orange no-underline relative px-[36px] md:px-[48px] py-[20px] text-[16px] md:text-[18px] font-semibold group overflow-hidden rounded-full"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {/* Button glow */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 60%)',
                    }}
                  />
                  {/* Shine sweep */}
                  <motion.span
                    className="absolute top-0 left-0 h-full w-[40%] skew-x-[-20deg]"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
                    }}
                    animate={{ x: ['-150%', '350%'] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
                  />
                  <span className="relative flex items-center gap-[10px]">
                    Book Your Free Strategy Call
                    <motion.svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </span>
                </motion.a>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="w-[120px] h-[1px] mt-[40px] mb-[28px]"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,107,53,0.5), transparent)',
                  }}
                />

                {/* Trust stats */}
                <div className="flex items-center gap-[8px] mb-[20px]">
                  <TrustStat value="500+" label="Clients" delay={0.8} />
                  <div className="w-[1px] h-[32px] bg-white/10" />
                  <TrustStat value="98%" label="Satisfaction" delay={0.9} />
                  <div className="w-[1px] h-[32px] bg-white/10" />
                  <TrustStat value="24h" label="Response" delay={1.0} />
                </div>

                {/* Feature pills */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex flex-wrap justify-center gap-[10px] mt-[4px]"
                >
                  {[
                    { icon: '✦', text: 'Personalised roadmap' },
                    { icon: '◈', text: 'No pressure, just clarity' },
                    { icon: '❋', text: '100% free consultation' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-[8px] px-[14px] py-[8px] rounded-full text-[12px] tracking-wide"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'var(--color-body-dim)',
                      }}
                    >
                      <span className="text-[var(--color-orange)] text-[10px]">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
