'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MapPin, Award, Shield, Leaf, Building2, Users, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const differentials = [
  {
    icon: MapPin,
    key: 'locations',
  },
  {
    icon: Award,
    key: 'quality',
  },
  {
    icon: Shield,
    key: 'transparency',
  },
  {
    icon: Leaf,
    key: 'sustainability',
  },
]

function DifferentialItem({ differential, index, isVisible }) {
  const t = useTranslations('differentials')
  const Icon = differential.icon

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group p-6 rounded-2xl hover:bg-white/[0.03] transition-colors duration-500 border border-transparent hover:border-gold/10"
    >
      <div className="flex gap-4 sm:gap-6">
        {/* Icon with glow */}
        <div className="relative flex-shrink-0 pt-1">
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-medium text-light mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300 leading-snug flex items-center gap-3">
            {t(`${differential.key}.title`)}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0 text-gold text-lg">→</span>
          </h3>
          <p className="text-base text-light/70 leading-relaxed group-hover:text-light/90 transition-colors">
            {t(`${differential.key}.description`)}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  const t = useTranslations('differentials')
  const tAbout = useTranslations('aboutHome')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 relative overflow-hidden section-dark">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[1200px]">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title, Text & Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 lg:sticky lg:top-24"
          >
            {/* Accent line */}
            <div className="h-[2px] w-16 bg-gradient-to-r from-gold via-gold/50 to-transparent" />

            <div className="space-y-4 sm:space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-light tracking-tight leading-relaxed">
                Por que escolher a <br />
                <span className="font-medium text-gold">Leone Pavan</span>
              </h2>

              <p className="text-lg sm:text-xl text-gold/90 leading-relaxed font-medium">
                {t('subtitle')}
              </p>

              <p className="text-base sm:text-lg text-light/80 leading-relaxed">
                {t('text')}
              </p>
            </div>

            {/* Imagem Animada dos Empreendimentos */}
            <div className="pt-6 sm:pt-8">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 rounded-[24px] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                
                {/* Image container */}
                <div className="relative glass-subtle rounded-[20px] overflow-hidden">
                  <div className="relative aspect-[16/11]">
                    <img
                      src="/imagens/Home/empre01-ezgif.com-video-to-avif-converter.avif"
                      alt="Empreendimentos Leone Pavan"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Subtle overlay for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-base/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Optional: Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-lg px-4 py-2 backdrop-blur-md">
                      <p className="text-xs sm:text-sm text-light/90 text-center font-medium tracking-wide">
                        Nossos Empreendimentos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gold/10 mt-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Star className="w-5 h-5 text-gold/80" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-light/60">Alto Padrão</span>
                </div>
                <div className="text-center border-l border-gold/10">
                  <div className="flex justify-center mb-2">
                    <Building2 className="w-5 h-5 text-gold/80" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-light/60">Design Único</span>
                </div>
                <div className="text-center border-l border-gold/10">
                  <div className="flex justify-center mb-2">
                    <Users className="w-5 h-5 text-gold/80" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-light/60">Foco no Cliente</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Differentials List */}
          <div className="lg:pt-2">
            <div className="space-y-0">
              {differentials.map((differential, index) => (
                <DifferentialItem
                  key={differential.key}
                  differential={differential}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
