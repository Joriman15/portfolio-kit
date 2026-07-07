'use client'

import { motion, useScroll } from 'motion/react'

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-neutral-950 dark:bg-neutral-50"
      id="scroll-indicator"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
