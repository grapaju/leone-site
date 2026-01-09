import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProjectDetailContent } from '@/components/ProjectsPage/ProjectDetailContent'
import { notFound } from 'next/navigation'

// Lista dos empreendimentos disponíveis
const availableProjects = [
  'miranteAtlantico',
  'palazzoDelMare', 
  'portalMunicipios',
  'residencialNacoes',
  'vilaEsperanca'
]

export default async function ProjectDetailPage({ params }) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  // Verificar se o projeto existe
  if (!availableProjects.includes(slug)) {
    notFound()
  }

  return (
    <>
      <Header />
      <ProjectDetailContent projectId={slug} />
      <Footer />
    </>
  )
}

// Gerar rotas estáticas
export function generateStaticParams() {
  const params = []
  
  const locales = ['pt', 'en', 'es']
  
  locales.forEach(locale => {
    availableProjects.forEach(slug => {
      params.push({ locale, slug })
    })
  })
  
  return params
}

// Metadata dinâmica
export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  
  const titles = {
    pt: {
      miranteAtlantico: 'Mirante do Atlântico | Empreendimento Leone Pavan',
      palazzoDelMare: 'Palazzo del Mare | Empreendimento Leone Pavan',
      portalMunicipios: 'Portal dos Municípios | Empreendimento Leone Pavan',
      residencialNacoes: 'Residencial das Nações | Empreendimento Leone Pavan',
      vilaEsperanca: 'Vila Esperança | Empreendimento Leone Pavan',
    },
    en: {
      miranteAtlantico: 'Mirante do Atlântico | Leone Pavan Development',
      palazzoDelMare: 'Palazzo del Mare | Leone Pavan Development',
      portalMunicipios: 'Portal dos Municípios | Leone Pavan Development',
      residencialNacoes: 'Residencial das Nações | Leone Pavan Development',
      vilaEsperanca: 'Vila Esperança | Leone Pavan Development',
    },
    es: {
      miranteAtlantico: 'Mirante do Atlântico | Emprendimiento Leone Pavan',
      palazzoDelMare: 'Palazzo del Mare | Emprendimiento Leone Pavan',
      portalMunicipios: 'Portal dos Municípios | Emprendimiento Leone Pavan',
      residencialNacoes: 'Residencial das Nações | Emprendimiento Leone Pavan',
      vilaEsperanca: 'Vila Esperança | Emprendimiento Leone Pavan',
    }
  }

  return {
    title: titles[locale]?.[slug] || titles.pt[slug],
    description: `Conheça todos os detalhes deste empreendimento de alto padrão da Leone Pavan em Balneário Camboriú e região.`,
  }
}