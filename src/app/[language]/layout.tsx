import React, { cache } from 'react'
import { getStrapiClient } from '@/services/Strapi'
import { notFound } from 'next/navigation'
import Script from 'next/script'

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

  return <>
    <Script id="axeption-cookies">
      {`window.axeptioSettings = {
        clientId: "66c7043d437ae8dd9f5b9ea4",
        cookiesVersion: "netbuddies-fr-EU",
        googleConsentMode: {
          default: {
            analytics_storage: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            wait_for_update: 500
          }
        }
      };
       
      (function(d, s) {
        var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
        e.async = true; e.src = "//static.axept.io/sdk.js";
        t.parentNode.insertBefore(e, t);
      })(document, "script");`}
    </Script>
    {children}
  </>
}
