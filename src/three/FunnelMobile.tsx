import { motion } from 'framer-motion'

const particleColors = ['#2dd4bf', '#14b8a6', '#8B7CF6', '#2dd4bf', '#14b8a6']

const funnelPath = "M 10 0 Q 10 0, 40 0 L 160 0 Q 190 0, 190 0 L 190 0 Q 190 0, 190 20 L 155 130 Q 150 145, 140 150 L 60 150 Q 50 145, 45 130 L 10 20 Q 10 0, 10 0 Z"

export function FunnelMobile() {
  return (
    <div className="md:hidden flex justify-center items-center w-full h-[220px] mt-8 mb-4 relative z-0 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-[var(--color-teal)]/[0.06] blur-[80px]" />

      <div className="relative w-[200px] h-[200px]">
        {/* Funnel SVG shape */}
        <motion.svg
          viewBox="0 0 200 160"
          className="absolute top-0 left-0 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Funnel body — glass effect */}
          <defs>
            <linearGradient id="funnelGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(45,212,191,0.12)" />
              <stop offset="50%" stopColor="rgba(139,124,246,0.08)" />
              <stop offset="100%" stopColor="rgba(45,212,191,0.06)" />
            </linearGradient>
            <linearGradient id="funnelStrokeMobile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(45,212,191,0.35)" />
              <stop offset="50%" stopColor="rgba(139,124,246,0.25)" />
              <stop offset="100%" stopColor="rgba(45,212,191,0.35)" />
            </linearGradient>
          </defs>

          <path
            d={funnelPath}
            fill="url(#funnelGradMobile)"
            stroke="url(#funnelStrokeMobile)"
            strokeWidth="1.5"
          />

          {/* Top rim glow */}
          <line x1="10" y1="0" x2="190" y2="0" stroke="#2dd4bf" strokeWidth="2" opacity="0.5" />
          {/* Bottom rim glow */}
          <line x1="60" y1="150" x2="140" y2="150" stroke="#2dd4bf" strokeWidth="2" opacity="0.5" />
        </motion.svg>

        {/* Animated particles flowing through funnel */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const startX = 60 + Math.random() * 80
          const midX = 80 + Math.random() * 40
          const endX = 90 + Math.random() * 20
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 3 === 0 ? 6 : 4,
                height: i % 3 === 0 ? 6 : 4,
                background: particleColors[i % particleColors.length],
                boxShadow: `0 0 8px ${particleColors[i % particleColors.length]}80`,
                left: 0,
                top: 0,
              }}
              animate={{
                x: [startX, midX, endX],
                y: [-10, 70, 155],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.3],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          )
        })}

        {/* Revenue node at bottom */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[36px] h-[36px] rounded-full border border-[var(--color-teal)]/30 flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle, rgba(45,212,191,0.15) 0%, rgba(45,212,191,0.03) 100%)',
          }}
          animate={{
            boxShadow: [
              '0 0 12px rgba(45,212,191,0.2)',
              '0 0 24px rgba(45,212,191,0.4)',
              '0 0 12px rgba(45,212,191,0.2)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[var(--color-teal)] text-[14px] font-bold font-display">₹</span>
        </motion.div>

        {/* Signal pulse ring at top */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-[-4px] w-[180px] h-[8px] rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(45,212,191,0.3), transparent)',
            filter: 'blur(3px)',
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
