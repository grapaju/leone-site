'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Building2, Filter } from 'lucide-react'
import { Link } from '@/lib/navigation'
import { useState } from 'react'
import { useIsMobile } from '@/lib/useIsMobile'

const projects = [
  {
    id: 'miranteAtlantico',
    image: '/imagens/Mirante do Atlantico/Edificio-Mirante-do-Atlantico-Balneario-Camboriu-600x450.jpg',
    status: 'completed',
    year: 2009,
    daysToDelivery: null,
    progress: 100,
  },
  {
    id: 'palazzoDelMare',
    image: 'https://leonepavan.com.br/wp-content/uploads/2019/08/CL_PDM_HALL_R00-copy.jpg',
    status: 'completed',
    year: 2018,
    daysToDelivery: null,
    progress: 100,
  },
  {
    id: 'portalMunicipios',
    image: '/imagens/Portal do Municipios/fachada-portal-dos-municipios-001.png',
    status: 'completed',
    year: 2014,
    daysToDelivery: null,
    progress: 100,
  },
  {
    id: 'residencialNacoes',
    image: '/imagens/Residencial das Nacoes/fachada-residencial-nacoes-frontal.jpg',
    status: 'completed',
    year: 2005,
    daysToDelivery: null,
    progress: 100,
  },
  {
    id: 'vilaEsperanca',
    image: '/imagens/Vila Esperança/vila-esperanca-fachada-001.jpg',
    status: 'completed',
    year: 2010,
    daysToDelivery: null,
    progress: 100,
  }
]

function ProjectCard({ project, index }) {
  const t = useTranslations('projectsPage')
  const isMobile = useIsMobile()

  return (
    <motion.article
      initial={isMobile ? false : { opacity: 0, y: 30 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={isMobile ? undefined : { once: true }}
      transition={isMobile ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-subtle rounded-[24px] overflow-hidden hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-2">
        {/* Image */}
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={project.image}
            alt={t(`projects.${project.id}.name`)}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Badge Status */}
          <div className="absolute top-4 left-4">
            <Badge variant={project.status} className="uppercase tracking-wider text-xs">
              {t(`status.${project.status}`)}
            </Badge>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <div className="glass-form rounded-xl px-3 py-1.5">
              <span className="text-xs text-light/80 font-semibold">{project.year}</span>
            </div>
          </div>

          {/* Progress overlay for non-completed projects */}
          {project.status !== 'completed' && project.daysToDelivery && (
            <div className="absolute bottom-4 right-4 glass rounded-xl px-3 py-2 text-xs">
              <div className="flex items-center gap-1 text-light/90">
                <span>{project.daysToDelivery} dias</span>
              </div>
              {project.progress && (
                <div className="flex items-center gap-1 text-gold mt-1">
                  <span>{project.progress}%</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-7 space-y-4">
          {/* Micro accent line */}
          <div className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent" />
          
          <div>
            <h3 className="text-2xl font-medium text-light mb-2 group-hover:text-gold transition-colors">
              {t(`projects.${project.id}.name`)}
            </h3>
            <div className="flex items-center gap-2 text-sm text-light/60">
              <MapPin className="w-4 h-4" />
              <span>{t(`projects.${project.id}.location`)}</span>
            </div>
          </div>

          <p className="text-base text-light/70 line-clamp-3 leading-relaxed">
            {t(`projects.${project.id}.description`)}
          </p>

          <Button
            asChild
            variant="ghost"
            className="w-full text-gold hover:text-dark-base hover:bg-gold group/btn"
          >
            <Link href={`/empreendimentos/${project.id}`}>
              {t('viewDetails')}
              <motion.span
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={isMobile ? undefined : { x: 5 }}
              >
                →
              </motion.span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectsPageContent() {
  const t = useTranslations('projectsPage')
  const isMobile = useIsMobile()
  const [filter, setFilter] = useState('all')

  const filters = ['all', 'completed', 'inProgress', 'launch']
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status === filter)

  const stats = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'completed').length,
    inProgress: projects.filter(p => p.status === 'inProgress').length,
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 section-dark">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Accent line */}
            <motion.div
              className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent mb-6"
              initial={isMobile ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
            />

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-light text-light mb-4 tracking-tight">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-light/70 leading-relaxed mb-12">
              {t('hero.subtitle')}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <motion.div
                initial={isMobile ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl font-medium text-light">{stats.total}</div>
                  <div className="text-sm text-light/60">{t('hero.totalProjects')}</div>
                </div>
              </motion.div>
              <motion.div
                initial={isMobile ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-light">{stats.completed}</div>
                  <div className="text-sm text-light/60">{t('hero.completedProjects')}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 section-dark border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <div className="flex items-center gap-2 text-light/60">
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filtrar:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {filters.map((filterItem, index) => (
                <motion.button
                  key={filterItem}
                  initial={isMobile ? false : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={isMobile ? { duration: 0 } : { duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setFilter(filterItem)}
                  className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    filter === filterItem
                      ? 'bg-gold text-dark-base shadow-lg shadow-gold/25'
                      : 'glass-subtle text-light/70 hover:text-light hover:shadow-lg hover:shadow-gold/10'
                  }`}
                >
                  {t(`filters.${filterItem}`)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-32 section-dark">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={isMobile ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-light/40" />
              </div>
              <p className="text-light/60 text-lg">{t('noProjects')}</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}
