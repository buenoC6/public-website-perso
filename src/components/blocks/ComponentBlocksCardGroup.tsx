'use client'
import { ComponentBlocksCardGroup as Block } from '@/services/GraphQL'
import { Card } from '@/components/common/Card'
import { motion } from 'framer-motion'

interface ComponentBlocksCardGroupProps {
  block: Block
}

export function ComponentBlocksCardGroup({
  block,
}: ComponentBlocksCardGroupProps) {
  return (
    <div className={'card-group-block'}>
      <ul>
        {block.Card.map((card, index) => (
          <motion.li
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Applique un délai pour un effet de cascade
          >
            <Card>
              {card.Media?.data[0]?.attributes?.url && (
                <div className="image-container">
                  <img
                    style={{ width: '100%' }}
                    src={card.Media?.data[0]?.attributes?.url}
                  />
                </div>
              )}
              <h3>{card.Title}</h3>
              <p>{card.Content}</p>
            </Card>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
