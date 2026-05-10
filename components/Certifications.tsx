'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

const CERTS = [
  {
    name: 'AI Fluency: AI Capabilities & Limitations',
    org: 'Anthropic',
    date: 'May 2026',
    expiry: null,
    id: 'by87nrrv6d9n',
    img: '/images/cert-claude.png',
    verifyUrl: '#',
    accent: 'purple',
  },
  {
    name: 'Google Analytics Certification',
    org: 'Google',
    date: 'April 2026',
    expiry: 'April 2027',
    id: '180746109',
    img: '/images/cert-google.png',
    verifyUrl: 'https://skillshop.credential.net/180746109',
    accent: 'blue',
  },
  {
    name: 'LinkedIn Content & Creative Design',
    org: 'LinkedIn Marketing Labs',
    date: 'April 2026',
    expiry: 'April 2028',
    id: 'jj656mcruktq',
    img: '/images/cert-linkedin.png',
    verifyUrl: 'https://verify.skilljar.com/c/jj656mcruktq',
    accent: 'blue',
  },
  {
    name: 'Canva Essentials',
    org: 'Canva Design School',
    date: 'April 7, 2026',
    expiry: null,
    id: 'ef8eed',
    img: '/images/cert-canva.png',
    verifyUrl: '#',
    accent: 'teal',
  },
]

const ACCENT: Record<string, string> = {
  purple: 'border-purple-500/30 group-hover:border-purple-500/50 group-hover:shadow-purple-900/40',
  blue: 'border-blue-500/30 group-hover:border-blue-500/50 group-hover:shadow-blue-900/40',
  teal: 'border-teal-500/30 group-hover:border-teal-500/50 group-hover:shadow-teal-900/40',
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Certifications() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="certifications" className="py-28 px-6 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Certifications</span>
          <h2
            className="font-extrabold tracking-tight mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Verified{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {CERTS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={item}
              className={`group relative bg-white/[0.025] border rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:shadow-2xl ${ACCENT[cert.accent]}`}
              style={{ boxShadow: 'none' }}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              {/* Subtle radial glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-radial from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* Certificate image */}
              <div
                className="relative w-full h-[145px] rounded-xl overflow-hidden mb-4 border border-white/[0.06] cursor-zoom-in"
                onClick={() => setLightbox({ src: cert.img, alt: cert.name })}
              >
                <Image
                  src={cert.img}
                  alt={cert.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-end p-2 opacity-0 hover:opacity-100">
                  <span className="text-white text-xs font-semibold">View certificate ↗</span>
                </div>
              </div>

              <h3 className="font-bold text-[1rem] mb-1 leading-snug">{cert.name}</h3>
              <p className="text-purple-400 text-[0.82rem] font-semibold mb-1.5">{cert.org}</p>
              <p className="text-slate-400 text-[0.78rem] mb-0.5">
                📅 {cert.date}{cert.expiry ? ` · Expires ${cert.expiry}` : ''}
              </p>
              <p className="text-white/25 font-mono text-[0.7rem] mb-4">
                ID: {cert.id}
              </p>

              {cert.verifyUrl !== '#' ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[0.78rem] font-bold border border-purple-500/28 bg-purple-500/12 text-purple-300 hover:bg-purple-500/25 transition-colors"
                >
                  Verify ↗
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[0.78rem] font-bold border border-white/10 bg-white/[0.04] text-slate-500 cursor-default">
                  Credential Issued
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  )
}
