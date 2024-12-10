'use client'
import { ComponentBlocksBlocksHero as Block } from '@/services/GraphQL'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'

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
        style={{
          backgroundImage: `url(${block?.Media?.data[0]?.attributes?.url})`,
        }}
      >
        <div
          style={{
            paddingInline: '85px',
            paddingTop: '200px',
          }}
        >
          <h1 style={{ marginBottom: 85 }} className={'title'}>
            PENSER VOTRE OUTIL NOUS LE REALISONS
          </h1>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 400,
              fontSize: 24,
              padding: '15px 30px',
            }}
            className={'outline'}
          >
            Demander une démo
          </button>
        </div>
      </motion.div>
    </div>
  )
}
