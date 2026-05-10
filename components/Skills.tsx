'use client'

import { motion } from 'framer-motion'

const CORE_SKILLS = [
  { label: 'Social Media Campaign Strategy', color: 'purple' },
  { label: 'Meta Ads & Business Suite', color: 'blue' },
  { label: 'Creative Content Writing', color: 'teal' },
  { label: 'Google Analytics', color: 'pink' },
  { label: 'Website Optimisation & SEO', color: 'amber' },
  { label: 'Lead Magnet & Funnel Creation', color: 'green' },
  { label: 'CRM Management', color: 'purple' },
  { label: 'Business Operations', color: 'blue' },
  { label: 'Client Coordination', color: 'teal' },
  { label: 'Canva & CorelDraw', color: 'pink' },
  { label: 'Google Workspace', color: 'amber' },
]

const AI_TOOLS = [
  {
    category: 'Research & Discovery',
    tools: ['Perplexity AI', 'Research Rabbit', 'Elicit AI', 'Consensus AI', 'Connected Papers', 'Scite Assistant'],
  },
  {
    category: 'Document Analysis',
    tools: ['ChatPDF Reader', 'Humata AI', 'Scholarcy', 'Genei AI'],
  },
  {
    category: 'Content & Strategy',
    tools: ['ChatGPT', 'Claude AI'],
  },
]

const PILL_CLASS: Record<string, string> = {
  purple: 'pill-purple',
  blue: 'pill-blue',
  teal: 'pill-teal',
  pink: 'pill-pink',
  amber: 'pill-amber',
  green: 'pill-green',
}

const pillContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}
const pillItem = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 380, damping: 22 } },
}

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#111127]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Skills & Tools</span>
          <h2
            className="font-extrabold tracking-tight mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            What I{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Bring
            </span>
          </h2>
        </motion.div>

        {/* Core Skills */}
        <div className="mt-10">
          <p className="text-[0.72rem] font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/[0.07]">
            Core Skills
          </p>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={pillContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {CORE_SKILLS.map((s) => (
              <motion.span
                key={s.label}
                variants={pillItem}
                className={`pill ${PILL_CLASS[s.color]}`}
                whileHover={{ scale: 1.08, y: -3 }}
              >
                {s.label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* AI Tools */}
        <div className="mt-12">
          <p className="text-[0.72rem] font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-white/[0.07]">
            AI Tools Arsenal
          </p>
          <motion.div
            className="grid md:grid-cols-3 gap-4"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {AI_TOOLS.map((cat) => (
              <motion.div
                key={cat.category}
                variants={cardItem}
                className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-5"
                whileHover={{ y: -5, borderColor: 'rgba(168,85,247,0.3)', boxShadow: '0 16px 40px rgba(0,0,0,0.35)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <p className="text-[0.72rem] font-bold text-purple-400 uppercase tracking-widest mb-3">
                  {cat.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg text-[0.79rem] font-medium border border-white/[0.07] bg-white/[0.04] text-slate-400 hover:border-purple-500/40 hover:text-purple-300 transition-colors cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
