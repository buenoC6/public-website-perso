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
        <img
          src={
            'https://images.unsplash.com/photo-1718136370125-3836f53f9709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        />
      </motion.div>

      <motion.div
        className={'content-container'}
        initial={{ opacity: 0, x: block.Disposition === 'left' ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>{block.Headline}</h2>

        <p>{block.Content}</p>

        <div className={'button-container'}>
          {block.Buttons.map((button) => (
            <motion.button key={button.id}>{button.Label}</motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
