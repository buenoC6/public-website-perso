'use client'
import { Section } from '@/components/Section'
import { Card } from '@chakra-ui/card'
import { Select } from '@chakra-ui/select'
import { Stack } from '@chakra-ui/react'
import LinkCard from '@/components/common/LinkCard'
import IconPerson from '@/components/icons/IconPerson'
import IconReload from '@/components/icons/IconReload'
import IconTachometerFast from '@/components/icons/IconFast'

export default function Home() {
  return (
    <main>
      <div style={{ width: '100%' }}>
        <Section primary={true} id={'home'}>
          <p
            className={'text-extra-light'}
            style={{ maxWidth: '600px', textAlign: 'center' }}
          >
            Décrivez nous votre besoin, nous vous proposerons une solution
            dévelopée sur mesure par une équipe de professionnels passionés.
          </p>
          <h2>Web, Desktop & Mobile</h2>
          <Card
            variant={'elevated'}
            borderRadius={20}
            borderTop={'8px solid #004e98'}
            shadow={'lg'}
            padding={7}
            gap={5}
            width={'100%'}
            maxWidth={'600px'}
          >
            <Stack spacing={5} pt={3}>
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
              <Select
                cursor={'pointer'}
                placeholder="Votre délais de livraison"
              >
                <option>- de 1 mois</option>
                <option>1 à 3 mois</option>
                <option>3 à 6 mois</option>
                <option>+ de 1 an</option>
              </Select>
            </Stack>
            <button>Démarrez votre projet</button>
          </Card>
        </Section>
        <Section primary={false} id={'services'}>
          <div className={'link-card-container'}>
            <ul>
              <li>
                <Card
                  variant={'elevated'}
                  borderTop={'8px solid #004e98'}
                  borderRadius={20}
                  shadow={'lg'}
                  padding={7}
                >
                  <h2>Nos services</h2>
                  <p>
                    Création graphique, mise en place de votre site web ou
                    devotre application mobile. Augmentation de votre présence
                    dans les résultats des moteurs de recherche.
                  </p>
                  <button>Démarrez votre projet</button>
                </Card>
              </li>
              <li>
                <LinkCard>
                  <h3>Site web</h3>
                  <p>
                    Création de site web sur mesure, site vitrine, site
                    e-commerce, marketplace, blog, etc.
                  </p>
                </LinkCard>
              </li>
              <li>
                <LinkCard>
                  <h3>Application mobile</h3>
                  <p>
                    {
                      "Création d'application mobile sur mesure, application mobile hybride, application mobile native, etc."
                    }
                  </p>
                </LinkCard>
              </li>
              <li>
                <LinkCard>
                  <h3>Référencement</h3>
                  <p>
                    Augmentation et/ou amélioration de votre présence dans les
                    résultats des moteurs de recherche, optimisation de votre
                    site web.
                  </p>
                </LinkCard>
              </li>
              <li>
                <LinkCard>
                  <h3>Marketing digital</h3>
                  <p>
                    {
                      'Création de campagnes publicitaires, gestion de vos réseaux sociaux, etc.'
                    }
                  </p>
                </LinkCard>
              </li>
              <li>
                <LinkCard>
                  <h3>Formation</h3>
                  <p>
                    {
                      "Formation à la création de site web, à l'utilisation de votre application mobile, etc."
                    }
                  </p>
                </LinkCard>
              </li>
            </ul>
          </div>
        </Section>
        <Section primary={true} id={'portfolio'}>
          <h2>
            Nous travaillons <span style={{ color: '#004e98' }}>ensemble</span>
          </h2>
          <div className={'link-card-container'}>
            <ul>
              <li>
                <Card
                  variant={'elevated'}
                  borderTop={'8px solid #004e98'}
                  borderRadius={20}
                  shadow={'lg'}
                  textAlign={'center'}
                  padding={7}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <IconPerson width={'48px'} heigth={'48px'} />
                  </div>
                  <h2>Communication</h2>
                  <p>
                    Création graphique, mise en place de votre site web ou
                    devotre application mobile. Augmentation de votre présence
                    dans les résultats des moteurs de recherche.
                  </p>
                </Card>
              </li>
              <li>
                <Card
                  variant={'elevated'}
                  borderTop={'8px solid #004e98'}
                  borderRadius={20}
                  shadow={'lg'}
                  textAlign={'center'}
                  padding={7}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <IconReload width={'48px'} heigth={'48px'} />
                  </div>
                  <h2>Méthode de travail agile</h2>
                  <p>
                    Création graphique, mise en place de votre site web ou
                    devotre application mobile. Augmentation de votre présence
                    dans les résultats des moteurs de recherche.
                  </p>
                </Card>
              </li>
              <li>
                <Card
                  variant={'elevated'}
                  borderTop={'8px solid #004e98'}
                  borderRadius={20}
                  shadow={'lg'}
                  padding={7}
                  textAlign={'center'}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <IconTachometerFast width={'48px'} heigth={'48px'} />
                  </div>
                  <h2>Technologies</h2>
                  <p>
                    Création graphique, mise en place de votre site web ou
                    devotre application mobile. Augmentation de votre présence
                    dans les résultats des moteurs de recherche.
                  </p>
                </Card>
              </li>
            </ul>
          </div>
        </Section>
        <Section primary={false} id={'portfolio'}>
          <h2>
            Des partenaires de{' '}
            <span style={{ color: '#004e98' }}>confiance</span>
          </h2>
        </Section>
        <Section primary={true} id={'portfolio'}>
          <h2>
            Une équipe <span style={{ color: '#004e98' }}>soudée</span>
          </h2>
        </Section>
      </div>
    </main>
  )
}
