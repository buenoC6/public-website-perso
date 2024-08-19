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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
      }}
    >
      {/* Image Section */}
      <motion.div
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: '20px',
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          style={{
            width: '100%',
            maxWidth: '600px',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
          src={
            'https://images.unsplash.com/photo-1718136370125-3836f53f9709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt={block.Media.data[0].attributes.name}
        />
      </motion.div>

      {/* Text and Buttons Section */}
      <motion.div
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '20px',
          textAlign: 'left',
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            margin: '0 0 20px',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          {block.Headline}
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            margin: '0 0 30px',
            color: '#666',
          }}
        >
          {block.Content}
        </p>

        <div style={{ display: 'flex', gap: '15px' }}>
          {block.Buttons.map((button) => (
            <motion.button
              key={button.id}
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                background: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              whileHover={{ scale: 1.05, backgroundColor: '#0056b3' }}
            >
              {button.Label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
