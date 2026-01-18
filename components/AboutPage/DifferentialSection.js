'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Award, Shield, Leaf } from 'lucide-react'
import { useIsMobile } from '@/lib/useIsMobile'

export function DifferentialSection() {
  const t = useTranslations('about.differential')
  const ref = useRef(null)
  const isMobile = useIsMobile()
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const inView = isMobile ? true : isInView

  const items = [
    { key: 'locations', icon: MapPin },
    { key: 'quality', icon: Award },
    { key: 'transparency', icon: Shield },
    { key: 'sustainability', icon: Leaf }
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 sm:px-6 section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gold rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-[1120px] relative z-10">
        {/* Section header */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          {/* Decorative line with glow */}
          <div className="relative mb-8">
            <motion.div
              className="w-20 h-[2px] bg-gradient-to-r from-gold via-gold/50 to-transparent"
              initial={isMobile ? false : { scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={isMobile ? { duration: 0 } : { duration: 0.9, delay: 0.2 }}
              style={{ transformOrigin: 'left' }}
            />
            <div className="absolute inset-0 w-20 h-[2px] bg-gradient-to-r from-gold to-transparent blur-sm" />
          </div>

          <h2 className="text-[clamp(2.2rem,4vw,3rem)] font-light text-light tracking-tight mb-6">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl leading-[1.7] text-light/75 max-w-[750px]">
            {t('text')}
          </p>
        </motion.div>

        {/* Premium Timeline List */}
        <div className="relative max-w-[800px] mx-auto">
          {/* Vertical connector line */}
          <div className="absolute left-[31px] top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          
          {/* Timeline items */}
          <div className="space-y-8 relative">
            {items.map((item, index) => (
              <motion.div
                key={item.key}
                initial={isMobile ? false : { opacity: 0, x: -25 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.2 + (0.15 * index), ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-8 items-start group"
              >
                {/* Icon container with premium glass effect */}
                <div className="relative flex-shrink-0">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-[64px] h-[64px] rounded-2xl glass-subtle flex items-center justify-center group-hover:border-gold/30 transition-all duration-500 group-hover:scale-105">
                    <item.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Content in glass card */}
                <div className="flex-1 pt-2">
                  <div className="glass-subtle rounded-2xl p-6 md:p-8 group-hover:border-white/[0.16] transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gold/10">
                    {/* Accent line */}
                    <div className="w-12 h-[2px] bg-gradient-to-r from-gold/60 to-transparent mb-4 group-hover:w-16 transition-all duration-500" />
                    
                    <p className="text-base md:text-lg leading-[1.75] text-light/85 text-left">
                      {t(`items.${item.key}`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
