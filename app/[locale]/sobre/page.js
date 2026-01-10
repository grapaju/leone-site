import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Header } from '@/components/Header'
import { HeroAbout } from '@/components/AboutPage/HeroAbout'
import { IntroSection } from '@/components/AboutPage/IntroSection'
import { HistorySection } from '@/components/AboutPage/HistorySection'
import { ValuesSection } from '@/components/AboutPage/ValuesSection'
import { DifferentialSection } from '@/components/AboutPage/DifferentialSection'
import { ClosingSection } from '@/components/AboutPage/ClosingSection'
import { Footer } from '@/components/Footer'

export default async function AboutPage({ params }) {
  const { locale } = await params
  // Habilitar static rendering
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <HeroAbout />
        <IntroSection />
        <HistorySection />
        <ValuesSection />
        <DifferentialSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  )
}

// Gerar rotas estáticas para todos os locales
export function generateStaticParams() {
  return [
    { locale: 'pt' },
    { locale: 'en' },
    { locale: 'es' }
  ]
}

// Metadata
export async function generateMetadata({ params: { locale } }) {
  const titles = {
    pt: 'Sobre Nós | Leone Pavan Empreendimentos',
    en: 'About Us | Leone Pavan Developments',
    es: 'Nosotros | Leone Pavan Emprendimientos'
  }

  const descriptions = {
    pt: 'Desde 2004, desenvolvemos empreendimentos que unem técnica, estética e responsabilidade em Balneário Camboriú e região.',
    en: 'Since 2004, we develop projects that unite technique, aesthetics and responsibility in Balneário Camboriú and region.',
    es: 'Desde 2004, desarrollamos emprendimientos que unen técnica, estética y responsabilidad en Balneário Camboriú y región.'
  }

  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  }
}
