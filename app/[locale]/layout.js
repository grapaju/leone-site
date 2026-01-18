import { Raleway } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'
import { MobileOptimizer } from '@/components/MobileOptimizer'
import '../globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  
  const titles = {
    pt: 'Leone Pavan Empreendimentos | Imóveis de Alto Padrão em Balneário Camboriú',
    en: 'Leone Pavan Developments | Luxury Real Estate in Balneário Camboriú',
    es: 'Leone Pavan Emprendimientos | Inmuebles de Alto Estándar en Balneário Camboriú',
  }

  const descriptions = {
    pt: 'Especializada em empreendimentos de alto padrão em Balneário Camboriú/SC desde 2004. Qualidade, excelência e sofisticação em cada projeto.',
    en: 'Specialized in luxury developments in Balneário Camboriú/SC since 2004. Quality, excellence and sophistication in every project.',
    es: 'Especializada en emprendimientos de alto estándar en Balneário Camboriú/SC desde 2004. Calidad, excelencia y sofisticación en cada proyecto.',
  }

  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
    keywords: 'construtora, alto padrão, Balneário Camboriú, imóveis, empreendimentos, Leone Pavan, luxury, real estate',
    authors: [{ name: 'Leone Pavan Empreendimentos' }],
    openGraph: {
      title: titles[locale] || titles.pt,
      description: descriptions[locale] || descriptions.pt,
      type: 'website',
      locale: locale === 'pt' ? 'pt_BR' : locale === 'en' ? 'en_US' : 'es_ES',
    },
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  
  // Validar locale
  if (!locales.includes(locale)) {
    notFound()
  }

  // Carregar mensagens do idioma
  const messages = await getMessages()

  return (
    <html lang={locale} className={raleway.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <MobileOptimizer />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
