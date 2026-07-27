import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: "What is a Done-For-You (DFY) AI Funnel?",
    a: "A DFY AI Funnel is a complete client acquisition engine. Instead of you building landing pages, writing copy, setting up triggers, or linking APIs, our expert team designs and builds the entire system for you. We integrate intelligent AI automation to score, qualify, and segment leads, so you only spend time on high-ticket sales calls."
  },
  {
    q: "How does the WhatsApp and CRM automation work?",
    a: "When a prospect visits your landing page and submits a form, they are instantly recorded in your custom CRM. Simultaneously, a WhatsApp drip campaign is triggered. This sends personalized, contextual follow-ups, case studies, or booking links directly to their phone, resulting in up to 3x higher open rates than email."
  },
  {
    q: "Do I need to be tech-savvy to run this?",
    a: "Not at all. That is the core value of MyProFunnels. We handle the complete technical build, testing, and launch. Once live, we provide a clean, visual dashboard to track revenue and leads, plus weekly strategy calls and direct Slack/WhatsApp support to make management effortless."
  },
  {
    q: "How long does the setup process take?",
    a: "Typically, the initial funnel structure, CRM setup, and primary automation flows are fully built, tested, and handed over within 14 to 21 business days, depending on the complexity of your custom requirements."
  },
  {
    q: "What industries do you specialize in?",
    a: "We primarily help high-ticket coaches, consultants, service providers, agency owners, and digital content creators who want to scale their monthly revenue past ₹10 Lakh without multiplying their workload."
  }
]

export function FAQSection() {
  const heading = useScrollReveal(0.4)
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i)
  }

  return (
    <section id="faq" className="section-v relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[var(--color-frost-violet)]/[0.02] blur-[120px]"></div>
      </div>

      <div className="section-container relative max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[56px]"
        >
          <div className="text-[var(--color-frost-violet)] text-[13px] font-bold tracking-widest uppercase mb-[12px]">Questions?</div>
          <div ref={heading.ref}>
            <h2 className={`text-4xl md:text-5xl font-bold font-display mb-[16px] tracking-[-0.02em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-[var(--color-body)] max-w-xl mx-auto text-[16px]">
            Everything you need to know about our AI Funnel development, CRM automations, and growth support.
          </p>
        </motion.div>

        {/* Accordions */}
        <div className="flex flex-col gap-[16px]">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className={`glass-card border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[var(--color-signal-green)]/35 bg-white/[0.02]' : 'border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-[24px] text-left cursor-pointer border-none bg-transparent focus:outline-none"
                >
                  <span className={`text-[16px] md:text-[18px] font-semibold font-display transition-colors duration-200 ${
                    isOpen ? 'text-[var(--color-signal-green)]' : 'text-[var(--color-headline)]'
                  }`}>
                    {faq.q}
                  </span>
                  
                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-200 ${
                      isOpen ? 'border-[var(--color-signal-green)]/20 text-[var(--color-signal-green)] bg-[var(--color-signal-green)]/5' : 'border-white/[0.1] text-[var(--color-body-dim)]'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-[24px] pb-[24px] pt-[4px] text-[var(--color-body)] text-[15px] leading-relaxed border-t border-white/[0.03]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
