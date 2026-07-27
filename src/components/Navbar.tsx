import { useScrollProgress } from '../hooks/useScrollProgress'
import { useMagneticButton } from '../hooks/useMagneticButton'
import { motion } from 'framer-motion'

export function Navbar() {
  const { pastThreshold } = useScrollProgress(50)
  const magnetic = useMagneticButton<HTMLAnchorElement>(0.2)

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${pastThreshold ? 'glass-card py-3 border-x-0 border-t-0 rounded-none' : 'py-6 bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-20 flex justify-between items-center">
        <div className="text-2xl font-bold font-display tracking-tight cursor-pointer">
          My<span className="gradient-text-signal">Pro</span>Funnels
        </div>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#features" className="text-[var(--color-body)] hover:text-[var(--color-signal-green)] transition-colors duration-300">Features</a>
          <a href="#how-it-works" className="text-[var(--color-body)] hover:text-[var(--color-signal-green)] transition-colors duration-300">How It Works</a>
          <a href="#about" className="text-[var(--color-body)] hover:text-[var(--color-signal-green)] transition-colors duration-300">About</a>
          <motion.a
            href="#contact"
            ref={magnetic.ref}
            onMouseMove={magnetic.handleMouseMove}
            onMouseLeave={magnetic.handleMouseLeave}
            style={{ x: magnetic.springX, y: magnetic.springY }}
            className="btn-signal px-6 py-2.5 text-sm no-underline"
          >
            Book Strategy Call
          </motion.a>
        </nav>
        <button className="md:hidden text-[var(--color-headline)] text-2xl bg-transparent border-none cursor-pointer">☰</button>
      </div>
    </header>
  )
}
