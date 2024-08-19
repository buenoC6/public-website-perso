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
          <Section key={index} id={index} primary={index % 2 === 0}>
            {renderComponent(block)}
          </Section>
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
