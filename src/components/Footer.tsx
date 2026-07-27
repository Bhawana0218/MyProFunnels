import { STRATEGY_CALL_URL } from '../constants'

const linkClass = 'text-[var(--color-body)] text-[14px] hover:text-[var(--color-signal-green)] transition-colors duration-200'

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden mt-[48px] md:mt-[64px]">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-signal-green)] to-transparent opacity-70" />
      <div
        className="relative"
        style={{
          background: 'linear-gradient(180deg, var(--color-obsidian-light) 0%, #050609 100%)'
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[420px] h-[280px] rounded-full bg-[var(--color-signal-green)]/[0.035] blur-[110px]" />
          <div className="absolute bottom-0 right-1/4 w-[360px] h-[240px] rounded-full bg-[var(--color-frost-violet)]/[0.035] blur-[100px]" />
        </div>

        <div className="section-container relative pt-[80px] pb-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px] pb-[64px]">
            <div className="md:col-span-4">
              <div className="text-3xl font-bold font-display tracking-tight mb-[16px] text-[var(--color-headline)]">
                My<span className="gradient-text-signal">Pro</span>Funnels
              </div>
              <p className="text-[var(--color-body)] text-[15px] leading-relaxed mb-[28px]">
                India&apos;s done-for-you AI funnel system for businesses ready to build predictable growth.
              </p>

              <div className="flex flex-col gap-[14px]">
                <a href="mailto:support@myprofunnels.com" className={`${linkClass} flex items-center gap-[12px] group`}>
                  <span className="w-[32px] h-[32px] rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--color-body-dim)] group-hover:text-[var(--color-signal-green)] group-hover:border-[var(--color-signal-green)]/20 transition-colors duration-200 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  support@myprofunnels.com
                </a>
                <a href="tel:+918062181499" className={`${linkClass} flex items-center gap-[12px] group`}>
                  <span className="w-[32px] h-[32px] rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--color-body-dim)] group-hover:text-[var(--color-signal-green)] group-hover:border-[var(--color-signal-green)]/20 transition-colors duration-200 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  +91 8062181499
                </a>
                <div className="flex items-center gap-[12px] text-[var(--color-body)] text-[14px]">
                  <span className="w-[32px] h-[32px] rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--color-body-dim)] flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  India
                </div>
              </div>

              <div className="flex items-center gap-[10px] mt-[28px] text-[12px] text-[var(--color-body-dim)]">
                <span className="w-[8px] h-[8px] rounded-full bg-[var(--color-signal-green)] shadow-[0_0_12px_rgba(0,226,138,0.7)]" />
                Currently onboarding growth-focused businesses
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-[40px]">
              <div className="flex flex-col gap-[20px]">
                <h4 className="text-[var(--color-headline)] text-[12px] font-bold font-display uppercase tracking-[0.16em]">Company</h4>
                <div className="flex flex-col gap-[14px]">
                  <a href="#problem" className={linkClass}>The Challenge</a>
                  <a href="#solution" className={linkClass}>Our Solution</a>
                  <a href="#roadmap" className={linkClass}>Scaling Roadmap</a>
                  <a href="#testimonials" className={linkClass}>Testimonials</a>
                </div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <h4 className="text-[var(--color-headline)] text-[12px] font-bold font-display uppercase tracking-[0.16em]">Services</h4>
                <div className="flex flex-col gap-[14px]">
                  <a href="#solution" className={linkClass}>AI Funnel Setup</a>
                  <a href="#roadmap" className={linkClass}>Lead Generation</a>
                  <a href="#roadmap" className={linkClass}>Smart Automation</a>
                  <a href={STRATEGY_CALL_URL} className={linkClass}>Strategy Call</a>
                </div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <h4 className="text-[var(--color-headline)] text-[12px] font-bold font-display uppercase tracking-[0.16em]">Explore</h4>
                <div className="flex flex-col gap-[14px]">
                  <a href="#stats" className={linkClass}>Results</a>
                  <a href="#why-us" className={linkClass}>Why Us</a>
                  <a href="#contact" className={linkClass}>Contact</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[28px] border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-[16px]">
            <div className="text-[var(--color-body-dim)] text-[12px] text-center md:text-left">
              &copy; 2026 Shrivastava Profunnels Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[8px] text-[12px] text-[var(--color-body-dim)]">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Refund Policy</span>
            </div>
          </div>

          <p className="text-center text-[11px] text-[var(--color-body-dim)] leading-relaxed border-t border-white/[0.03] mt-[24px] pt-[18px]">
            Disclaimer: MyProFunnels is a specialized business consulting and automation agency. Results vary by industry, offer, execution, and market conditions.
          </p>
        </div>
      </div>
    </footer>
  )
}
