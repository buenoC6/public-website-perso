'use client'
import { ComponentBlocksBlocksHero as Block } from '@/services/GraphQL'
import { motion } from 'framer-motion'

interface ComponentBlocksBlocksHeroProps {
  block: Block
}

export function ComponentBlocksBlocksHero({
  block,
}: ComponentBlocksBlocksHeroProps) {
  return (
    <div className={'hero-block'}>
      <motion.div
        className={'image-container'}
        initial={{ opacity: 0, x: block.Disposition === 'right' ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src={block?.Media?.data[0]?.attributes?.url} />
      </motion.div>

      <motion.div
        className={'content-container'}
        initial={{ opacity: 0, x: block.Disposition === 'left' ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>{block.Headline}</h2>

        <p dangerouslySetInnerHTML={{ __html: block.Content }}></p>

        <div className={'button-container'}>
          {block.Buttons.map((button) => (
            <motion.button key={button.id}>{button.Label}</motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
