import { useRef, useEffect, useCallback } from 'react'

interface Particle {
  baseX: number
  baseY: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  hue: number
  drift: number
  phase: number
}

export function ParticleStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const scrollRef = useRef(0)
  const rafRef = useRef<number>(0)

  const createParticles = useCallback((w: number, h: number) => {
    const count = Math.min(50, Math.floor((w * h) / 25000))
    const particles: Particle[] = []
    for (let i = 0; i < count; i++) {
      particles.push({
        baseX: Math.random() * w,
        baseY: Math.random() * h,
        x: 0,
        y: 0,
        size: 1 + Math.random() * 2.5,
        speed: 0.3 + Math.random() * 0.7,
        opacity: 0.15 + Math.random() * 0.4,
        hue: Math.random(),
        drift: (Math.random() - 0.5) * 0.8,
        phase: Math.random() * Math.PI * 2,
      })
    }
    return particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
      particlesRef.current = createParticles(window.innerWidth, window.innerHeight)
    }

    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight
      scrollRef.current = docH > 0 ? window.scrollY / docH : 0
    }

    resize()
    onScroll()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let time = 0
    const animate = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const scroll = scrollRef.current

      ctx.clearRect(0, 0, w, h)

      // Spread: 1.0 at top → 0.0 at bottom
      const spread = Math.max(0, 1 - scroll * 1.6)
      // Center pull: 0 at top → 1 at bottom
      const centerPull = Math.min(1, scroll * 1.4)
      // Stream mode activates in the final third
      const streamMode = scroll > 0.65

      if (!prefersReduced) time += 0.008

      const centerX = w * 0.5
      const streamX = w * 0.5

      particlesRef.current.forEach((p) => {
        // Gentle idle float
        const floatX = Math.sin(time * p.speed + p.phase) * 20 * spread
        const floatY = Math.cos(time * p.speed * 0.7 + p.phase) * 15 * spread

        // Target position
        let targetX: number
        let targetY: number

        if (streamMode) {
          // Converge to a vertical stream line with slight offset per particle
          targetX = streamX + p.drift * 40 * (1 - centerPull)
          targetY = (p.baseY / h) * h
        } else {
          // Phase 1-2: scattered → converging toward center column
          targetX = p.baseX + floatX
          targetY = p.baseY + floatY
        }

        // Apply convergence toward target
        p.x += (targetX - p.x) * 0.03
        p.y += (targetY - p.y) * 0.02

        // Spread X toward center based on scroll
        p.x = p.x * (1 - centerPull * 0.02) + centerX * centerPull * 0.02

        // Color: green at top, teal in middle, violet hints at convergence
        let r: number, g: number, b: number
        if (scroll < 0.3) {
          // Signal green
          r = 0; g = 226; b = 138
        } else if (scroll < 0.6) {
          // Transition to teal
          const t = (scroll - 0.3) / 0.3
          r = 0; g = Math.round(226 - t * 14); b = Math.round(138 + t * 79)
        } else {
          // Teal with violet hints
          const t = (scroll - 0.6) / 0.4
          r = Math.round(t * 139); g = Math.round(212 - t * 88); b = Math.round(217 - t * 19)
        }

        const alpha = p.opacity * (0.5 + centerPull * 0.5)

        // Draw glow
        const glowSize = p.size * (3 + centerPull * 4)
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize)
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw core dot
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (0.8 + centerPull * 0.4), 0, Math.PI * 2)
        ctx.fill()
      })

      // In stream mode, draw connecting lines between nearby particles
      if (streamMode) {
        const conAlpha = Math.min(1, (scroll - 0.65) * 5) * 0.12
        ctx.strokeStyle = `rgba(0, 184, 217, ${conAlpha})`
        ctx.lineWidth = 0.5
        const ps = particlesRef.current
        for (let i = 0; i < ps.length; i++) {
          for (let j = i + 1; j < ps.length; j++) {
            const dx = ps[i].x - ps[j].x
            const dy = ps[i].y - ps[j].y
            const dist = dx * dx + dy * dy
            if (dist < 3600) {
              ctx.beginPath()
              ctx.moveTo(ps[i].x, ps[i].y)
              ctx.lineTo(ps[j].x, ps[j].y)
              ctx.stroke()
            }
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [createParticles])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
      aria-hidden="true"
    />
  )
}
