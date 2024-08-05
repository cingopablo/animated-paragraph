import { AnimatedParagraph } from '@/components/AnimatedParagraph/AnimatedParagraph'
import { AnimatedWord } from '@/components/AnimatedWord/AnimatedWord'

export default function Home() {
  return (
    <div className={'bg-black'}>
      <div className={'h-screen'} />
      <AnimatedParagraph value={'The quick brown fox jumps over the lazy dog'} />
      <div className={'h-screen'} />
      <AnimatedWord value={'The quick brown fox jumps over the lazy dog'} />
      <div className={'h-screen'} />
    </div>
  )
}
