import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BlogPageContent } from '@/components/BlogPage/BlogPageContent'

export default async function BlogPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <BlogPageContent />
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
export async function generateMetadata({ params }) {
  const { locale } = await params
  const titles = {
    pt: 'Blog | Leone Pavan Empreendimentos',
    en: 'Blog | Leone Pavan Developments',
    es: 'Blog | Leone Pavan Emprendimientos'
  }

  const descriptions = {
    pt: 'Conteúdo exclusivo sobre investimentos imobiliários, arquitetura e lifestyle no litoral catarinense.',
    en: 'Exclusive content about real estate investments, architecture and lifestyle in Santa Catarina coast.',
    es: 'Contenido exclusivo sobre inversiones inmobiliarias, arquitectura y estilo de vida en la costa de Santa Catarina.'
  }

  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  }
}