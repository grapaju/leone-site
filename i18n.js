import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Idiomas suportados
export const locales = ['pt', 'en', 'es']
export const defaultLocale = 'pt'

export default getRequestConfig(async ({ requestLocale }) => {
  // Aguardar e validar o locale
  let locale = await requestLocale
  
  // Validar que o locale está na lista de idiomas suportados
  if (!locale || !locales.includes(locale)) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  }
})
