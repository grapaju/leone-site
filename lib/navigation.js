import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { locales, defaultLocale } from '@/i18n'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix: 'as-needed' })

// Função helper para construir URLs com locale
export function getLocalizedPath(path, locale) {
  if (locale === defaultLocale) {
    return path
  }
  return `/${locale}${path}`
}

// Função para obter o locale atual
export function getCurrentLocale() {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname
    const locale = locales.find((l) => path.startsWith(`/${l}/`) || path === `/${l}`)
    return locale || defaultLocale
  }
  return defaultLocale
}
