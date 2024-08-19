import getConfig from 'next/config'
import locales from '../../build/static/languages.json'

export interface Configuration {
  isDev: boolean
  isPreview: boolean
  isStatic: boolean
  isExport: boolean
  directusCmsBaseUrl: string
  domain: string
  apiBaseUrl: string
  jwt: {
    backendIssuer: string
    frontendIssuer: string
    secret: string
  }
}

export const languages: readonly string[] = locales

export function getConfiguration(): Configuration {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig() ?? {}
  return {
    ...publicRuntimeConfig,
    ...serverRuntimeConfig,
    directusCmsBaseUrl: 'https://directus.alexianmoins.com',
  }
}
