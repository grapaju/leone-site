import { setRequestLocale } from 'next-intl/server'
import { useLocale } from 'next-intl'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProjectsSection } from '@/components/ProjectsSection'
import { AboutSection } from '@/components/AboutSection'
import { CitySection } from '@/components/CitySection'
import { BlogSection } from '@/components/BlogSection'
import { Footer } from '@/components/Footer'

export default async function HomePage({ params }) {
  const { locale } = await params
  // Habilitar static rendering
  setRequestLocale(locale)
  
  return (
    <>
      <Header />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <CitySection />
      <BlogSection locale={locale} />
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
