import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  baseAlpha: number
  color: string
}

export const LivingUniverseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Responsive particle count (fewer on mobile for 60fps performance)
    const isMobile = width < 768
    const particleCount = isMobile ? 32 : 70
    const connectionDistance = isMobile ? 85 : 120

    const colors = ['#22d3ee', '#38bdf8', '#fbbf24', '#f8fafc']

    // Initialize particles
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 1.8 + 0.8
      const baseAlpha = Math.random() * 0.5 + 0.25
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.6),
        vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.6),
        radius,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)]!
      })
    }

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Handle Mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Handle Tab Visibility (Pause rendering when inactive)
    let isPaused = false
    const handleVisibilityChange = () => {
      isPaused = document.hidden
      if (!isPaused && !prefersReducedMotion) {
        lastTime = performance.now()
        animationFrameId = requestAnimationFrame(render)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    let lastTime = performance.now()
    let pulseY = -100

    // Render loop
    const render = (time: number) => {
      if (isPaused) return

      const delta = Math.min((time - lastTime) / 1000, 0.1)
      lastTime = time

      ctx.clearRect(0, 0, width, height)

      // Move pulse wave down slowly
      pulseY += delta * 70
      if (pulseY > height + 200) {
        pulseY = -150
      }

      // Draw faint scan pulse
      if (pulseY > 0 && pulseY < height) {
        const pulseGradient = ctx.createLinearGradient(0, pulseY - 40, 0, pulseY + 40)
        pulseGradient.addColorStop(0, 'rgba(6, 182, 212, 0)')
        pulseGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.04)')
        pulseGradient.addColorStop(1, 'rgba(6, 182, 212, 0)')
        ctx.fillStyle = pulseGradient
        ctx.fillRect(0, pulseY - 40, width, 80)
      }

      const mouse = mouseRef.current

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!

        if (!prefersReducedMotion) {
          p.x += p.vx
          p.y += p.vy

          // Bounce boundaries
          if (p.x < 0) {
            p.x = 0
            p.vx *= -1
          } else if (p.x > width) {
            p.x = width
            p.vx *= -1
          }

          if (p.y < 0) {
            p.y = 0
            p.vy *= -1
          } else if (p.y > height) {
            p.y = height
            p.vy *= -1
          }

          // Mouse gentle influence
          if (mouse.active) {
            const dx = mouse.x - p.x
            const dy = mouse.y - p.y
            const dist = Math.hypot(dx, dy)
            if (dist < 120 && dist > 0) {
              const force = (120 - dist) / 120
              p.x -= (dx / dist) * force * 1.5
              p.y -= (dy / dist) * force * 1.5
            }
          }
        }

        // Draw particle dot
        ctx.save()
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.shadowBlur = 8
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.restore()

        // Constellation link lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]!
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.hypot(dx, dy)

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.18
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = '#38bdf8'
            ctx.globalAlpha = lineAlpha
            ctx.lineWidth = 0.8
            ctx.stroke()
            ctx.restore()
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    if (prefersReducedMotion) {
      // Just render once
      render(performance.now())
    } else {
      animationFrameId = requestAnimationFrame(render)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Perspective grid base */}
      <div className="absolute inset-0 perspective-grid opacity-40" />

      {/* Atmospheric radial glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Living Canvas Nodes */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  )
}
