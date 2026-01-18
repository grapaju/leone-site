'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MapPin, Award, Shield, Leaf } from 'lucide-react'
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
      className="relative group"
    >
      <div className="flex gap-4 sm:gap-5">
        {/* Icon with glow */}
        <div className="relative flex-shrink-0 pt-1">
          <div className="absolute inset-0 bg-gold/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 group-hover:border-gold/30 transition-all duration-500">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-8 sm:pb-10 last:pb-0">
          <h3 className="text-lg sm:text-xl font-medium text-light mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300">
            {t(`${differential.key}.title`)}
          </h3>
          <p className="text-sm sm:text-base text-light/75 leading-relaxed">
            {t(`${differential.key}.description`)}
          </p>
        </div>
      </div>

      {/* Connector line */}
      {index < differentials.length - 1 && (
        <div className="absolute left-6 sm:left-7 top-14 sm:top-16 bottom-0 w-[2px] bg-gradient-to-b from-gold/30 via-gold/10 to-transparent" />
      )}
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
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-light tracking-tight leading-tight">
                {t('title')}
              </h2>

              <p className="text-lg sm:text-xl text-gold/90 leading-relaxed font-medium">
                {t('subtitle')}
              </p>

              <p className="text-base sm:text-lg text-light/80 leading-relaxed">
                {t('text')}
              </p>
            </div>

            {/* Logo Animation Area */}
            <div className="pt-6 sm:pt-8">
              <div className="glass-subtle rounded-2xl p-8 sm:p-10 flex items-center justify-center min-h-[240px] sm:min-h-[280px]">
                {/* Placeholder para logo animado */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full animate-pulse" />
                  <div className="relative text-gold/40 text-center">
                    <div className="text-5xl sm:text-6xl font-light mb-3">LP</div>
                    <div className="text-xs sm:text-sm uppercase tracking-widest">Logo Animado</div>
                  </div>
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
