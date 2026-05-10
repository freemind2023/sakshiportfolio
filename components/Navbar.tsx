'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const NAV_ITEMS = [
  { label: 'Ebook', id: 'ebook' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'work-showcase' },
  { label: 'Project', id: 'project' },
  { label: 'Skills', id: 'skills' },
  { label: 'Certs', id: 'certifications' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar({ hasBanner = false }: { hasBanner?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.id))
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #7c3aed, #3b82f6, #14b8a6)',
        }}
      />

      {/* Navbar */}
      <motion.nav
        className={`fixed left-0 right-0 z-[1000] px-6 py-4 flex items-center justify-between transition-colors duration-400 ${
          scrolled
            ? 'bg-black/75 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1, top: hasBanner ? 44 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          onClick={() => scrollTo('hero')}
          className="text-xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent select-none"
        >
          SN
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <a
          href="https://drive.google.com/file/d/1549aHlXP78uN1l2aWstew-DjCx7ZyyeU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity"
        >
          Resume ↗
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-[2px] bg-white rounded-full origin-center"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0, width: '100%' }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-[2px] bg-white rounded-full"
            animate={{ opacity: menuOpen ? 0 : 1, width: menuOpen ? '0%' : '100%' }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-[2px] bg-white rounded-full origin-center"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0, width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed left-0 right-0 z-[999] bg-black/95 backdrop-blur-2xl border-b border-white/[0.06] px-4 py-3 md:hidden"
            style={{ top: hasBanner ? 108 : 64 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl text-sm font-medium transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.035, duration: 0.28 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="px-4 pb-2 pt-1">
              <a
                href="https://drive.google.com/file/d/1549aHlXP78uN1l2aWstew-DjCx7ZyyeU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
