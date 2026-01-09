'use client'

import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function HeroAbout() {
  const t = useTranslations('about.hero')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section 
      ref={ref}
      className="relative min-h-[75vh] flex items-center justify-start py-32 md:py-40 px-6 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(26, 20, 14, 0.85), rgba(26, 20, 14, 0.85)), url(/imagens/Heros/balneario-camboriu-skyline.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay adicional para profundidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base/30 via-transparent to-dark-base/60" />
      
      <div className="container mx-auto max-w-[1120px] relative z-10">
        <motion.div
          className="max-w-[780px] relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="inline-block glass-subtle rounded-full px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.16em] text-gold/90 font-medium border border-gold/20">
              {t('badge')}
            </span>
          </motion.div>

          {/* Linha dourada */}
          <motion.div
            className="w-16 h-[2px] bg-gradient-to-r from-gold via-gold/40 to-transparent mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Title */}
          <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-light leading-[1.15] mb-6 text-light tracking-tight">
            {t('title')}
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl leading-[1.7] max-w-[600px] text-light/80"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

