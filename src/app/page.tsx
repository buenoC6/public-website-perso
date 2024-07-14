'use client'
import { Section } from '@/components/Section'
import { Card } from '@chakra-ui/card'
import { Select } from '@chakra-ui/select'

export default function Home() {
  return (
    <main>
      <div style={{ width: '100%' }}>
        <Section primary={true} id={'home'}>
          <p className={'text-extra-light'}>
            Décrivez nous votre besoin, nous vous proposerons une solution sur
            mesure
          </p>
          <h2>Web, Desktop & Mobile</h2>
          <Card padding={7} gap={5} width={'100%'} maxWidth={'600px'}>
            <Select cursor={'pointer'} placeholder="Votre type d'application">
              <option>Application web / SaaS</option>
              <option>Application mobile</option>
              <option>Site e-commerce</option>
              <option>Marketplace</option>
              <option>Site vitrine</option>
              <option>Autre</option>
            </Select>
            <Select cursor={'pointer'} placeholder="Votre budget">
              <option>- de 5000€</option>
              <option>5000 - 10 000€</option>
              <option>20 000 - 50 000€</option>
              <option>+ de 50 000€</option>
              <option>Autre</option>
            </Select>
            <Select cursor={'pointer'} placeholder="Votre délais de livraison">
              <option>- de 1 mois</option>
              <option>1 à 3 mois</option>
              <option>3 à 6 mois</option>
              <option>+ de 1 an</option>
            </Select>
            <button>Démarrez votre projet</button>
          </Card>
        </Section>
        <Section primary={false} id={'services'}>
          <div className={'link-card-container'}>
            <ul>
              <li>
                <h2>Nos services</h2>
                <p>
                  Création graphique, mise en place de votre site web ou devotre
                  application mobile. Augmentation de votre présence dans les
                  résultats des moteurs de recherche.
                </p>
                <button>Démarrez votre projet</button>
              </li>
              <li>
                <h3>Site web</h3>
                <p>
                  Création de site web sur mesure, site vitrine, site
                  e-commerce, marketplace, blog, etc.
                </p>
              </li>
              <li>
                <div>
                  <h3>Application mobile</h3>
                  <p>
                    {
                      "Création d'application mobile sur mesure, application mobile hybride, application mobile native, etc."
                    }
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Référencement</h3>
                  <p>
                    Augmentation et/ou amélioration de votre présence dans les
                    résultats des moteurs de recherche, optimisation de votre
                    site web.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Marketing digital</h3>
                  <p>
                    {
                      'Création de campagnes publicitaires, gestion de vos réseaux sociaux, etc.'
                    }
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Formation</h3>
                  <p>
                    {
                      "Formation à la création de site web, à l'utilisation de votre application mobile, etc."
                    }
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Section>
        <Section primary={true} id={'portfolio'}>
          coucou
        </Section>
        <Section primary={false} id={'portfolio'}>
          coucou
        </Section>
      </div>
    </main>
  )
}
