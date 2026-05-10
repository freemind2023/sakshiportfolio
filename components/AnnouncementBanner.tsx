'use client'

import { motion } from 'framer-motion'

interface Props {
  onDismiss: () => void
}

export default function AnnouncementBanner({ onDismiss }: Props) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[1002] h-11 flex items-center justify-center overflow-hidden select-none"
      initial={{ y: -44 }}
      animate={{ y: 0 }}
      exit={{ y: -44 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg,#92400e,#b45309,#f59e0b,#ef4444,#f59e0b,#b45309,#92400e)',
          backgroundSize: '300% 100%',
          animation: 'banner-grad 4s ease infinite',
        }}
      />

      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ animation: 'shimmer-sweep 2.8s ease-in-out infinite' }}
      >
        <div
          className="absolute inset-y-0 w-24"
          style={{
            background:
              'linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2.5 text-white pr-8">
        <span className="font-bold text-[0.78rem] sm:text-sm tracking-wide">
          <span className="hidden sm:inline text-amber-100 font-medium mr-1">
            Proud to announce —
          </span>
          <span className="text-white font-extrabold">Bottleneck Brand Marketing</span>
          <span className="hidden sm:inline text-amber-100 font-medium ml-1">is live!</span>
        </span>

        <a
          href="https://drive.google.com/file/d/1cq1zYp2gA1M_6c1h98aaDCT2f9jW6pks/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="ml-1 px-3 py-0.5 rounded-full bg-white text-amber-700 text-[0.72rem] sm:text-xs font-black whitespace-nowrap hover:bg-amber-50 transition-colors shadow-md"
        >
          Read Free →
        </a>
      </div>

      {/* Dismiss */}
      <button
        onClick={onDismiss}
        aria-label="Dismiss"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-all text-[0.7rem] font-bold"
      >
        ✕
      </button>
    </motion.div>
  )
}
