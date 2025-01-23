'use client'
import Link from 'next/link'
import { useState } from 'react'
import BurgerIcon from '@/components/common/BurgerIcon'
import { motion } from 'framer-motion'

export function Header() {
  const [visibility, setVisibility] = useState<boolean>(false)

  const toggleSlideout = () => {
    if (visibility) {
      // @ts-ignore
      document.getElementById('reverse').beginElement()
    } else {
      // @ts-ignore
      document.getElementById('start').beginElement()
    }
    setVisibility(!visibility)
  }
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={'/background.png'}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img height={30} src={'/background.png'} alt={'NetBuddies'} />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ marginLeft: '10px', color: 'white' }}
        >
          NetBuddies
        </motion.h1>
      </Link>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ul>
          {['Produits', 'Références', 'Equipe', 'Tarifs'].map((item, index) => (
            <motion.li key={item}>
              <Link href={'/'}>{item}</Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <motion.button className={'outline'}>Demander une démo</motion.button>

      <motion.span
        className={'burger-menu'}
        onClick={toggleSlideout}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
        whileTap={{ scale: 1.1 }}
        style={{ cursor: 'pointer' }}
      >
        <BurgerIcon />
      </motion.span>
    </motion.header>
  )
}
