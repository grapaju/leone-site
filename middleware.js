import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n'

export default createMiddleware({
  // Idiomas suportados
  locales,
  
  // Idioma padrão
  defaultLocale,
  
  // Não adicionar prefixo para o idioma padrão (pt)
  localePrefix: 'as-needed',
  
  // Detectar idioma do navegador
  localeDetection: true
})

export const config = {
  // Matcher ignora _next, api, e arquivos estáticos
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
