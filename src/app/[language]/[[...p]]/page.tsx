import { getStrapiClient } from '@/services/Strapi'
import { cache } from 'react'
import { languages } from '@/helpers'
import { BlockList } from '@/components/blocks/BlockList'

export type CmsPageProps = {
  params: {
    language: string
    p?: string[]
  }
}

const getPage = cache(async function getPage(locale: string, url: string) {
  const client = getStrapiClient()

  return (
    // @ts-ignore
    (await client.getPage({ locale: locale, filters: { Slug: { eq: url } } }))
      .pages.data[0]
  )
})

export default async function CmsPage({
  params: { language, p },
}: CmsPageProps) {
  const cmsP = p?.map((item) => item)

  const page = await getPage(language, '/' + (cmsP ? cmsP : ''))

  return (
    <>
      <main>
        <div style={{ width: '100%' }}>
          <BlockList blocks={page.attributes.Blocks} />
        </div>
      </main>
    </>
  )
}

export async function generateStaticParams() {
  const client = getStrapiClient()
  const getPagesList = async (language: string) =>
    (await client.getPages({ locale: language })).pages.data
  const dynamicRoutes: string[] = []

  for (const language of languages) {
    try {
      for (let page of await getPagesList(language)) {
        dynamicRoutes.push(language + page.attributes.Slug)
      }
    } catch (missingLanguage) {
      console.error('MissingLanguage', language, missingLanguage)
    }
  }

  return dynamicRoutes.map((url) => {
    const splittedUrl = url.split('/')
    const lang = splittedUrl.shift()
    return { language: lang, p: splittedUrl }
  })
}
