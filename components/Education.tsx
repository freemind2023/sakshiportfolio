'use client'

import { motion } from 'framer-motion'

const COURSEWORK = [
  { label: 'Business Management', color: 'purple' },
  { label: 'Marketing Principles', color: 'blue' },
  { label: 'Financial Accounting', color: 'teal' },
  { label: 'Economics', color: 'pink' },
]

const PILL: Record<string, string> = {
  purple: 'pill pill-purple',
  blue: 'pill pill-blue',
  teal: 'pill pill-teal',
  pink: 'pill pill-pink',
}

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-[#0d0d18] text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Education</span>
          <h2
            className="font-extrabold tracking-tight mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Academic{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Foundation
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-10 max-w-xl mx-auto bg-white/[0.025] border border-white/[0.07] rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, borderColor: 'rgba(59,130,246,0.3)', boxShadow: '0 20px 56px rgba(0,0,0,0.4)' }}
        >
          <h3 className="text-xl font-black tracking-tight mb-1">
            Bachelor of Commerce (B.Com) — Pursuing
          </h3>
          <p className="text-blue-400 font-semibold text-[0.97rem] mb-1.5">
            Garware College of Commerce, Pune
          </p>
          <p className="text-slate-400 text-[0.88rem] mb-6">
            June 2024 — June 2027 (Expected)
          </p>

          <p className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-500 mb-3">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {COURSEWORK.map((c, i) => (
              <motion.span
                key={c.label}
                className={PILL[c.color]}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 380, damping: 22, delay: i * 0.07 }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {c.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
