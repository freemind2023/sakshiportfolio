'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Ebook() {
  return (
    <section id="ebook" className="py-28 px-6 bg-[#0d0d18] text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Published Work</span>
          <h2
            className="font-extrabold tracking-tight mt-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            My{' '}
            <span className="bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent">
              Ebook
            </span>
          </h2>
        </motion.div>

        {/* Amber border card */}
        <motion.div
          className="amber-border gradient-border rounded-[24px] p-[2px] mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-[#0d0d18] rounded-[22px] p-10">
            {/* Book cover with float animation */}
            <motion.div
              className="max-w-[200px] mx-auto mb-8 rounded-xl overflow-hidden"
              style={{ boxShadow: '0 32px 72px rgba(0,0,0,0.7), 0 0 56px rgba(245,158,11,0.2)' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <Image
                src="/images/ebook-cover.png"
                alt="Bottleneck Brand Marketing by Sakshi G. Nivekar"
                width={300}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>

            <h3
              className="font-black tracking-tight mb-3"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 1.9rem)',
                background: 'linear-gradient(120deg, #f59e0b, #ef4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Bottleneck Brand Marketing
            </h3>

            <p className="text-slate-400 leading-relaxed mb-8 max-w-md mx-auto text-[0.97rem]">
              Diagnose the hidden blocks killing your growth — and build a strategy that flows. A
              no-fluff guide for founders and marketers who want to pinpoint friction in their brand
              and fix it with clarity and confidence.
            </p>

            <motion.a
              href="https://drive.google.com/file/d/1cq1zYp2gA1M_6c1h98aaDCT2f9jW6pks/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber inline-flex"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Free Ebook
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
