import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BlogPostContent } from '@/components/BlogPage/BlogPostContent'
import { notFound } from 'next/navigation'

// Posts disponíveis
const availablePosts = [
  'por-que-investir-em-balneario-camboriu-2026',
  'tendencias-arquitetura-casas-praia',
  'qualidade-vida-balneario-camboriu'
]

export default async function BlogPostPage({ params }) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  // Verificar se o post existe
  if (!availablePosts.includes(slug)) {
    notFound()
  }

  return (
    <>
      <Header />
      <BlogPostContent slug={slug} />
      <Footer />
    </>
  )
}

// Gerar rotas estáticas para posts e locales
export function generateStaticParams() {
  const locales = ['pt', 'en', 'es']
  const params = []
  
  locales.forEach(locale => {
    availablePosts.forEach(slug => {
      params.push({ locale, slug })
    })
  })
  
  return params
}

// Metadata dinâmica por post
export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  
  const postMeta = {
    'por-que-investir-em-balneario-camboriu-2026': {
      pt: {
        title: 'Por que investir em Balneário Camboriú em 2026?',
        description: 'Descubra as razões que fazem de Balneário Camboriú um dos mercados imobiliários mais promissores do Brasil.'
      },
      en: {
        title: 'Why invest in Balneário Camboriú in 2026?',
        description: 'Discover the reasons that make Balneário Camboriú one of Brazil\'s most promising real estate markets.'
      },
      es: {
        title: '¿Por qué invertir en Balneário Camboriú en 2026?',
        description: 'Descubre las razones que hacen de Balneário Camboriú uno de los mercados inmobiliarios más prometedores de Brasil.'
      }
    },
    'tendencias-arquitetura-casas-praia': {
      pt: {
        title: 'Tendências de arquitetura para casas de praia',
        description: 'Conheça as principais tendências de design que estão revolucionando os empreendimentos litorâneos.'
      },
      en: {
        title: 'Architecture trends for beach houses',
        description: 'Discover the main design trends that are revolutionizing coastal developments.'
      },
      es: {
        title: 'Tendencias de arquitectura para casas de playa',
        description: 'Conoce las principales tendencias de diseño que están revolucionando los emprendimientos costeros.'
      }
    },
    'qualidade-vida-balneario-camboriu': {
      pt: {
        title: 'Qualidade de vida em Balneário Camboriú',
        description: 'Saiba por que Balneário Camboriú é considerada uma das melhores cidades para se viver no Sul do Brasil.'
      },
      en: {
        title: 'Quality of life in Balneário Camboriú',
        description: 'Learn why Balneário Camboriú is considered one of the best cities to live in Southern Brazil.'
      },
      es: {
        title: 'Calidad de vida en Balneário Camboriú',
        description: 'Descubre por qué Balneário Camboriú es considerada una de las mejores ciudades para vivir en el sur de Brasil.'
      }
    }
  }

  const meta = postMeta[slug]?.[locale] || postMeta[slug]?.pt
  
  return {
    title: `${meta?.title} | Leone Pavan Blog`,
    description: meta?.description,
  }
}