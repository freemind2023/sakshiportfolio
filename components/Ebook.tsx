'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Ebook() {
  return (
    <section id="ebook" className="relative py-28 px-6 overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Ambient glow blobs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label" style={{ borderColor: 'rgba(245,158,11,0.4)', background: 'rgba(245,158,11,0.1)', color: '#fbbf24' }}>
            Published Work
          </span>
          <h2
            className="font-extrabold tracking-tight mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(120deg, #f59e0b, #ef4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ebook
            </span>
          </h2>
        </motion.div>

        {/* Gradient border card */}
        <div className="amber-border gradient-border rounded-[28px] p-[2px]">
          <div
            className="rounded-[26px] px-8 py-12 md:px-16"
            style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1008 100%)' }}
          >
            <div className="grid md:grid-cols-[260px_1fr] gap-12 items-center">

              {/* Cover image — floating */}
              <motion.div
                className="mx-auto md:mx-0 w-[200px] md:w-full"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="relative"
                >
                  {/* Glow behind cover */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-2xl scale-90"
                    style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.4), rgba(239,68,68,0.3))' }}
                  />
                  <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(245,158,11,0.25)' }}>
                    <Image
                      src="/images/ebook-cover.png"
                      alt="Bottleneck Brand Marketing by Sakshi G. Nivekar"
                      width={320}
                      height={430}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-amber-400 text-[0.72rem] font-bold uppercase tracking-widest mb-3">
                  First Edition · Available Now · Free
                </p>

                <h3
                  className="font-black tracking-tight leading-tight mb-4"
                  style={{
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                    background: 'linear-gradient(120deg, #f59e0b, #ef4444, #f59e0b)',
                    backgroundSize: '200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Bottleneck Brand Marketing
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6 text-[0.97rem]">
                  Diagnose the hidden blocks killing your growth — and build a strategy that flows.
                  A no-fluff guide for founders and marketers who want to pinpoint friction in their
                  brand and fix it with clarity and confidence.
                </p>

                {/* Bullet points */}
                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    'Identify your brand\'s biggest growth bottleneck',
                    'Apply proven frameworks to unblock marketing flow',
                    'Build a content strategy that converts — not just impresses',
                  ].map((point, i) => (
                    <li key={i} className="flex gap-3 items-start text-slate-400 text-[0.9rem]">
                      <span className="text-amber-400 mt-[3px] shrink-0 text-[0.75rem]">&#9670;</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 flex-wrap">
                  <motion.a
                    href="https://drive.google.com/file/d/1cq1zYp2gA1M_6c1h98aaDCT2f9jW6pks/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-amber inline-flex"
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Read Now &#8599;
                  </motion.a>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-[0.83rem] font-semibold border border-amber-500/25 bg-amber-500/10 text-amber-300">
                    100% Free
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
