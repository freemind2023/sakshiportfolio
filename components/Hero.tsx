'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTyping } from '@/hooks/useTyping'

const ROLES = ['Business Development Executive', 'Creative Strategist', 'Social Media Executive']

const COLORS = ['168,85,247', '99,102,241', '59,130,246', '20,184,166', '236,72,153']

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  col: string
  a: number
}

function initParticles(W: number, H: number, count = 120): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 1.8 + 0.4,
    col: COLORS[Math.floor(Math.random() * COLORS.length)],
    a: Math.random() * 0.5 + 0.1,
  }))
}

export default function Hero() {
  const typed = useTyping(ROLES)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const cv: HTMLCanvasElement = canvas
    const ctx = cv.getContext('2d')!
    let raf = 0
    let W = 0
    let H = 0
    let pts: Particle[] = []

    function resize() {
      W = cv.width = window.innerWidth
      H = cv.height = window.innerHeight
      pts = initParticles(W, H)
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    function draw() {
      ctx.clearRect(0, 0, W, H)
      const mx = mouse.current.x
      const my = mouse.current.y

      for (const p of pts) {
        // Soft mouse attraction
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 160) {
          const force = (160 - dist) / 160
          p.vx += dx * force * 0.0012
          p.vy += dy * force * 0.0012
        }

        // Speed damping
        p.vx *= 0.99
        p.vy *= 0.99

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.col},${p.a})`
        ctx.fill()
      }

      // Connection lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 90) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - d / 90)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-6"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <span className="section-label mb-5 inline-flex">✦ Available for Opportunities</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="gradient-text font-black leading-[1.04] tracking-tighter mb-5"
          style={{ fontSize: 'clamp(2.4rem, 7.5vw, 5.4rem)' }}
        >
          SAKSHI G. NIVEKAR
        </motion.h1>

        {/* Typing */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-1 mb-4"
          style={{ fontSize: 'clamp(1rem, 2.8vw, 1.45rem)' }}
        >
          <span className="font-semibold text-slate-400">I&apos;m a&nbsp;</span>
          <span className="font-bold text-teal-400">{typed}</span>
          <span
            className="inline-block w-[3px] h-[1.1em] bg-teal-400 rounded-sm animate-blink align-middle ml-0.5"
          />
        </motion.div>

        <motion.p variants={fadeUp} className="text-slate-400 text-sm mb-8 flex items-center justify-center gap-1.5">
          Pune, Maharashtra
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-3 justify-center flex-wrap mb-8">
          <a
            href="https://drive.google.com/file/d/1549aHlXP78uN1l2aWstew-DjCx7ZyyeU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download Resume
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Contact Me →
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeUp} className="flex gap-3 justify-center">
          {[
            {
              href: 'https://www.linkedin.com/in/sakshi-nivekar-644725306/',
              label: 'LinkedIn',
              svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              href: 'mailto:sakshinivekar@gmail.com',
              label: 'Email',
              svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
            },
            {
              href: 'https://www.instagram.com/freemind_consultancy',
              label: 'Instagram',
              svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              ),
            },
          ].map(({ href, label, svg }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full flex items-center justify-center text-slate-400 border border-white/[0.07] bg-white/[0.03] hover:border-purple-500/50 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {svg}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 text-xs font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll</span>
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-slate-500 to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
