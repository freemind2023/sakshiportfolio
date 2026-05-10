'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/[0.06] py-7 px-6 text-center">
      <motion.p
        className="text-slate-500 text-[0.82rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        © 2025{' '}
        <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent font-bold">
          Sakshi G. Nivekar
        </span>
        {' '}· Crafted with passion in Pune, Maharashtra
      </motion.p>
    </footer>
  )
}
