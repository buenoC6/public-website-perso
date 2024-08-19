import React, { cache } from 'react'
import { getStrapiClient } from '@/services/Strapi'
import { notFound } from 'next/navigation'

const getPage = cache(async function getPage(locale: string, url: string) {
  const client = getStrapiClient()
  return await client.getPages()
})

interface LanguagePageProps {
  params: {
    language: string
  }
}

export default async function LanguageLayout({
  children,
  params: { language },
}: LanguagePageProps & { children: React.ReactNode }) {
  const { pages } = await getPage(language, `/`)

  if (!pages.data || pages.data.length < 1) notFound()

  return <>{children}</>
}
