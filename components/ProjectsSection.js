'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, TrendingUp } from 'lucide-react'
import { Link } from '@/lib/navigation'
import { motion } from 'framer-motion' // Added framer-motion

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
]

function ProjectCard({ project, index }) {
  const t = useTranslations('projects')

  return (
    <motion.article 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className="group relative h-full"
    >
      <Link href={`/empreendimentos/${project.id}`} className="block h-full">
        <div className="glass rounded-[20px] overflow-hidden border border-white/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden shrink-0">
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
        <div className="p-6 sm:p-7 space-y-4 sm:space-y-5 flex-1 flex flex-col">
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-medium text-light group-hover:text-gold transition-colors leading-snug">
              {t(`items.${project.id}.name`)}
            </h3>
            <div className="flex items-center gap-2 text-sm sm:text-base text-light/60">
              <MapPin className="w-4 h-4 sm:w-4 sm:h-4" />
              <span>{t(`items.${project.id}.location`)}</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-light/70 leading-relaxed flex-1">
            {t(`items.${project.id}.description`)}
          </p>

          <div className="pt-2 border-t border-light/10 mt-auto">
            <div className="flex items-center justify-between text-gold text-sm font-medium group-hover:translate-x-1 transition-transform">
              <span>{t('cta')}</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </motion.article>
  )
}

export function ProjectsSection() {
  const t = useTranslations('projects')
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
    <section id="empreendimentos" className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-[#1C150F]">
      {/* Background Gradient for Hero continuity - optional if you want a subtle transition */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#2B2116]/40 via-transparent to-transparent pointer-events-none" /> */}
      
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">
        {/* Header */}
        <header ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          {/* Accent line */}
          <div 
            className={`h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent mb-4 sm:mb-6 transition-all duration-700 ease-out ${
              isVisible ? 'w-14 opacity-100' : 'w-0 opacity-0'
            }`}
          />
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-light tracking-tight leading-relaxed mb-4 sm:mb-5">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-light/70 leading-relaxed">
            {t('subtitle')}
          </p>
        </header>

        {/* Projects Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16 max-w-[1200px] mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild variant="gold-solid" size="lg" className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-gold/20">
            <Link href="/empreendimentos">
              {t('viewAll')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
