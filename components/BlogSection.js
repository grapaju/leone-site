'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Link } from '@/lib/navigation'

const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    category: 'Investimentos',
    date: '2026-01-15',
    readTime: 5,
    titlePt: 'Por que investir em Balneário Camboriú em 2026?',
    titleEn: 'Why invest in Balneário Camboriú in 2026?',
    titleEs: '¿Por qué invertir en Balneário Camboriú en 2026?',
    excerptPt: 'Descubra as razões que fazem de Balneário Camboriú um dos mercados imobiliários mais promissores do Brasil.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    category: 'Arquitetura',
    date: '2026-01-10',
    readTime: 7,
    titlePt: 'Tendências de arquitetura para casas de praia',
    titleEn: 'Architecture trends for beach houses',
    titleEs: 'Tendencias de arquitectura para casas de playa',
    excerptPt: 'Conheça as principais tendências de design que estão revolucionando os empreendimentos litorâneos.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    category: 'Lifestyle',
    date: '2026-01-05',
    readTime: 4,
    titlePt: 'Qualidade de vida em Balneário Camboriú',
    titleEn: 'Quality of life in Balneário Camboriú',
    titleEs: 'Calidad de vida en Balneário Camboriú',
    excerptPt: 'Saiba por que Balneário Camboriú é considerada uma das melhores cidades para se viver no Sul do Brasil.',
  },
]

function BlogCard({ post, index, locale }) {
  const titles = {
    pt: post.titlePt,
    en: post.titleEn,
    es: post.titleEs,
  }

  return (
    <article className="group">
      <Link href={`/blog/${post.id}`}>
        <div className="glass-subtle rounded-[18px] overflow-hidden hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              src={post.image}
              alt={titles[locale] || titles.pt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 via-dark-base/20 to-transparent" />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-wider text-gold font-medium">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
            {/* Meta */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs text-light/50">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <time>
                  {new Date(post.date).toLocaleDateString(locale === 'pt' ? 'pt-BR' : locale === 'en' ? 'en-US' : 'es-ES', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime} min</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-medium text-light group-hover:text-gold transition-colors line-clamp-2 leading-tight">
              {titles[locale] || titles.pt}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-light/70 line-clamp-2 leading-relaxed">
              {post.excerptPt}
            </p>

            {/* Read more */}
            <div className="flex items-center gap-2 text-gold text-sm font-medium pt-2">
              <span>Ler mais</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export function BlogSection({ locale = 'pt' }) {
  const t = useTranslations('home')
  const [isVisible, setIsVisible] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0)), rgba(58, 46, 34, 0.15)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)'
    }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        {/* Header */}
        <header ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Accent line */}
          <div 
            className={`h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent mx-auto mb-4 sm:mb-6 transition-all duration-700 ease-out ${
              isVisible ? 'w-14 opacity-100' : 'w-0 opacity-0'
            }`}
          />

          <h2 className="text-3xl sm:text-4xl md:text-4xl font-light text-light mb-3 sm:mb-4 tracking-tight">
            Visão, mercado e arquitetura
          </h2>
          <p className="text-base sm:text-lg text-light/70 leading-relaxed">
            Conteúdos editoriais sobre tendências, investimento e desenvolvimento urbano.
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} locale={locale} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild variant="ghost" size="lg" className="text-gold hover:text-light hover:bg-gold/10">
            <Link href="/blog">
              Ver todos os artigos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
