import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProjectsPageContent } from '@/components/ProjectsPage/ProjectsPageContent'

export default async function ProjectsPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <ProjectsPageContent />
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
    pt: 'Empreendimentos | Leone Pavan Empreendimentos',
    en: 'Developments | Leone Pavan Developments',
    es: 'Emprendimientos | Leone Pavan Emprendimientos'
  }

  const descriptions = {
    pt: 'Conheça nossos empreendimentos de alto padrão em Balneário Camboriú e Bombinhas. Projetos com design inteligente e localização privilegiada.',
    en: 'Discover our premium developments in Balneário Camboriú and Bombinhas. Projects with intelligent design and privileged location.',
    es: 'Conozca nuestros emprendimientos de alto estándar en Balneário Camboriú y Bombinhas. Proyectos con diseño inteligente y ubicación privilegiada.'
  }

  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  }
}
