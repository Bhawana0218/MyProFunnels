import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  { num: "01", title: "AI Funnel Creation", desc: "We build high-converting funnel systems designed to turn cold traffic into loyal customers automatically." },
  { num: "02", title: "Targeted Lead Generation", desc: "Precise strategies to bring a consistent flow of high-quality, pre-qualified leads into your business." },
  { num: "03", title: "Smart Automation Setup", desc: "Connecting your CRM, WhatsApp, and Email for a fully automated, hands-off sales experience." },
  { num: "04", title: "High-Converting Landing Pages", desc: "Blazing-fast, beautiful landing pages built with behavioral psychology to maximize your conversions." },
  { num: "05", title: "Advanced Scaling Strategy", desc: "Data-driven techniques and weekly coaching to scale your monthly revenue to ₹10 Lakh and beyond." },
  { num: "06", title: "Complete Done-For-You", desc: "Our expert team handles the entire technical setup and maintenance, so you focus solely on business growth." }
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } } }

export function ScalingRoadmap() {
  const heading = useScrollReveal(0.4)

  return (
    <section id="roadmap" className="section-v relative z-10 overflow-hidden">
      <div className="section-container relative">
        <div className="grid md:grid-cols-12 gap-[48px] items-start">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-64px" }}
              transition={{ duration: 0.4 }}
            >
              <div className="eyebrow mb-[12px]">Your Growth Journey</div>
              <div ref={heading.ref}>
                <h2 className={`text-4xl md:text-[48px] font-bold font-display mb-[40px] tracking-[-0.03em] text-[var(--color-headline)] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
                  90-Day Scaling Roadmap
                </h2>
              </div>
              <p className="text-[var(--color-body)] text-[16px] leading-relaxed mb-[40px]">
                While the pipeline above shows how our system works technically, this roadmap outlines your journey from onboarding to ₹10 Lakh/month — with our team handling every step.
              </p>

              <div className="glass-card p-[24px] border-l-[3px] border-l-[var(--color-teal)]">
                <p className="text-[var(--color-headline)] text-[15px] font-display font-semibold leading-relaxed">
                  Every step is done-for-you. You focus on your business — we handle the tech, the funnels, and the growth engine.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-64px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`glass-card p-[32px] relative overflow-hidden group ${i === 0 || i === 3 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-teal-dark)] opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-[16px] mb-[20px]">
                    <span className="text-[32px] font-bold font-display gradient-text-teal opacity-60 group-hover:opacity-100 transition-opacity">{step.num}</span>
                    <span className="text-[12px] text-[var(--color-body-dim)] font-medium uppercase tracking-[0.15em]">{step.title}</span>
                  </div>
                  <p className="text-[var(--color-body)] text-[14px] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
