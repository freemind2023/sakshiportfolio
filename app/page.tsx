'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import WorkShowcase from '@/components/WorkShowcase'
import Project from '@/components/Project'
import Ebook from '@/components/Ebook'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <main>
      <AnimatePresence>
        {showBanner && (
          <AnnouncementBanner onDismiss={() => setShowBanner(false)} />
        )}
      </AnimatePresence>
      <Navbar hasBanner={showBanner} />
      <Hero />
      <About />
      <Experience />
      <WorkShowcase />
      <Project />
      <Ebook />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
