// import { STRATEGY_CALL_URL } from '../constants'

// const linkClass = 'text-[var(--color-body)] text-[14px] hover:text-[var(--color-teal)] transition-colors duration-200'

// export function Footer() {
//   return (
//     <footer className="relative z-10 overflow-hidden">
//       <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-teal)] to-transparent opacity-70" />
//       <div
//         className="relative"
//         style={{ background: 'linear-gradient(180deg, var(--color-obsidian-light) 0%, #050609 100%)' }}
//       >
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-0 left-1/4 w-[420px] h-[280px] rounded-full bg-[var(--color-teal)]/[0.03] blur-[110px]" />
//           <div className="absolute bottom-0 right-1/4 w-[360px] h-[240px] rounded-full bg-[var(--color-teal)]/[0.02] blur-[100px]" />
//         </div>

//         <div className="section-container relative pt-[80px] pb-[40px]">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px] pb-[64px]">
//             <div className="md:col-span-4">
//               <div className="text-[28px] font-bold font-display tracking-tight mb-[16px] text-[var(--color-headline)]">
//                 My<span className="gradient-text-teal">Pro</span>Funnels
//               </div>
//               <p className="text-[var(--color-body)] text-[14px] leading-relaxed mb-[28px]">
//                 India&apos;s done-for-you AI funnel system for businesses ready to build predictable growth.
//               </p>

//               <div className="flex flex-col gap-[14px]">
//                 <a href="mailto:support@myprofunnels.com" className={`${linkClass} flex items-center gap-[12px] group`}>
//                   <span className="w-[32px] h-[32px] rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--color-body-dim)] group-hover:text-[var(--color-teal)] group-hover:border-[var(--color-teal)]/20 transition-colors duration-200 flex-shrink-0">
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
//                     </svg>
//                   </span>
//                   support@myprofunnels.com
//                 </a>
//                 <a href="tel:+918062181499" className={`${linkClass} flex items-center gap-[12px] group`}>
//                   <span className="w-[32px] h-[32px] rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--color-body-dim)] group-hover:text-[var(--color-teal)] group-hover:border-[var(--color-teal)]/20 transition-colors duration-200 flex-shrink-0">
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                     </svg>
//                   </span>
//                   +91 8062181499
//                 </a>
//                 <div className="flex items-center gap-[12px] text-[var(--color-body)] text-[14px]">
//                   <span className="w-[32px] h-[32px] rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--color-body-dim)] flex-shrink-0">
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//                       <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" />
//                     </svg>
//                   </span>
//                   India
//                 </div>
//               </div>

//               <div className="flex items-center gap-[10px] mt-[28px] text-[12px] text-[var(--color-body-dim)]">
//                 <span className="w-[8px] h-[8px] rounded-full bg-[var(--color-teal)] shadow-[0_0_12px_rgba(45,212,191,0.7)]" />
//                 Currently onboarding growth-focused businesses
//               </div>
//             </div>

//             <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-[40px]">
//               <div className="flex flex-col gap-[20px]">
//                 <h4 className="text-[var(--color-headline)] text-[12px] font-bold font-display uppercase tracking-[0.15em]">Company</h4>
//                 <div className="flex flex-col gap-[14px]">
//                   <a href="#problem" className={linkClass}>The Challenge</a>
//                   <a href="#solution" className={linkClass}>Our Solution</a>
//                   <a href="#roadmap" className={linkClass}>Scaling Roadmap</a>
//                   <a href="#testimonials" className={linkClass}>Testimonials</a>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-[20px]">
//                 <h4 className="text-[var(--color-headline)] text-[12px] font-bold font-display uppercase tracking-[0.15em]">Services</h4>
//                 <div className="flex flex-col gap-[14px]">
//                   <a href="#solution" className={linkClass}>AI Funnel Setup</a>
//                   <a href="#roadmap" className={linkClass}>Lead Generation</a>
//                   <a href="#roadmap" className={linkClass}>Smart Automation</a>
//                   <a href={STRATEGY_CALL_URL} className={linkClass}>Strategy Call</a>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-[20px]">
//                 <h4 className="text-[var(--color-headline)] text-[12px] font-bold font-display uppercase tracking-[0.15em]">Explore</h4>
//                 <div className="flex flex-col gap-[14px]">
//                   <a href="#stats" className={linkClass}>Results</a>
//                   <a href="#why-us" className={linkClass}>Why Us</a>
//                   <a href="#contact" className={linkClass}>Contact</a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="pt-[28px] border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-[16px]">
//             <div className="text-[var(--color-body-dim)] text-[12px] text-center md:text-left">
//               &copy; 2026 Shrivastava Profunnels Pvt. Ltd. All rights reserved.
//             </div>
//             <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[8px] text-[12px] text-[var(--color-body-dim)]">
//               <span>Privacy Policy</span>
//               <span>Terms of Service</span>
//               <span>Refund Policy</span>
//             </div>
//           </div>

//           <p className="text-center text-[11px] text-[var(--color-body-dim)] leading-relaxed border-t border-white/[0.03] mt-[24px] pt-[18px]">
//             Disclaimer: MyProFunnels is a specialized business consulting and automation agency. Results vary by industry, offer, execution, and market conditions.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }



import { STRATEGY_CALL_URL } from '../constants'
import { useEffect, useRef, useState } from 'react'

const linkClass = 'text-[var(--color-body)] text-[14px] hover:text-[var(--color-teal)] transition-colors duration-200'

const injectedStyles = `
  @keyframes footerPulse {
    0%, 100% { opacity: 0.4; transform: scaleX(0.85); }
    50% { opacity: 1; transform: scaleX(1); }
  }
  @keyframes footerOrbFloat1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -20px) scale(1.1); }
    66% { transform: translate(-20px, 15px) scale(0.95); }
  }
  @keyframes footerOrbFloat2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-40px, 25px) scale(1.15); }
  }
  @keyframes footerOrbFloat3 {
    0%, 100% { transform: translate(0, 0); opacity: 0.5; }
    50% { transform: translate(25px, -30px); opacity: 1; }
  }
  @keyframes footerMarquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes footerGradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes footerGlowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(45, 212, 191, 0.15), inset 0 0 20px rgba(45, 212, 191, 0.05); }
    50% { box-shadow: 0 0 40px rgba(45, 212, 191, 0.35), inset 0 0 30px rgba(45, 212, 191, 0.1); }
  }
  @keyframes footerScan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  @keyframes footerDotPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.4); opacity: 0.6; }
  }
  @keyframes footerRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes footerFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes footerShimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .footer-grid-bg {
    background-image:
      linear-gradient(rgba(45, 212, 191, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(45, 212, 191, 0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
  }
  .footer-marquee-track {
    animation: footerMarquee 40s linear infinite;
  }
  .footer-orb-1 { animation: footerOrbFloat1 14s ease-in-out infinite; }
  .footer-orb-2 { animation: footerOrbFloat2 18s ease-in-out infinite; }
  .footer-orb-3 { animation: footerOrbFloat3 12s ease-in-out infinite; }
  .footer-pulse-line { animation: footerPulse 3s ease-in-out infinite; }
  .footer-glow-card { animation: footerGlowPulse 4s ease-in-out infinite; }
  .footer-dot-pulse { animation: footerDotPulse 2s ease-in-out infinite; }
  .footer-rotate-slow { animation: footerRotate 30s linear infinite; }
  .footer-fade-up { animation: footerFadeUp 0.8s ease-out both; }

  .footer-brand-text {
    background: linear-gradient(90deg, #2dd4bf 0%, #5eead4 25%, #ffffff 50%, #5eead4 75%, #2dd4bf 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: footerShimmer 6s linear infinite;
  }

  .footer-cta-btn {
    position: relative;
    overflow: hidden;
  }
  .footer-cta-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.6s ease;
  }
  .footer-cta-btn:hover::before {
    left: 100%;
  }

  .footer-magnetic-link {
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.2s ease;
    display: inline-block;
  }
  .footer-magnetic-link:hover {
    color: var(--color-teal);
    transform: translateX(4px);
  }
  .footer-magnetic-link::before {
    content: '→';
    display: inline-block;
    width: 0;
    opacity: 0;
    overflow: hidden;
    transition: width 0.3s ease, opacity 0.3s ease, margin 0.3s ease;
    margin-right: 0;
  }
  .footer-magnetic-link:hover::before {
    width: 16px;
    opacity: 1;
    margin-right: 6px;
  }

  .footer-scan-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(45, 212, 191, 0.15), transparent);
    animation: footerScan 4s ease-in-out infinite;
    pointer-events: none;
  }
`

export function Footer() {

  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      ref={footerRef}
     
      className="relative z-10 mt-20 overflow-hidden"
    >
      <style>{injectedStyles}</style>

      {/* Animated top pulse line */}
      <div className="relative h-[2px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-teal)] to-transparent opacity-70 footer-pulse-line" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent footer-scan-line" />
      </div>

      {/* Main footer body */}
      <div
        className="relative"
        style={{ background: 'linear-gradient(180deg, var(--color-obsidian-light) 0%, #050609 100%)' }}
      >


        {/* Animated floating orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[420px] h-[420px] rounded-full bg-[var(--color-teal)]/[0.04] blur-[120px] footer-orb-1" />
          <div className="absolute bottom-[10%] right-[8%] w-[380px] h-[380px] rounded-full bg-[var(--color-teal)]/[0.03] blur-[110px] footer-orb-2" />
          <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] rounded-full bg-cyan-500/[0.03] blur-[100px] footer-orb-3" />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 footer-grid-bg pointer-events-none" />

        {/* Rotating decorative ring */}
        <div className="absolute -right-[200px] top-[100px] w-[500px] h-[500px] pointer-events-none opacity-[0.15]">
          <div className="footer-rotate-slow w-full h-full rounded-full border border-[var(--color-teal)]/30" style={{
            backgroundImage: 'conic-gradient(from 0deg, transparent 0%, rgba(45,212,191,0.4) 25%, transparent 50%, rgba(45,212,191,0.2) 75%, transparent 100%)',
            mask: 'radial-gradient(circle, transparent 60%, black 61%, black 63%, transparent 64%)',
            WebkitMask: 'radial-gradient(circle, transparent 60%, black 61%, black 63%, transparent 64%)',
          }} />
        </div>

        <div className="section-container relative pt-[80px] pb-[40px]">

          {/* ===== CREATIVE CTA BANNER =====
          <div className={`mb-[80px] ${isVisible ? 'footer-fade-up' : 'opacity-0'}`}>
            <div className="relative group">
              {/* Animated border gradient */}
              {/* <div className="absolute -inset-[1px] rounded-[24px] overflow-hidden">
                <div className="absolute inset-0" style={{
                  background: 'conic-gradient(from var(--angle, 0deg), transparent 0%, var(--color-teal) 25%, transparent 50%, var(--color-teal) 75%, transparent 100%)',
                  animation: 'footerRotate 8s linear infinite',
                }} />
              </div>

              <div className="relative rounded-[24px] bg-gradient-to-br from-[#0a0d14] to-[#050609] p-[48px] md:p-[64px] overflow-hidden footer-glow-card">
                {/* Inner glow */}
                {/* <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-teal)]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px]" />

                <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[32px]">
                  <div className="flex-1">
                    <div className="flex items-center gap-[10px] mb-[16px]">
                      <span className="relative flex h-[10px] w-[10px]">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-teal)] opacity-75 footer-dot-pulse" />
                        <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-[var(--color-teal)]" />
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-teal)] font-semibold">
                        Limited slots available
                      </span>
                    </div>
                    <h3 className="text-[32px] md:text-[44px] font-bold font-display tracking-tight text-[var(--color-headline)] leading-[1.1] mb-[16px]">
                      Let's build your
                      <br />
                      <span className="footer-brand-text">growth engine.</span>
                    </h3>
                    <p className="text-[var(--color-body)] text-[15px] max-w-[480px] leading-relaxed">
                      Book a free 30-minute strategy call. We'll map your funnel, identify leaks, and show you exactly how AI can 10x your conversions.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[14px] w-full lg:w-auto">
                    <a
                      href={STRATEGY_CALL_URL}
                      className="footer-cta-btn inline-flex items-center justify-center gap-[10px] px-[32px] py-[18px] rounded-full bg-gradient-to-r from-[var(--color-teal)] to-cyan-400 text-[#050609] font-bold text-[14px] tracking-wide hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_30px_rgba(45,212,191,0.3)]"
                    >
                      Book Strategy Call
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                    <a
                      href="mailto:support@myprofunnels.com"
                      className="inline-flex items-center justify-center gap-[10px] px-[32px] py-[16px] rounded-full border border-white/10 text-[var(--color-body)] text-[13px] hover:border-[var(--color-teal)]/40 hover:text-[var(--color-teal)] transition-all duration-300"
                    >
                      or email us directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* ===== MAIN GRID ===== */}
          <div className={`grid grid-cols-1 md:grid-cols-12 gap-[48px] pb-[64px] ${isVisible ? 'footer-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="md:col-span-4">
              <div className="text-[28px] font-bold font-display tracking-tight mb-[16px]">
                <span className="text-[var(--color-headline)]">My</span>
                <span className="footer-brand-text">Pro</span>
                <span className="text-[var(--color-headline)]">Funnels</span>
              </div>
              <p className="text-[var(--color-body)] text-[14px] leading-relaxed mb-[28px]">
                India&apos;s done-for-you AI funnel system for businesses ready to build predictable growth.
              </p>

              <div className="flex flex-col gap-[14px]">
                <a href="mailto:support@myprofunnels.com" className={`${linkClass} flex items-center gap-[12px] group`}>
                  <span className="w-[36px] h-[36px] rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--color-body-dim)] group-hover:text-[var(--color-teal)] group-hover:border-[var(--color-teal)]/40 group-hover:bg-[var(--color-teal)]/[0.05] group-hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-300 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  support@myprofunnels.com
                </a>
                <a href="tel:+918062181499" className={`${linkClass} flex items-center gap-[12px] group`}>
                  <span className="w-[36px] h-[36px] rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--color-body-dim)] group-hover:text-[var(--color-teal)] group-hover:border-[var(--color-teal)]/40 group-hover:bg-[var(--color-teal)]/[0.05] group-hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-300 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  +91 8062181499
                </a>
                <div className="flex items-center gap-[12px] text-[var(--color-body)] text-[14px]">
                  <span className="w-[36px] h-[36px] rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[var(--color-body-dim)] flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  India
                </div>
              </div>

              <div className="flex items-center gap-[10px] mt-[28px] text-[12px] text-[var(--color-body-dim)]">
                <span className="relative flex h-[8px] w-[8px]">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-teal)] opacity-75 footer-dot-pulse" />
                  <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-[var(--color-teal)] shadow-[0_0_12px_rgba(45,212,191,0.7)]" />
                </span>
                Currently onboarding growth-focused businesses
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-[40px]">
              <div className="flex flex-col gap-[20px]">
                <h4 className="text-[var(--color-headline)] text-[12px] font-bold font-display uppercase tracking-[0.15em] flex items-center gap-[8px]">
                  <span className="w-[14px] h-[1px] bg-[var(--color-teal)]" />
                  Company
                </h4>
                <div className="flex flex-col gap-[14px]">
                  <a href="#problem" className="footer-magnetic-link text-[var(--color-body)] text-[14px]">The Challenge</a>
                  <a href="#solution" className="footer-magnetic-link text-[var(--color-body)] text-[14px]">Our Solution</a>
                  <a href="#roadmap" className="footer-magnetic-link text-[var(--color-body)] text-[14px]">Scaling Roadmap</a>
                  <a href="#testimonials" className="footer-magnetic-link text-[var(--color-body)] text-[14px]">Testimonials</a>
                </div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <h4 className="text-[var(--color-headline)] text-[12px] font-bold font-display uppercase tracking-[0.15em] flex items-center gap-[8px]">
                  <span className="w-[14px] h-[1px] bg-[var(--color-teal)]" />
                  Services
                </h4>
                <div className="flex flex-col gap-[14px]">
                  <a href="#solution" className="footer-magnetic-link text-[var(--color-body)] text-[14px]">AI Funnel Setup</a>
                  <a href="#roadmap" className="footer-magnetic-link text-[var(--color-body)] text-[14px]">Lead Generation</a>
                  <a href="#roadmap" className="footer-magnetic-link text-[var(--color-body)] text-[14px]">Smart Automation</a>
                  <a href={STRATEGY_CALL_URL} className="footer-magnetic-link text-[var(--color-body)] text-[14px]">Strategy Call</a>
                </div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <h4 className="text-[var(--color-headline)] text-[12px] font-bold font-display uppercase tracking-[0.15em] flex items-center gap-[8px]">
                  <span className="w-[14px] h-[1px] bg-[var(--color-teal)]" />
                  Explore
                </h4>
                <div className="flex flex-col gap-[14px]">
                  <a href="#stats" className="footer-magnetic-link text-[var(--color-body)] text-[14px]">Results</a>
                  <a href="#why-us" className="footer-magnetic-link text-[var(--color-body)] text-[14px]">Why Us</a>
                  <a href="#contact" className="footer-magnetic-link text-[var(--color-body)] text-[14px]">Contact</a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== MARQUEE TICKER ===== */}
          <div className={`relative py-[24px] border-y border-white/[0.06] overflow-hidden mb-[28px] ${isVisible ? 'footer-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#050609] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#050609] to-transparent z-10 pointer-events-none" />
            <div className="flex footer-marquee-track whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-[48px] px-[24px]">
                  {['AI-POWERED', 'DATA-DRIVEN', 'CONVERSION-FOCUSED', 'AUTOMATED', 'SCALABLE', 'PREDICTABLE GROWTH', 'DONE-FOR-YOU', 'RESULT-ORIENTED'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-[48px]">
                      <span className="text-[13px] font-semibold tracking-[0.3em] text-[var(--color-headline)]/60">
                        {item}
                      </span>
                      <span className="text-[var(--color-teal)] text-[10px]">◆</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ===== BOTTOM BAR ===== */}
          <div className={`pt-[28px] flex flex-col md:flex-row justify-between items-center gap-[20px] ${isVisible ? 'footer-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-[20px]">
              <div className="text-[var(--color-body-dim)] text-[12px] text-center md:text-left">
                &copy; 2026 Shrivastava Profunnels Pvt. Ltd. All rights reserved.
              </div>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[8px] text-[12px] text-[var(--color-body-dim)]">
                <span className="hover:text-[var(--color-teal)] transition-colors cursor-pointer">Privacy Policy</span>
                <span className="text-white/10">•</span>
                <span className="hover:text-[var(--color-teal)] transition-colors cursor-pointer">Terms of Service</span>
                <span className="text-white/10">•</span>
                <span className="hover:text-[var(--color-teal)] transition-colors cursor-pointer">Refund Policy</span>
              </div>

              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group relative w-[40px] h-[40px] rounded-full border border-white/10 flex items-center justify-center text-[var(--color-body-dim)] hover:border-[var(--color-teal)]/50 hover:text-[var(--color-teal)] hover:bg-[var(--color-teal)]/[0.05] transition-all duration-300 overflow-hidden"
              >
                <svg className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[2px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
                </svg>
                <span className="absolute inset-0 bg-gradient-to-t from-[var(--color-teal)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
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

