'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

const ITEMS = [
  {
    src: '/images/work-ga1.png',
    title: 'Google Analytics — Free Mind',
    desc: '189 active users · 1.3K events · 194 new users',
    tag: 'Analytics',
    tagColor: 'blue',
  },
  {
    src: '/images/work-ga2.png',
    title: 'GA4 Reports Snapshot',
    desc: 'Top pages, traffic sources, avg. engagement 42s',
    tag: 'SEO',
    tagColor: 'teal',
  },
  {
    src: '/images/work-meta.png',
    title: 'Meta Business Suite',
    desc: 'FB + Instagram — 1.2K IG followers managed',
    tag: 'Meta Ads',
    tagColor: 'pink',
  },
  {
    src: '/images/work-instagram.png',
    title: '@freemind_consultancy',
    desc: '156 posts · 1,235 followers · Reels & content',
    tag: 'Instagram',
    tagColor: 'pink',
  },
  {
    src: '/images/work-linkedin.png',
    title: 'LinkedIn — Free Mind',
    desc: '597 followers · 138 search appearances · 158 impressions',
    tag: 'LinkedIn',
    tagColor: 'blue',
  },
  {
    src: '/images/work-crm.png',
    title: 'CRM Performance Dashboard',
    desc: 'Google Sheets CRM with lead funnel & monthly metrics',
    tag: 'CRM · Ops',
    tagColor: 'purple',
  },
  {
    src: '/images/work-mvp.png',
    title: 'AI Publisher Finder — MVP Plan',
    desc: 'Process map, financial model, 12-month go-to-market',
    tag: 'Product',
    tagColor: 'amber',
  },
  {
    src: '/images/work-koel.png',
    title: 'Koel AI Competitor Analysis',
    desc: '10+ competitors mapped — voice AI market research',
    tag: 'Research',
    tagColor: 'teal',
  },
]

const TAG_COLORS: Record<string, string> = {
  blue: 'border-blue-500/25 bg-blue-500/10 text-blue-300',
  teal: 'border-teal-500/25 bg-teal-500/10 text-teal-300',
  pink: 'border-pink-500/25 bg-pink-500/10 text-pink-300',
  purple: 'border-purple-500/25 bg-purple-500/10 text-purple-300',
  amber: 'border-amber-500/25 bg-amber-500/10 text-amber-300',
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function WorkShowcase() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="work-showcase" className="py-28 px-6 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Live Proof</span>
          <h2
            className="font-extrabold tracking-tight mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Real Work,{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-slate-400 mt-3 text-[0.97rem] max-w-md mx-auto">
            Actual screenshots from tools and platforms I manage daily — not just bullet points.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {ITEMS.map((w) => (
            <motion.div
              key={w.src}
              variants={item}
              className="bg-white/[0.025] border border-white/[0.07] rounded-xl overflow-hidden cursor-zoom-in group"
              whileHover={{ y: -7, borderColor: 'rgba(59,130,246,0.35)', boxShadow: '0 20px 56px rgba(0,0,0,0.5)' }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              onClick={() => setLightbox({ src: w.src, alt: w.title })}
            >
              <div className="relative h-[160px] overflow-hidden">
                <Image
                  src={w.src}
                  alt={w.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-semibold">Click to expand ↗</span>
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-bold text-[0.83rem] mb-0.5 leading-snug">{w.title}</h4>
                <p className="text-slate-400 text-[0.73rem] leading-relaxed mb-1.5">{w.desc}</p>
                <span className={`inline-block text-[0.67rem] font-semibold px-2 py-0.5 rounded-md border ${TAG_COLORS[w.tagColor]}`}>
                  {w.tag}
                </span>
              </div>
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
