'use client'
import Link from 'next/link'
import { useState } from 'react'
import BurgerIcon from '@/components/common/BurgerIcon'

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
    <header>
      <Link href={'/'} style={{ display: 'flex' }}>
        <img
          style={{ marginRight: '5px' }}
          height={32}
          width={36}
          src={
            'https://logowik.com/content/uploads/images/free-letter-b1342.jpg'
          }
          alt={'ByteBuddies'}
        />
        <h1>ByteBuddies</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Services</Link>
          </li>
          <li>
            <Link href={'/'}>Références</Link>
          </li>
          <li>
            <Link href={'/'}>Tarifications</Link>
          </li>
          <li>
            <Link href={'/'}>Live demo</Link>
          </li>
        </ul>
      </nav>
      <button>Démarrez votre projet</button>
      <span className={'burger-menu'} onClick={toggleSlideout}>
        <BurgerIcon />
      </span>
    </header>
  )
}
