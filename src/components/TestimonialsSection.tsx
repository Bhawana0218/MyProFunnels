import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  { name: "Rahul D.", role: "High-Ticket Coach", quote: "MyProFunnels completely transformed my business. We went from ₹2L to ₹12L/month in just 90 days. The WhatsApp automation is magic." },
  { name: "Priya S.", role: "Agency Owner", quote: "Finally, a system where everything connects. No more Zapier breaking down. The team built everything perfectly." },
  { name: "Amit K.", role: "Consultant", quote: "I was hesitant about the investment, but it paid for itself in week one. The CRM is intuitive and the funnels convert like crazy." },
  { name: "Sneha M.", role: "Course Creator", quote: "Neeraj's team is exceptional. They don't just give you software, they give you a revenue engine. Best decision I made." }
]

export function TestimonialsSection() {
  const heading = useScrollReveal(0.4)

  return (
    <section className="section-v relative z-10 overflow-hidden">
      <div className="section-container mb-[48px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-64px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div ref={heading.ref}>
            <h2 className={`text-4xl md:text-5xl font-bold font-display tracking-[-0.02em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
              Real Results. Real People.
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Contained marquee — cards never clip viewport edge */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges for seamless loop feel */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-obsidian)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-obsidian)] to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-track py-[16px] px-[24px]">
          {[...testimonials, ...testimonials, ...testimonials].map((test, i) => (
            <div key={i} className="glass-card p-[32px] w-[380px] shrink-0 flex flex-col justify-between">
              <div>
                <div className="flex gap-[4px] mb-[20px] text-[var(--color-signal-green)] text-sm">
                  ★★★★★
                </div>
                <p className="text-[var(--color-body)] mb-[24px] text-[15px] leading-relaxed">"{test.quote}"</p>
              </div>
              <div className="flex items-center gap-[16px]">
                <div className="w-[44px] h-[44px] rounded-full bg-gradient-to-br from-[var(--color-graphite-light)] to-[var(--color-obsidian-lighter)] flex items-center justify-center text-sm font-bold text-[var(--color-headline)] border border-white/[0.06]">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[var(--color-headline)] text-sm">{test.name}</div>
                  <div className="text-[13px] text-[var(--color-body-dim)]">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
