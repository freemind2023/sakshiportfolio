'use client'

import { useState, useEffect } from 'react'

export function useTyping(strings: string[], typingSpeed = 85, deletingSpeed = 45, pauseTime = 2200) {
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const cur = strings[idx]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (text.length < cur.length) {
        timer = setTimeout(() => setText(cur.slice(0, text.length + 1)), typingSpeed)
      } else {
        timer = setTimeout(() => setDeleting(true), pauseTime)
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed)
      } else {
        setDeleting(false)
        setIdx((prev) => (prev + 1) % strings.length)
      }
    }

    return () => clearTimeout(timer)
  }, [text, deleting, idx, strings, typingSpeed, deletingSpeed, pauseTime])

  return text
}
