import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { FunnelScene } from '../three/FunnelScene'
import { FunnelMobile } from '../three/FunnelMobile'
import { useMagneticButton } from '../hooks/useMagneticButton'
import { STRATEGY_CALL_URL } from '../constants'

const typewriterWords = ['with AI Funnels', 'with Smart Automation', 'with AI Systems']
const headingWords = ['Build,', 'Automate', '&', 'Scale', 'Your', 'Business']

// ─── Hero ───
export function HeroSection() {
  const magnetic = useMagneticButton<HTMLAnchorElement>(0.2)
  const heroRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(heroRef, { once: true })
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Word-by-word reveal on mount
  useEffect(() => {
    if (!isInView) return
    const els = document.querySelectorAll('.hero-word')
    els.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('revealed')
      }, 300 + i * 100)
    })
  }, [isInView])

  // Typewriter
  useEffect(() => {
    const currentWord = typewriterWords[wordIndex]
    const timeout = isDeleting ? 35 : 70

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 2200)
      return
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % typewriterWords.length)
      return
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, timeout)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <section
      ref={heroRef}
      className="relative w-full md:min-h-screen flex flex-col md:justify-center pt-[96px] md:pt-[112px] pb-[24px] md:pb-[96px] overflow-hidden noise-overlay"
    >
      {/* ─── Background ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 hero-grid-lines" />
        <div className="floating-orb-1 absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-[var(--color-teal)]/[0.04] blur-[140px]" />
        <div className="floating-orb-2 absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-[var(--color-orange)]/[0.03] blur-[120px]" />
        <div className="floating-orb-3 absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#8B7CF6]/[0.03] blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,transparent_0%,var(--color-obsidian)_100%)]" />
      </div>

      {/* ─── Content ─── */}
      <div className="section-container relative z-10 w-full flex-grow">
        <div className="grid md:grid-cols-12 gap-[24px] md:gap-[48px] items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-[8px] px-[14px] py-[7px] md:px-[16px] md:py-[8px] rounded-full border border-[var(--color-teal)]/20 bg-[var(--color-teal)]/[0.04] mb-[24px] md:mb-[36px] backdrop-blur-sm"
            >
              <span className="relative flex h-[6px] w-[6px]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-teal)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[var(--color-teal)]" />
              </span>
              <span className="eyebrow text-[11px] md:text-[12px]">India&apos;s #1 AI Funnel System</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[34px] sm:text-[44px] md:text-[60px] lg:text-[76px] font-display leading-[1.08] md:leading-[1.02] mb-[24px] md:mb-[40px] tracking-[-0.02em] md:tracking-[-0.04em]">
              <span className="flex flex-wrap">
                {headingWords.map((word, i) => (
                  <span key={i} className="word-reveal hero-word inline-block mr-[0.3em]">
                    <span className="word-reveal-inner inline-block">
                      {word === '&' ? (
                        <span className="gradient-text-teal">{word}</span>
                      ) : (
                        <span className="text-[var(--color-headline)]">{word}</span>
                      )}
                    </span>
                  </span>
                ))}
              </span>
              <span className="gradient-text-teal text-[28px] sm:text-[36px] md:text-[52px] lg:text-[68px] block mt-[4px] md:mt-[8px]">
                {typewriterWords[wordIndex].slice(0, charIndex)}
                <span className="typing-cursor" />
              </span>
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="text-[14px] md:text-[17px] text-[var(--color-body)] mb-[28px] md:mb-[48px] leading-relaxed max-w-[500px]"
            >
              India&apos;s Complete Done-For-You AI Funnel System with Expert Team Support — So You Focus on Growth, Not Tech.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-[12px] sm:gap-[16px] items-stretch sm:items-center mb-[32px] md:mb-[56px]"
            >
              <motion.a
                href={STRATEGY_CALL_URL}
                ref={magnetic.ref}
                onMouseMove={magnetic.handleMouseMove}
                onMouseLeave={magnetic.handleMouseLeave}
                style={{ x: magnetic.springX, y: magnetic.springY }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-orange btn-pulse-orange btn-shimmer no-underline text-center text-[14px] md:text-[16px] py-[15px] md:py-[18px] px-[24px] md:px-[44px]"
              >
                Book Free Strategy Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.a>
              <motion.a
                href={STRATEGY_CALL_URL}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-ghost no-underline text-center text-[14px] md:text-[15px] py-[15px] md:py-[16px] px-[24px] md:px-[36px]"
              >
                Get Started Now
              </motion.a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-[12px] md:gap-[24px]"
            >
              <div className="flex items-center gap-[4px] md:gap-[6px]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" className="md:w-[14px] md:h-[14px]"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
                <span className="text-[12px] md:text-[14px] text-[var(--color-body-dim)] font-medium ml-[4px]">4.9/5</span>
              </div>
              <div className="w-[1px] h-[14px] md:h-[18px] bg-white/[0.08]" />
              <div className="flex items-center gap-[4px] md:gap-[6px]">
                <span className="text-[var(--color-headline)] text-[12px] md:text-[13px] font-semibold">500+</span>
                <span className="text-[11px] md:text-[13px] text-[var(--color-body-dim)]">entrepreneurs</span>
              </div>
              <div className="w-[1px] h-[14px] md:h-[18px] bg-white/[0.08]" />
              <div className="flex items-center gap-[4px] md:gap-[6px]">
                <span className="text-[var(--color-headline)] text-[12px] md:text-[13px] font-semibold">3X</span>
                <span className="text-[11px] md:text-[13px] text-[var(--color-body-dim)]">avg. conversion</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop funnel */}
          <div className="hidden md:block md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <FunnelScene />
            </motion.div>
          </div>
        </div>

        {/* Mobile funnel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <FunnelMobile />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 2 }}
          className="hidden md:flex absolute bottom-[32px] left-1/2 -translate-x-1/2 flex-col items-center gap-[8px]"
        >
          <span className="text-[11px] text-[var(--color-body-dim)] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <div className="scroll-bounce">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
