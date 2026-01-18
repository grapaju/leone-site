'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useIsMobile } from '@/lib/useIsMobile'

export function IntroSection() {
  const t = useTranslations('about.intro')
  const ref = useRef(null)
  const isMobile = useIsMobile()
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const inView = isMobile ? true : isInView

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration subtle */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[800px] mx-auto relative z-10">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          
        >
          {/* Accent line with glow */}
          <div className="relative mb-8">
            <div className="w-20 h-[2px] bg-gradient-to-r from-gold via-gold/50 to-transparent" />
            <div className="absolute inset-0 w-20 h-[2px] bg-gradient-to-r from-gold to-transparent blur-sm" />
          </div>

          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-light text-light tracking-tight mb-8">
            {t('title')}
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-light/85 font-light text-left mb-6">
            {t('text')}
          </p>
          
          <p className="text-base md:text-lg leading-relaxed text-light/85 font-light text-left">
            {t('text2')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
