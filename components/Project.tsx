'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Project() {
  return (
    <section id="project" className="py-28 px-6 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Key Project</span>
          <h2
            className="font-extrabold tracking-tight mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
        </motion.div>

        {/* Gradient border card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-border rounded-[24px] p-[2px]"
        >
          <div className="bg-[#0a0a0f] rounded-[22px] p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-widest border border-teal-500/30 bg-teal-500/10 text-teal-300 mb-4">
                AI Research Tool
              </span>
              <h3 className="text-[1.9rem] font-black tracking-tight mb-1 leading-tight">
                AI Publisher Finder Tool
              </h3>
              <p className="text-purple-400 text-[0.87rem] font-semibold mb-6">
                Free Mind Consultancy &nbsp;·&nbsp; freemindconsult.com
              </p>

              <ul className="flex flex-col gap-4 mb-8">
                {[
                  'Sourced and structured 1,000+ publisher data points across global markets to train the AI model\'s author-publisher matching algorithm',
                  'Conducted comprehensive market research for the MVP — analysing publishing landscape trends, author pain points, pricing models, and competitive gaps',
                  'Co-developed the MVP plan including process mapping, Year-1 financial projections, 12-month operational roadmap, and performance marketing strategy',
                ].map((point, i) => (
                  <li key={i} className="flex gap-3 items-start text-slate-400 text-[0.92rem] leading-relaxed">
                    <span className="text-teal-400 mt-[4px] shrink-0 text-[0.72rem]">✦</span>
                    {point}
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://www.freemindconsult.com/ai-publisher-finder.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Visit Project ↗
              </motion.a>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-xl overflow-hidden border border-white/[0.07] shadow-2xl">
                <Image
                  src="/images/work-mvp.png"
                  alt="AI Publisher Finder MVP Planning"
                  width={560}
                  height={360}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
