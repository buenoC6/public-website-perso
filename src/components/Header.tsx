import Link from 'next/link'
import Image from 'next/image'

export function Header() {
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
      <div>
        <button>Démarrez votre projet</button>
      </div>
    </header>
  )
}
