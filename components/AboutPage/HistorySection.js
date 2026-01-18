'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useIsMobile } from '@/lib/useIsMobile'

export function HistorySection() {
  const t = useTranslations('about.history')
  const ref = useRef(null)
  const isMobile = useIsMobile()
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const inView = isMobile ? true : isInView

  const timeline = ['foundation', 'mirante', 'consolidation', 'bombinhas', 'today']
  const portfolio = [
    { key: 'mirante', image: '/imagens/Mirante do Atlantico/fachada-mirante-do-atlantico-001.png' },
    { key: 'palazzo', image: '/imagens/Palazzo del Mare/fachada-palazzo-del-mare-001.png' },
    { key: 'portal', image: '/imagens/Portal do Municipios/fachada-portal-dos-municipios-001.png' },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 sm:px-6 section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-gold rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1120px] mx-auto relative z-10">
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
          <p className="text-lg md:text-xl leading-[1.7] text-light/75 max-w-[700px]">
            {t('text')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1fr] gap-12 md:gap-16 items-start">
          {/* Left: Portfolio Bento Grid */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4 md:gap-5"
          >
            {/* Mirante - Large Card (2 rows) */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
              className="row-span-2 group relative overflow-hidden rounded-3xl glass-subtle hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-full min-h-[500px] md:min-h-[550px] overflow-hidden">
                <Image
                  src={portfolio[0].image}
                  alt={t(`portfolio.${portfolio[0].key}.title`)}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base/95 via-dark-base/30 to-dark-base/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="h-[1px] w-10 bg-gradient-to-r from-gold to-transparent" />
                  <span className="text-[0.65rem] md:text-xs uppercase tracking-[0.14em] text-gold font-medium">
                    {t('portfolioLabel')}
                  </span>
                </div>
                <h3 className="text-xl md:text-[1.5rem] text-light font-light tracking-tight group-hover:text-gold transition-colors duration-300 mb-2">
                  {t(`portfolio.${portfolio[0].key}.title`)}
                </h3>
                <p className="text-sm md:text-[0.95rem] text-light/80 leading-relaxed">
                  {t(`portfolio.${portfolio[0].key}.description`)}
                </p>
              </div>
            </motion.div>

            {/* Palazzo - Top Right */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.4 }}
              className="group relative overflow-hidden rounded-3xl glass-subtle hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[1/1] overflow-hidden">
                <Image
                  src={portfolio[1].image}
                  alt={t(`portfolio.${portfolio[1].key}.title`)}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base/95 via-dark-base/30 to-dark-base/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <div className="inline-flex items-center gap-2 mb-2">
                  <div className="h-[1px] w-8 bg-gradient-to-r from-gold to-transparent" />
                  <span className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.14em] text-gold font-medium">
                    {t('portfolioLabel')}
                  </span>
                </div>
                <h3 className="text-base md:text-[1.15rem] text-light font-light tracking-tight group-hover:text-gold transition-colors duration-300 mb-1">
                  {t(`portfolio.${portfolio[1].key}.title`)}
                </h3>
                <p className="text-xs md:text-[0.85rem] text-light/75 leading-relaxed line-clamp-2">
                  {t(`portfolio.${portfolio[1].key}.description`)}
                </p>
              </div>
            </motion.div>

            {/* Portal - Bottom Right */}
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.5 }}
              className="group relative overflow-hidden rounded-3xl glass-subtle hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[1/1] overflow-hidden">
                <Image
                  src={portfolio[2].image}
                  alt={t(`portfolio.${portfolio[2].key}.title`)}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base/95 via-dark-base/30 to-dark-base/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <div className="inline-flex items-center gap-2 mb-2">
                  <div className="h-[1px] w-8 bg-gradient-to-r from-gold to-transparent" />
                  <span className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.14em] text-gold font-medium">
                    {t('portfolioLabel')}
                  </span>
                </div>
                <h3 className="text-base md:text-[1.15rem] text-light font-light tracking-tight group-hover:text-gold transition-colors duration-300 mb-1">
                  {t(`portfolio.${portfolio[2].key}.title`)}
                </h3>
                <p className="text-xs md:text-[0.85rem] text-light/75 leading-relaxed line-clamp-2">
                  {t(`portfolio.${portfolio[2].key}.description`)}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Premium Timeline with connector line */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Vertical connector line with gradient */}
            <div className="absolute left-[31px] top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
            
            {/* Timeline items */}
            <div className="space-y-8 relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={item}
                  initial={isMobile ? false : { opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.4 + (0.1 * index), ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6 items-start group"
                >
                  {/* Year badge with premium glass effect */}
                  <div className="relative flex-shrink-0">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative w-[64px] h-[64px] rounded-2xl glass-subtle flex items-center justify-center group-hover:border-gold/30 transition-all duration-500 group-hover:scale-105">
                      <span className="text-lg font-light bg-gradient-to-br from-gold via-gold/90 to-gold/70 bg-clip-text text-transparent">
                        {t(`timeline.${item}.year`)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content with glass card */}
                  <div className="flex-1 pt-1">
                    <div className="glass-subtle rounded-2xl p-5 md:p-6 group-hover:border-white/[0.16] transition-all duration-500">
                      <p className="text-[0.95rem] md:text-base leading-[1.75] text-light/85 text-left">
                        {t(`timeline.${item}.text`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
