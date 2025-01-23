'use client'
import { Section } from '@/components/Section'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{ display: 'grid' }}>
      <div
        style={{
          padding: '120px 30px;',
          backgroundColor: '#F3F4F6',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <h2 style={{ marginBottom: 50 }}>Faites le premier pas</h2>
          <textarea
            style={{
              width: '100%',
              fontSize: 28,
              color: 'rgba(0,0,0,0.25)',
              padding: '15px 30px',
              fontFamily: 'Poppins',
              border: 'none',
              borderRadius: 20,
              height: 250,
              marginBottom: 50,
            }}
            placeholder={'Décrivez-nous votre projet'}
          ></textarea>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 50,
              height: 70,
            }}
          >
            <input
              style={{
                width: '100%',
                fontSize: 28,
                color: 'rgba(0,0,0,0.25)',
                padding: '15px 30px',
                fontFamily: 'Poppins',
                border: 'none',
                borderRadius: 20,
              }}
              placeholder={'Email *'}
            />{' '}
            <button
              style={{
                background: 'black',
                backgroundColor: 'black',
                borderRadius: 15,
                fontSize: 28,
                fontWeight: 300,
                padding: '7px 49px',
                minWidth: 250,
              }}
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>
      <SvgWaves />
      <div
        style={{
          color: 'black',
          padding: '20px',
          margin: '0px',
          fontSize: 20,
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '30px',
            flexWrap: 'wrap',
            padding: 165,
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              gap: 10,
            }}
          >
            <li
              style={{
                color: '#004E98',
                marginBottom: 10,
                fontSize: 24,
                lineHeight: '36px',
              }}
            >
              Product
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Application web
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Application mobile
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              UX/UI design
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Big data
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Infrastructure as code
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Business intelligence
            </li>
          </ul>
          <ul
            style={{
              listStyle: 'none',
            }}
          >
            <li
              style={{
                color: '#004E98',
                marginBottom: 10,
                fontSize: 24,
                lineHeight: '36px',
              }}
            >
              Clients
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Médecins du monde
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              MonBo Réseau
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Blockus
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              ...
            </li>
          </ul>
          <ul
            style={{
              listStyle: 'none',
            }}
          >
            <li
              style={{
                color: '#004E98',
                marginBottom: 10,
                fontSize: 24,
                lineHeight: '36px',
              }}
            >
              Demande
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Contact
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Partenariat
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Devis
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Démonstration
            </li>
          </ul>
          <ul
            style={{
              listStyle: 'none',
            }}
          >
            <li
              style={{
                color: '#004E98',
                marginBottom: 10,
                fontSize: 24,
                lineHeight: '36px',
              }}
            >
              Pages
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Produits
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Références
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Equipe
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Tarifs
            </li>
            <li
              style={{
                marginBottom: 10,
                lineHeight: '30px',
              }}
            >
              Contact
            </li>
          </ul>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '30px 0px',
          }}
        >
          <Link
            href={'/background.png'}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img height={26} src={'/background_black.png'} alt={'NetBuddies'} />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                marginLeft: '15px',
                color: 'black',
                fontSize: '24px',
                fontWeight: '400',
              }}
            >
              NetBuddies
            </motion.h1>
          </Link>
        </div>
      </div>
    </footer>
  )
}

const SvgWaves = () => (
  <svg
    id="wave"
    style={{ transform: 'rotate(180deg)', transition: '0.3' }}
    viewBox="0 0 1440 170"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="#F3F4F6" offset="0%"></stop>
        <stop stop-color="#F3F4F6" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path
      style={{ transform: 'translate(0, 0px)', opacity: '1' }}
      fill="url(#sw-gradient-0)"
      d="M0,68L30,73.7C60,79,120,91,180,79.3C240,68,300,34,360,19.8C420,6,480,11,540,34C600,57,660,96,720,119C780,142,840,147,900,138.8C960,130,1020,108,1080,87.8C1140,68,1200,51,1260,39.7C1320,28,1380,23,1440,28.3C1500,34,1560,51,1620,56.7C1680,62,1740,57,1800,70.8C1860,85,1920,119,1980,110.5C2040,102,2100,51,2160,48.2C2220,45,2280,91,2340,107.7C2400,125,2460,113,2520,104.8C2580,96,2640,91,2700,90.7C2760,91,2820,96,2880,104.8C2940,113,3000,125,3060,107.7C3120,91,3180,45,3240,45.3C3300,45,3360,91,3420,104.8C3480,119,3540,102,3600,85C3660,68,3720,51,3780,39.7C3840,28,3900,23,3960,22.7C4020,23,4080,28,4140,45.3C4200,62,4260,91,4290,104.8L4320,119L4320,170L4290,170C4260,170,4200,170,4140,170C4080,170,4020,170,3960,170C3900,170,3840,170,3780,170C3720,170,3660,170,3600,170C3540,170,3480,170,3420,170C3360,170,3300,170,3240,170C3180,170,3120,170,3060,170C3000,170,2940,170,2880,170C2820,170,2760,170,2700,170C2640,170,2580,170,2520,170C2460,170,2400,170,2340,170C2280,170,2220,170,2160,170C2100,170,2040,170,1980,170C1920,170,1860,170,1800,170C1740,170,1680,170,1620,170C1560,170,1500,170,1440,170C1380,170,1320,170,1260,170C1200,170,1140,170,1080,170C1020,170,960,170,900,170C840,170,780,170,720,170C660,170,600,170,540,170C480,170,420,170,360,170C300,170,240,170,180,170C120,170,60,170,30,170L0,170Z"
    ></path>
  </svg>
)
