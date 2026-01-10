'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, TrendingUp } from 'lucide-react'
import { Link } from '@/lib/navigation'

const projects = [
  {
    id: 'palazzoDelMare',
    image: 'https://leonepavan.com.br/wp-content/uploads/2019/08/CL_PDM_HALL_R00-copy.jpg',
    status: 'completed',
    daysToDelivery: null,
    progress: 100,
  },
  {
    id: 'miranteAtlantico',
    image: '/imagens/Mirante do Atlantico/Edificio-Mirante-do-Atlantico-Balneario-Camboriu-600x450.jpg',
    status: 'completed',
    daysToDelivery: null,
    progress: 100,
  },
  {
    id: 'portalMunicipios',
    image: '/imagens/Portal do Municipios/fachada-portal-dos-municipios-001.png',
    status: 'completed',
    daysToDelivery: null,
    progress: 100,
  },
  {
    id: 'residencialNacoes',
    image: '/imagens/Residencial das Nacoes/fachada-residencial-nacoes-frontal.jpg',
    status: 'completed',
    daysToDelivery: null,
    progress: 100,
  },
]

function ProjectCard({ project, index }) {
  const t = useTranslations('projects')

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-subtle rounded-[24px] overflow-hidden hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-2">
        {/* Image */}
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={project.image}
            alt={t(`items.${project.id}.name`)}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant={project.status} className="uppercase tracking-wider text-xs">
              {t(`status.${project.status}`)}
            </Badge>
          </div>

          {/* Progress/Days overlay */}
          {project.status !== 'completed' && (
            <div className="absolute bottom-4 right-4 glass rounded-xl px-3 py-2 text-xs">
              {project.daysToDelivery && (
                <div className="flex items-center gap-1 text-light/90">
                  <Calendar className="w-3 h-3" />
                  <span>{project.daysToDelivery} dias</span>
                </div>
              )}
              {project.progress && (
                <div className="flex items-center gap-1 text-gold mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{project.progress}%</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium text-light mb-2 group-hover:text-gold transition-colors">
              {t(`items.${project.id}.name`)}
            </h3>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-light/60">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{t(`items.${project.id}.location`)}</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-light/70 line-clamp-3 leading-relaxed">
            {t(`items.${project.id}.description`)}
          </p>

          <Button
            asChild
            variant="ghost"
            className="w-full text-gold hover:text-dark-base hover:bg-gold group/btn"
          >
            <Link href={`/empreendimentos/${project.id}`}>
              {t('cta')}
              <motion.span
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
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

export function ProjectsSection() {
  const t = useTranslations('projects')

  return (
    <section id="empreendimentos" className="py-16 sm:py-24 md:py-32 section-dark">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          {/* Accent line */}
          <div className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent mb-4 sm:mb-6" />
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-light mb-3 sm:mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-light/70 leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
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
          <Button asChild variant="gold-solid" size="lg">
            <Link href="/empreendimentos">
              {t('viewAll')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
