import { GraphQLClient } from 'graphql-request'
import { getConfiguration } from '../../src/helpers'
import { getSdk } from './GraphQL'

const {} = getConfiguration()

export const getStrapiClient = () => {
  const client = new GraphQLClient(
    new URL('/graphql', 'https://strapi.netbuddies.be').toString()
  )
  return getSdk(client)
}
