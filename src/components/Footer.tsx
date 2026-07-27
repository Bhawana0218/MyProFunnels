export function Footer() {
  return (
    <footer className="bg-[var(--color-obsidian-light)] py-[32px] border-t border-white/[0.04] relative z-10">
      <div className="section-container flex flex-col md:flex-row justify-between items-center gap-[24px]">
        <div className="text-xl font-bold font-display tracking-tight">
          My<span className="gradient-text-signal">Pro</span>Funnels
        </div>
        <div className="text-[var(--color-body-dim)] text-[13px]">
          &copy; {new Date().getFullYear()} MyProFunnels. All rights reserved.
        </div>
        <div className="flex gap-[24px]">
          <a href="#" className="text-[var(--color-body-dim)] hover:text-[var(--color-signal-green)] transition-colors duration-300 text-[13px]">Privacy Policy</a>
          <a href="#" className="text-[var(--color-body-dim)] hover:text-[var(--color-signal-green)] transition-colors duration-300 text-[13px]">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
