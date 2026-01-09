'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/lib/navigation'
import { locales } from '@/i18n'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (newLocale) => {
    router.replace(pathname, { locale: newLocale })
  }

  const languages = {
    pt: 'PT',
    en: 'EN',
    es: 'ES',
  }

  return (
    <div className="flex items-center gap-1.5">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all uppercase tracking-wider ${
            locale === loc
              ? 'bg-gold/20 text-gold border border-gold/30'
              : 'text-light/60 hover:text-light hover:bg-white/5 border border-transparent'
          }`}
        >
          {languages[loc]}
        </button>
      ))}
    </div>
  )
}
