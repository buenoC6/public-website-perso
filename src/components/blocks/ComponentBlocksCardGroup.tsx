import { ComponentBlocksCardGroup as Block } from '@/services/GraphQL'
import { Card } from '@/components/common/Card'
import { FaBeer } from 'react-icons/fa'

interface ComponentBlocksCardGroupProps {
  block: Block
}

export function ComponentBlocksCardGroup({
  block,
}: ComponentBlocksCardGroupProps) {
  return (
    <div className={'card-group-block'}>
      <ul>
        {block.Card.map((card, index) => (
          <li key={card.id}>
            <Card>
              {card.Media?.data[0]?.attributes?.url && (
                <div className="image-container">
                  <img
                    style={{ width: '100%' }}
                    src={card.Media?.data[0]?.attributes?.url}
                  />
                </div>
              )}
              <h3>{card.Title}</h3>
              <p>{card.Content}</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
