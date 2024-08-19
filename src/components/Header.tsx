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
      <Link href={'/'} style={{ display: 'flex', alignItems: 'center' }}>
        <img
          height={30}
          width={44}
          src={
            'https://logowik.com/content/uploads/images/free-letter-b1342.jpg'
          }
          alt={'ByteBuddies'}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ marginLeft: '10px', fontSize: '1.5rem', color: '#333' }}
        >
          ByteBuddies
        </motion.h1>
      </Link>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ul>
          {['Services', 'Références', 'Tarifications', 'Live demo'].map(
            (item, index) => (
              <motion.li key={item} whileTap={{ scale: 0.95 }}>
                <Link href={'/'}>{item}</Link>
              </motion.li>
            )
          )}
        </ul>
      </motion.nav>

      <motion.button
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
        Démarrez votre projet
      </motion.button>

      <motion.span
        className={'burger-menu'}
        onClick={toggleSlideout}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
        whileTap={{ scale: 1.1 }}
        style={{ cursor: 'pointer', height: '37px' }}
      >
        <BurgerIcon />
      </motion.span>

      {/* Animated Slideout Menu */}
      {/*{visibility && (*/}
      {/*  <motion.div*/}
      {/*    initial={{ x: '100%' }}*/}
      {/*    animate={{ x: 0 }}*/}
      {/*    exit={{ x: '100%' }}*/}
      {/*    transition={{ type: 'spring', stiffness: 300, damping: 30 }}*/}
      {/*    style={{*/}
      {/*      position: 'fixed',*/}
      {/*      top: 0,*/}
      {/*      right: 0,*/}
      {/*      height: '100vh',*/}
      {/*      width: '300px',*/}
      {/*      backgroundColor: '#fff',*/}
      {/*      boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',*/}
      {/*      padding: '20px',*/}
      {/*      zIndex: 1001,*/}
      {/*      display: 'flex',*/}
      {/*      flexDirection: 'column',*/}
      {/*      justifyContent: 'center',*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <motion.ul*/}
      {/*      initial={{ opacity: 0 }}*/}
      {/*      animate={{ opacity: 1 }}*/}
      {/*      transition={{ delay: 0.2 }}*/}
      {/*      style={{ listStyle: 'none', padding: 0 }}*/}
      {/*    >*/}
      {/*      {['Services', 'Références', 'Tarifications', 'Live demo'].map(*/}
      {/*        (item) => (*/}
      {/*          <motion.li*/}
      {/*            key={item}*/}
      {/*            whileHover={{ scale: 1.1 }}*/}
      {/*            whileTap={{ scale: 0.95 }}*/}
      {/*            style={{ margin: '15px 0' }}*/}
      {/*          >*/}
      {/*            <Link href={'/'}>{item}</Link>*/}
      {/*          </motion.li>*/}
      {/*        )*/}
      {/*      )}*/}
      {/*    </motion.ul>*/}
      {/*  </motion.div>*/}
      {/*)}*/}
    </motion.header>
  )
}
