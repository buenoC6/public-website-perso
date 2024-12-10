import { GetPageQuery } from '@/services/GraphQL'
import React from 'react'
import { ComponentBlocksBlocksHero } from '@/components/blocks/ComponentBlocksBlocksHero'
import { ComponentBlocksCardGroup } from '@/components/blocks/ComponentBlocksCardGroup'
import { Section } from '@/components/Section'

interface BlockListProps {
  blocks: GetPageQuery['pages']['data'][0]['attributes']['Blocks']
}

export function BlockList({ blocks }: BlockListProps) {
  return (
    <>
      {blocks.map((block, index) => {
        return (
          <>
            {block.__typename !== 'ComponentBlocksBlocksHero' ? (
              <>
                <Section key={index} id={index} primary={true}>
                  {renderComponent(block)}
                </Section>
              </>
            ) : (
              <>
                {renderComponent(block)}
                <Section id={'content'} primary={true}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 120,
                      color: '#004E98',
                    }}
                  >
                    <ul
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 30,
                        listStyle: 'none',
                        color: 'black',
                      }}
                    >
                      <li
                        style={{
                          padding: '5px 20px',
                          border: '1px solid black',
                          borderRadius: 50,
                          lineHeight: '30px',
                          fontSize: '20px',
                        }}
                      >
                        Web & mobile
                      </li>
                      <li
                        style={{
                          padding: '5px 20px',
                          border: '1px solid black',
                          borderRadius: 50,
                          lineHeight: '30px',
                          fontSize: '20px',
                        }}
                      >
                        Sur mesure
                      </li>
                      <li
                        style={{
                          padding: '5px 20px',
                          border: '1px solid black',
                          borderRadius: 50,
                          lineHeight: '30px',
                          fontSize: '20px',
                        }}
                      >
                        Big data
                      </li>
                      <li
                        style={{
                          padding: '5px 20px',
                          border: '1px solid black',
                          borderRadius: 50,
                          lineHeight: '30px',
                          fontSize: '20px',
                        }}
                      >
                        Team experience
                      </li>
                    </ul>
                    <div
                      style={{
                        fontSize: 38,
                        fontWeight: '600',
                        lineHeight: '60px',
                      }}
                    >
                      Nous sommes forts d’une experience dans le web comme le
                      mobile sur tout type de technologie
                    </div>
                    <div style={{ display: 'flex', gap: 50 }}>
                      <img
                        src={
                          'https://ik.imagekit.io/udetjtab7/Frame%2018.png?updatedAt=1733863630812'
                        }
                      />
                      <div>
                        <p
                          style={{
                            color: '#004E98',
                            fontSize: 24,
                            lineHeight: '36px',
                          }}
                        >
                          <b>Netbuddies</b> est une entreprise I.T. spécialisée
                          dans le domaine du web, du mobile et du traitement de
                          données.
                        </p>
                        <p
                          style={{
                            color: '#004E98',
                            fontSize: 24,
                            lineHeight: '36px',
                          }}
                        >
                          Nous proposons des <b>solutions sur mesure</b>, de la{' '}
                          <b>gestion de donnée</b> accompagnée,{' '}
                          <b>des interfaces fluides et intuitives.</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </Section>
              </>
            )}
          </>
        )
      })}
    </>
  )
}

const componentMap = {
  ComponentBlocksBlocksHero: ComponentBlocksBlocksHero,
  ComponentBlocksCardGroup: ComponentBlocksCardGroup,
}

function renderComponent(
  block: GetPageQuery['pages']['data'][0]['attributes']['Blocks'][0]
) {
  if (!block.__typename || block.__typename === 'Error') {
    return null
  }

  const Component = componentMap[block.__typename] ?? (() => null)

  // @ts-ignore
  return <Component block={block} />
}
