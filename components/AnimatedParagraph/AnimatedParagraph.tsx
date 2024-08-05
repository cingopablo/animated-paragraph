'use client'

import { motion, useScroll } from 'framer-motion'
import React from 'react'

type AnimatedParagraphProps = {
  value: string
}

export function AnimatedParagraph({ value }: AnimatedParagraphProps) {
  const ref = React.useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.3'],
  })

  return (
    <motion.p
      ref={ref}
      style={{ opacity: scrollYProgress }}
      className={'mx-auto max-w-5xl text-7xl font-semibold text-white'}>
      {value}
    </motion.p>
  )
}
