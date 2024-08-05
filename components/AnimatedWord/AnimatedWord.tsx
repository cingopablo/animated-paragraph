'use client'

import React from 'react'
import { MotionValue, useScroll, useTransform, motion } from 'framer-motion'

type AnimatedWordProps = {
  value: string
}

export function AnimatedWord({ value }: AnimatedWordProps) {
  const ref = React.useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.25'],
  })

  const words = value.toString().split(' ')

  return (
    <p ref={ref} className={'mx-auto flex w-fit max-w-5xl flex-wrap text-7xl font-semibold text-white'}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} range={[start, end]} scrollYProgress={scrollYProgress}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

type WordProps = {
  children: string
  range: [number, number]
  scrollYProgress: MotionValue<number>
}

function Word({ children, range, scrollYProgress }: WordProps) {
  const opacity = useTransform(scrollYProgress, range, [0, 1])

  return (
    <span className={'relative mr-2 text-pretty leading-none'}>
      <span className={'absolute opacity-20'}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}
