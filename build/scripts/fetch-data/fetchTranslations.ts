import { getStrapiClient } from '@/services/Strapi'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function fetchLanguages() {
  console.info('Fetching Translations...')
  await buildCmsPageByCulture()
}

async function buildCmsPageByCulture() {
  const client = getStrapiClient()

  const languages = (await client.getLocales()).i18NLocales.data.map(
    (language) => language.attributes.code
  )

  await writeFile(
    join(__dirname, `../../static/languages.json`),
    JSON.stringify(languages),
    { encoding: 'utf8' }
  )
}
