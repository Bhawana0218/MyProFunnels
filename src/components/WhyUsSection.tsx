import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const reasons = [
  { title: "5+ Expert Team Members Working for You", desc: "A dedicated squad of funnel strategists, designers, automation engineers, and copywriters — all focused on your growth." },
  { title: "AI-Powered Funnel System", desc: "Our proprietary AI system optimizes your funnels in real-time, learning from every visitor interaction to improve conversion rates." },
  { title: "Done-For-You Setup", desc: "We handle the entire technical implementation — from funnel design to CRM integration to WhatsApp automation." },
  { title: "Weekly Growth Strategy Calls", desc: "Every week, sit down with your dedicated growth architect to review metrics and plan the next scaling move." },
  { title: "Scalable Business Model", desc: "Our system is designed to scale with you from ₹5L to ₹50L+ per month without breaking." },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } } }

export function WhyUsSection() {
  const heading = useScrollReveal(0.4)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="why-us" className="section-v relative z-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--color-obsidian) 0%, rgba(45,212,191,0.01) 50%, var(--color-obsidian) 100%)' }}
    >
      <div className="section-container relative">
        <div className="grid md:grid-cols-12 gap-[64px] items-start">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 0.5 }}
              className="md:sticky md:top-[140px]"
            >
              <div className="eyebrow mb-[12px]">Why Us</div>
              <div ref={heading.ref}>
                <h2 className={`text-4xl md:text-[48px] font-bold font-display mb-[24px] tracking-[-0.03em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
                  What Makes Us Different
                </h2>
              </div>
              <p className="text-[var(--color-body)] text-[16px] leading-relaxed mb-[32px]">
                We aren&apos;t just another software platform or agency. We provide a complete, done-for-you growth ecosystem backed by real business architects.
              </p>

              <div className="flex items-center gap-[16px] p-[20px] border border-white/[0.06] rounded-2xl">
                <div className="text-[32px] font-bold font-display gradient-text-teal">98%</div>
                <div className="text-[13px] text-[var(--color-body-dim)] leading-tight">Client Retention<br/>Rate</div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-64px" }}
              className="flex flex-col gap-[8px]"
            >
              {reasons.map((reason, i) => {
                const isExpanded = expandedIndex === i
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className={`rounded-2xl border transition-all duration-300 cursor-pointer ${isExpanded ? 'border-[var(--color-teal)]/20 bg-white/[0.02]' : 'border-white/[0.04] hover:border-white/[0.08]'}`}
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  >
                    <div className="px-[24px] py-[20px] flex items-center justify-between gap-[16px]">
                      <div className="flex items-center gap-[16px]">
                        <div className={`w-[6px] h-[6px] rounded-full transition-colors duration-300 ${isExpanded ? 'bg-[var(--color-teal)]' : 'bg-[var(--color-body-dim)]'}`} />
                        <span className={`text-[15px] font-display font-semibold transition-colors duration-300 ${isExpanded ? 'text-[var(--color-teal)]' : 'text-[var(--color-headline)]'}`}>{reason.title}</span>
                      </div>
                      <motion.svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-body-dim)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </motion.svg>
                    </div>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-[24px] pb-[20px] pl-[48px]">
                            <p className="text-[var(--color-body)] text-[14px] leading-relaxed">{reason.desc}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
