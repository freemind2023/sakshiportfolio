'use client'

import { motion } from 'framer-motion'

const BUTTONS = [
  {
    label: 'sakshinivekar@gmail.com',
    href: 'mailto:sakshinivekar@gmail.com',
    gradient: 'from-violet-600 to-blue-500',
    shadow: 'rgba(124,58,237,0.35)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: '+91 93738 02342',
    href: 'tel:+919373802342',
    gradient: 'from-teal-500 to-blue-500',
    shadow: 'rgba(20,184,166,0.35)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3-8.57A2 2 0 012.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.15 6.15l1.27-.54a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sakshi-nivekar-644725306/',
    gradient: 'from-[#0077b5] to-[#00a0dc]',
    shadow: 'rgba(0,119,181,0.35)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Download Resume',
    href: 'https://drive.google.com/file/d/1549aHlXP78uN1l2aWstew-DjCx7ZyyeU/view?usp=sharing',
    gradient: 'from-amber-500 to-red-500',
    shadow: 'rgba(245,158,11,0.35)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
]

const EXTRAS = [
  { label: 'Free Mind Podcast — Spotify', href: 'https://open.spotify.com/show/0R3UF2riquLqRFIRboth2Z' },
  { label: 'Free Talk — Amazon Music', href: 'https://music.amazon.in/podcasts/df2aad0e-a278-4f16-9ff3-c77d8c4daedc/free-talk' },
  { label: 'CRM Dashboard Sample', href: 'https://docs.google.com/spreadsheets/d/1CgFzv3uDX640FsrAP0ZewZgsssMMnfzKTUhZEiTp7tI/edit?usp=sharing' },
  { label: 'Free Mind on LinkedIn', href: 'https://www.linkedin.com/company/freemindconsult/?viewAsMember=true' },
  { label: '@freemind_consultancy', href: 'https://www.instagram.com/freemind_consultancy' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#111127] text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Get in Touch</span>
          <h2
            className="font-extrabold tracking-tight mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-md mx-auto text-[0.97rem]">
            Open to collaborations, freelance projects, and full-time opportunities. Let&apos;s build
            something great together.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 justify-center mt-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {BUTTONS.map((btn) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              target={btn.href.startsWith('mailto') || btn.href.startsWith('tel') ? undefined : '_blank'}
              rel="noopener noreferrer"
              variants={item}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm bg-gradient-to-r ${btn.gradient} text-white transition-all duration-300`}
              style={{ boxShadow: `0 4px 20px ${btn.shadow}` }}
              whileHover={{ y: -4, scale: 1.04, boxShadow: `0 12px 36px ${btn.shadow}` }}
              whileTap={{ scale: 0.97 }}
            >
              {btn.icon}
              {btn.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Extra links */}
        <motion.div
          className="mt-10 pt-8 border-t border-white/[0.06] flex flex-wrap gap-x-6 gap-y-3 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {EXTRAS.map((e) => (
            <a
              key={e.label}
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 flex items-center gap-1.5"
            >
              {e.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
