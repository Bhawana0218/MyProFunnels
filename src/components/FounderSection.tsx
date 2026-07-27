import { useCountUp } from '../hooks/useCountUp'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function FounderSection() {
  const countFunnels = useCountUp(500, 2000)
  const countClients = useCountUp(300, 2000)
  const countRevenue = useCountUp(25, 2000)
  const heading = useScrollReveal(0.4)

  return (
    <section id="about" className="section-v relative z-10">
      <div className="section-container grid md:grid-cols-12 gap-[64px] items-center">
        {/* Photo: takes 5/12 — art-directed geometric avatar with rim light */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
            {/* Violet + green rim light glow */}
            <div className="absolute -inset-[12px] rounded-full opacity-50"
              style={{
                background: 'conic-gradient(from 180deg, rgba(0,226,138,0.3), rgba(139,124,246,0.25), rgba(0,184,217,0.2), rgba(0,226,138,0.3))',
                filter: 'blur(24px)',
              }}
            ></div>
            {/* Ring border with gradient */}
            <div className="absolute -inset-[2px] rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(0,226,138,0.5), rgba(139,124,246,0.4), rgba(0,184,217,0.3))',
              }}
            ></div>
            {/* Inner circle — custom geometric avatar */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--color-graphite)]">
              <svg className="w-full h-full" viewBox="0 0 320 320" fill="none">
                <defs>
                  <radialGradient id="fg-glow" cx="50%" cy="35%" r="50%">
                    <stop offset="0%" stopColor="#8B7CF6" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#0B0C10" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="fg-rim" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E28A" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#8B7CF6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <circle cx="160" cy="160" r="160" fill="url(#fg-glow)" />
                {/* Geometric portrait silhouette */}
                <circle cx="160" cy="120" r="44" fill="#262833" stroke="url(#fg-rim)" strokeWidth="1" />
                <path d="M88 260c0-44 33-80 72-80s72 36 72 80" fill="#262833" stroke="url(#fg-rim)" strokeWidth="1" />
                {/* Initials */}
                <text x="160" y="175" textAnchor="middle" fill="#9A9A9E" fontSize="36" fontFamily="var(--font-display)" fontWeight="600">NS</text>
              </svg>
              {/* Vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Text + stats: takes 7/12 */}
        <div className="md:col-span-7">
          <div className="text-[var(--color-signal-green)] text-[13px] font-bold tracking-widest uppercase mb-[12px]">Meet the Founder</div>
          <div ref={heading.ref}>
            <h2 className={`text-4xl md:text-5xl font-bold font-display mb-[24px] text-[var(--color-headline)] tracking-[-0.02em] text-reveal ${heading.isRevealed ? 'revealed' : ''}`}>
              Neeraj Shrivastava
            </h2>
          </div>
          <p className="text-[var(--color-body)] text-lg mb-[48px] leading-relaxed">
            "I built MyProFunnels because I was tired of seeing brilliant coaches and agencies struggle with tech. You shouldn't have to be a software engineer to scale your business. We build the entire ecosystem for you, so you can focus on what you do best: changing lives and closing deals."
          </p>

          {/* Stats row with proper vertical rhythm */}
          <div className="grid grid-cols-3 gap-[32px] pt-[32px] border-t border-white/[0.06]" ref={countFunnels.ref}>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-display stat-value mb-[8px]">
                {countFunnels.count}+
              </div>
              <div className="text-[11px] text-[var(--color-body-dim)] uppercase tracking-wider font-medium leading-tight">Funnels Built</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-display stat-value mb-[8px]">
                {countClients.count}+
              </div>
              <div className="text-[11px] text-[var(--color-body-dim)] uppercase tracking-wider font-medium leading-tight">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-display mb-[8px] flex items-baseline">
                <span className="text-[var(--color-signal-green)] text-xl mr-[2px]">₹</span>
                <span className="stat-value">{countRevenue.count}Cr+</span>
              </div>
              <div className="text-[11px] text-[var(--color-body-dim)] uppercase tracking-wider font-medium leading-tight">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
