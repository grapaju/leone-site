'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
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
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.id}`}>
        <div className="glass-subtle rounded-[20px] overflow-hidden hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-2">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
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
          <div className="p-6 space-y-4">
            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-light/50">
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
            <h3 className="text-xl font-medium text-light group-hover:text-gold transition-colors line-clamp-2 leading-tight">
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
    </motion.article>
  )
}

export function BlogSection({ locale = 'pt' }) {
  const t = useTranslations('home')

  return (
    <section className="py-24 md:py-32 section-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Accent line */}
          <div className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-light text-light mb-4 tracking-tight">
            Conteúdo para quem busca mais
          </h2>
          <p className="text-lg text-light/70 leading-relaxed">
            Notícias, guias e inspirações para quem está no mercado imobiliário.
          </p>
        </motion.header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} locale={locale} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild variant="ghost" size="lg" className="text-gold hover:text-light hover:bg-gold/10">
            <Link href="/blog">
              Ver todos os artigos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
