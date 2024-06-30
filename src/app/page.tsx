'use client'
import { Section } from '@/components/Section'
import { Card } from '@chakra-ui/card'
import { Select } from '@chakra-ui/select'

export default function Home() {
  return (
    <main>
      <div className="page-container">
        <Section primary={true} id={'home'}>
          <p>
            Décrivez nous votre besoin, nous vous proposerons une solution sur
            mesure
          </p>
          <h1>Web, Desktop & Mobile</h1>
          <Card padding={10} marginTop={10}>
            <Select placeholder="Votre type d'application">
              <option>Application web / SaaS</option>
              <option>Application mobile</option>
              <option>Site e-commerce</option>
              <option>Marketplace</option>
              <option>Site vitrine</option>
              <option>Autre</option>
            </Select>
            <Select placeholder="Votre budget">
              <option>- de 5000€</option>
              <option>5000 - 10 000€</option>
              <option>20 000 - 50 000€</option>
              <option>+ de 50 000€</option>
              <option>Autre</option>
            </Select>
            <Select placeholder="Votre délais de livraison">
              <option>- de 1 mois</option>
              <option>1 à 3 mois</option>
              <option>3 à 6 mois</option>
              <option>+ de 1 an</option>
            </Select>
            <button>Démarrez votre projet</button>
          </Card>
        </Section>
        <Section primary={false} id={'services'}>
          <h1>Nos services</h1>
        </Section>
      </div>
    </main>
  )
}
