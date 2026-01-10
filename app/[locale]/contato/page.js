import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactPageContent } from '@/components/ContactPage/ContactPageContent'

export default async function ContactPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <ContactPageContent />
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
    pt: 'Contato | Leone Pavan Empreendimentos',
    en: 'Contact | Leone Pavan Developments',
    es: 'Contacto | Leone Pavan Emprendimientos'
  }

  const descriptions = {
    pt: 'Entre em contato conosco para conhecer nossos empreendimentos exclusivos em Balneário Camboriú.',
    en: 'Contact us to learn about our exclusive developments in Balneário Camboriú.',
    es: 'Contáctanos para conocer nuestros emprendimientos exclusivos en Balneário Camboriú.'
  }

  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  }
}