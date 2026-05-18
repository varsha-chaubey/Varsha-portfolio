"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Props = {
  text: string | string[]
  className?: string
  delay?: number
}

export default function TypographyAnimation({
  text,
  className,
  delay = 0,
}: Props) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const texts = Array.isArray(text) ? text.map(String) : [String(text)]
  const typingSpeed = 90
  const deletingSpeed = 45
  const pauseTime = 1400

  useEffect(() => {
    // Delay initial start
    if (!isReady && delay > 0) {
      const startTimeout = setTimeout(() => setIsReady(true), delay * 1000)
      return () => clearTimeout(startTimeout)
    }
    if (!isReady) setIsReady(true)
  }, [delay, isReady])

  useEffect(() => {
    if (!isReady) return

    const current = texts[textIndex]
    const displayed = current.substring(0, charIndex)
    setDisplayText(displayed)

    let timeoutId: NodeJS.Timeout

    if (!isDeleting && charIndex < current.length) {
      // Typing phase
      timeoutId = setTimeout(() => {
        setCharIndex((prev) => prev + 1)
      }, typingSpeed + Math.random() * 40)
    } else if (isDeleting && charIndex > 0) {
      // Deleting phase
      timeoutId = setTimeout(() => {
        setCharIndex((prev) => prev - 1)
      }, deletingSpeed)
    } else {
      // Toggle between typing and deleting
      if (!isDeleting) {
        // Just finished typing, now delete
        timeoutId = setTimeout(() => {
          setIsDeleting(true)
        }, pauseTime)
      } else {
        // Just finished deleting, move to next text
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [isReady, charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <div className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </div>
  )
}
  

