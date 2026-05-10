'use client'

import { motion } from 'framer-motion'

const ENTRIES = [
  {
    company: 'Free Mind Consultancy',
    link: 'https://freemindconsult.com',
    role: 'Business Development & Operations Executive',
    period: 'June 2024 — Present',
    type: 'Full-time',
    color: 'purple',
    bullets: [
      'Manage Google Analytics 4 & Search Console — tracking 189+ active users, 1.3K+ events and traffic patterns to inform data-driven decisions',
      'Drive website optimisation, on-page SEO, and content updates to improve organic visibility and reduce bounce rate across all pages',
      'Plan and execute social media campaigns across Instagram (1.2K+ followers, 156 posts) and LinkedIn (597 followers); manage Meta Business Suite including ads and community inbox',
      'Research, evaluate, and integrate AI tools into business workflows to boost efficiency across research, content, and outreach operations',
    ],
  },
  {
    company: 'Wyncrest AI Pvt. Limited · Koel AI',
    link: 'https://www.koelai.com/',
    role: 'Market Research Analyst & Lead Management',
    period: 'November 2025 — Present',
    type: 'Freelance',
    color: 'teal',
    bullets: [
      'Conducted in-depth competitor analysis for Koel AI — a voice AI calling platform — mapping 10+ competitors across pricing, features, and strategic positioning for MVP planning',
      'Prepared structured research reports with financial models (Year-1 pre-revenue projections), 12-month operational plans, and market sizing data',
      'Designed a CRM lead pipeline in Google Sheets with a live performance dashboard tracking total leads, qualified leads, conversion funnels, and monthly metrics by source',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Experience</span>
          <h2
            className="font-extrabold tracking-tight mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Where I&apos;ve{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Built Things
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden md:block origin-top"
            style={{ background: 'linear-gradient(to bottom, #7c3aed, #3b82f6, #14b8a6)' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />

          <div className="flex flex-col gap-14">
            {ENTRIES.map((entry, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={entry.company} className="relative md:grid md:grid-cols-[1fr_56px_1fr] md:gap-0 flex flex-col">
                  {/* Left side (desktop) */}
                  {isLeft ? (
                    <motion.div
                      className="md:col-start-1 md:pr-8"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <TimelineCard entry={entry} />
                    </motion.div>
                  ) : (
                    <div className="hidden md:block md:col-start-1" />
                  )}

                  {/* Dot */}
                  <div className="hidden md:flex md:col-start-2 items-start justify-center pt-7">
                    <motion.div
                      className="w-4 h-4 rounded-full border-[3px] border-[#0a0a0f] z-10"
                      style={{ background: entry.color === 'purple' ? 'linear-gradient(135deg,#7c3aed,#3b82f6)' : 'linear-gradient(135deg,#14b8a6,#3b82f6)' }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.3 }}
                      whileInView2={{ boxShadow: '0 0 16px rgba(124,58,237,0.7)' }}
                    />
                  </div>

                  {/* Right side (desktop) */}
                  {!isLeft ? (
                    <motion.div
                      className="md:col-start-3 md:pl-8"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <TimelineCard entry={entry} />
                    </motion.div>
                  ) : (
                    <div className="hidden md:block md:col-start-3" />
                  )}

                  {/* Mobile: always show */}
                  <motion.div
                    className="md:hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <TimelineCard entry={entry} />
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ entry }: { entry: typeof ENTRIES[0] }) {
  return (
    <motion.div
      className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 cursor-default"
      whileHover={{ y: -6, borderColor: 'rgba(168,85,247,0.35)', boxShadow: '0 20px 56px rgba(0,0,0,0.4)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <p className="text-[0.72rem] font-bold uppercase tracking-widest text-purple-400 mb-1.5">
        {entry.company}
      </p>
      <h3 className="text-[1.1rem] font-bold mb-1">{entry.role}</h3>
      <p className="text-teal-400 text-[0.82rem] font-semibold mb-4">
        {entry.period} &nbsp;·&nbsp; {entry.type}
      </p>
      <ul className="flex flex-col gap-2.5">
        {entry.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 items-start text-slate-400 text-[0.87rem] leading-relaxed">
            <span className="text-purple-400 mt-[2px] shrink-0 text-[0.9rem]">▹</span>
            {b}
          </li>
        ))}
      </ul>
      <a
        href={entry.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-4 text-blue-400 text-[0.78rem] font-semibold hover:text-blue-300 transition-colors"
      >
        {entry.link.replace('https://', '')} ↗
      </a>
    </motion.div>
  )
}
