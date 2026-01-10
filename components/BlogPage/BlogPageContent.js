'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, Clock, Search, Filter } from 'lucide-react'
import { Link } from '@/lib/navigation'

// Dados dos posts do blog
const blogPosts = [
  {
    id: 1,
    slug: 'por-que-investir-em-balneario-camboriu-2026',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    category: 'Investimentos',
    date: '2026-01-15',
    readTime: 5,
    featured: true,
    titlePt: 'Por que investir em Balneário Camboriú em 2026?',
    titleEn: 'Why invest in Balneário Camboriú in 2026?',
    titleEs: '¿Por qué invertir en Balneário Camboriú en 2026?',
    excerptPt: 'Descubra as razões que fazem de Balneário Camboriú um dos mercados imobiliários mais promissores do Brasil.',
    excerptEn: 'Discover the reasons that make Balneário Camboriú one of Brazil\'s most promising real estate markets.',
    excerptEs: 'Descubre las razones que hacen de Balneário Camboriú uno de los mercados inmobiliarios más prometedores de Brasil.'
  },
  {
    id: 2,
    slug: 'tendencias-arquitetura-casas-praia',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    category: 'Arquitetura',
    date: '2026-01-10',
    readTime: 7,
    featured: false,
    titlePt: 'Tendências de arquitetura para casas de praia',
    titleEn: 'Architecture trends for beach houses',
    titleEs: 'Tendencias de arquitectura para casas de playa',
    excerptPt: 'Conheça as principais tendências de design que estão revolucionando os empreendimentos litorâneos.',
    excerptEn: 'Discover the main design trends that are revolutionizing coastal developments.',
    excerptEs: 'Conoce las principales tendencias de diseño que están revolucionando los emprendimientos costeros.'
  },
  {
    id: 3,
    slug: 'qualidade-vida-balneario-camboriu',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    category: 'Lifestyle',
    date: '2026-01-05',
    readTime: 4,
    featured: false,
    titlePt: 'Qualidade de vida em Balneário Camboriú',
    titleEn: 'Quality of life in Balneário Camboriú',
    titleEs: 'Calidad de vida en Balneário Camboriú',
    excerptPt: 'Saiba por que Balneário Camboriú é considerada uma das melhores cidades para se viver no Sul do Brasil.',
    excerptEn: 'Learn why Balneário Camboriú is considered one of the best cities to live in Southern Brazil.',
    excerptEs: 'Descubre por qué Balneário Camboriú es considerada una de las mejores ciudades para vivir en el sur de Brasil.'
  },
  {
    id: 4,
    slug: 'mercado-imobiliario-luxo-2026',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
    category: 'Investimentos',
    date: '2025-12-28',
    readTime: 6,
    featured: false,
    titlePt: 'O mercado de imóveis de luxo em 2026',
    titleEn: 'The luxury real estate market in 2026',
    titleEs: 'El mercado inmobiliario de lujo en 2026',
    excerptPt: 'Análise das perspectivas e oportunidades no segmento de alto padrão.',
    excerptEn: 'Analysis of prospects and opportunities in the high-end segment.',
    excerptEs: 'Análisis de perspectivas y oportunidades en el segmento de alto estándar.'
  },
  {
    id: 5,
    slug: 'sustentabilidade-construcao-civil',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800',
    category: 'Sustentabilidade',
    date: '2025-12-20',
    readTime: 5,
    featured: false,
    titlePt: 'Sustentabilidade na construção civil',
    titleEn: 'Sustainability in construction',
    titleEs: 'Sostenibilidad en la construcción',
    excerptPt: 'Como a construção sustentável está moldando o futuro dos empreendimentos.',
    excerptEn: 'How sustainable construction is shaping the future of developments.',
    excerptEs: 'Cómo la construcción sostenible está moldeando el futuro de los emprendimientos.'
  },
  {
    id: 6,
    slug: 'tecnologia-smart-homes',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
    category: 'Tecnologia',
    date: '2025-12-15',
    readTime: 8,
    featured: false,
    titlePt: 'Tecnologia em casas inteligentes',
    titleEn: 'Smart home technology',
    titleEs: 'Tecnología en casas inteligentes',
    excerptPt: 'As últimas inovações que estão transformando residências em ambientes conectados.',
    excerptEn: 'The latest innovations that are transforming residences into connected environments.',
    excerptEs: 'Las últimas innovaciones que están transformando residencias en ambientes conectados.'
  }
]

const categories = ['Todos', 'Investimentos', 'Arquitetura', 'Lifestyle']

function BlogCard({ post, index, locale, featured = false }) {
  const title = post[`title${locale.charAt(0).toUpperCase() + locale.slice(1)}`] || post.titlePt
  const excerpt = post[`excerpt${locale.charAt(0).toUpperCase() + locale.slice(1)}`] || post.excerptPt

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${featured ? 'lg:col-span-2' : ''}`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className={`glass rounded-[24px] overflow-hidden transition-all duration-500 group-hover:scale-[1.02] ${
          featured ? 'lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center' : ''
        }`}>
          <div className={`relative ${featured ? 'aspect-[16/10] lg:aspect-[4/3]' : 'aspect-[4/3]'} overflow-hidden`}>
            <Image
              src={post.image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-base/60 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="gold" className="text-xs">
                {post.category}
              </Badge>
            </div>
            
            {featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-gold text-dark-base text-xs font-medium">
                  Destaque
                </Badge>
              </div>
            )}
          </div>

          <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
            {/* Meta */}
            <div className="flex items-center gap-4 text-light/60 text-sm mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(locale, {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min de leitura</span>
              </div>
            </div>

            {/* Title */}
            <h3 className={`font-light text-light mb-3 group-hover:text-gold transition-colors ${
              featured ? 'text-2xl lg:text-3xl leading-tight' : 'text-xl leading-tight'
            }`}>
              {title}
            </h3>

            {/* Excerpt */}
            <p className={`text-light/80 leading-relaxed mb-4 ${featured ? 'text-lg' : ''}`}>
              {excerpt}
            </p>

            {/* Read more */}
            <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all">
              <span className="text-sm font-medium">Ler mais</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export function BlogPageContent() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
    const matchesSearch = !searchQuery || 
      post.titlePt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerptPt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = filteredPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-dark-base/95 to-transparent" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Accent line */}
            <div className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent mx-auto mb-6" />
            
            <h1 className="text-5xl md:text-7xl font-light text-light mb-6 tracking-tight">
              Conteúdo para quem <span className="text-gold">busca mais</span>
            </h1>
            
            <p className="text-xl text-light/70 leading-relaxed mb-8">
              Insights exclusivos sobre investimentos imobiliários, arquitetura e lifestyle premium
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col gap-6 justify-center items-center max-w-4xl mx-auto">
              {/* Search */}
              <div className="relative w-full max-w-lg">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light/50" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 glass-form rounded-full text-light placeholder:text-light/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? "gold-solid" : "glass"}
                    size="sm"
                    className={`whitespace-nowrap ${
                      selectedCategory === category
                        ? 'shadow-lg'
                        : 'hover:border-gold/40'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-24 md:pb-32 relative" style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0)), rgba(58, 46, 34, 0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}>
        <div className="container mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="space-y-12">
              {/* Featured Post */}
              {featuredPost && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <BlogCard post={featuredPost} index={0} locale="pt" featured />
                </motion.div>
              )}

              {/* Regular Posts Grid */}
              {regularPosts.length > 0 && (
                <div className="grid md:grid-cols-2 gap-8">
                  {regularPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} locale="pt" />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-glass rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-light/40" />
              </div>
              <h3 className="text-2xl font-light text-light mb-4">Nenhum artigo encontrado</h3>
              <p className="text-light/60">Tente ajustar sua busca ou filtros</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}