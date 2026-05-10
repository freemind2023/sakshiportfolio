'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 } },
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#0d0d18]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[280px_1fr] gap-16 items-center">

          {/* Photo column */}
          <motion.div
            className="flex flex-col items-center gap-5"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Ring */}
            <div
              className="p-[3px] rounded-full animate-gradient-flow"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #3b82f6, #14b8a6, #7c3aed)',
                backgroundSize: '300% 300%',
              }}
            >
              <div className="w-[220px] h-[220px] rounded-full overflow-hidden bg-[#1a1a2e]">
                <Image
                  src="/images/profile.png"
                  alt="Sakshi G. Nivekar"
                  width={220}
                  height={220}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Availability */}
            <div className="flex gap-2 flex-wrap justify-center">
              {['Open to Remote', 'Freelance'].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-teal-500/30 bg-teal-500/10 text-teal-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="section-label">About Me</span>
            <h2
              className="font-extrabold tracking-tight mt-3 mb-5"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              Turning{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Strategy into Results
              </span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-4 text-[0.97rem]">
              I&apos;m a Business Development &amp; Operations Executive who thrives at the intersection
              of creative marketing and data-driven strategy. At{' '}
              <span className="text-slate-200 font-semibold">Free Mind Consultancy</span>, I manage
              the full digital stack — Google Analytics 4, SEO, social media campaigns, Meta Business
              Suite, and AI tool integration.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4 text-[0.97rem]">
              I also freelance with{' '}
              <span className="text-slate-200 font-semibold">Wyncrest AI Pvt. Limited</span> on
              competitor research and CRM pipeline management. And I&apos;ve authored{' '}
              <em className="text-amber-400">Bottleneck Brand Marketing</em> — a practical ebook for
              founders who want to unblock their brand growth.
            </p>

            <div
              className="border-l-[3px] border-teal-500 pl-4 py-2 bg-teal-500/[0.07] rounded-r-xl mb-5 text-teal-300 text-[0.92rem] italic font-medium"
            >
              Goal: Grow into a strategic leadership role where AI fluency, creative thinking, and
              business operations intersect to drive measurable growth.
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Languages</p>
            <div className="flex gap-2 flex-wrap">
              {['Marathi', 'Hindi', 'English'].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-full text-xs font-semibold border border-blue-500/30 bg-blue-500/10 text-blue-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
