'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Target, Scale } from 'lucide-react'
import { useIsMobile } from '@/lib/useIsMobile'

export function ValuesSection() {
  const t = useTranslations('about.values')
  const ref = useRef(null)
  const isMobile = useIsMobile()
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const inView = isMobile ? true : isInView

  const values = [
    { key: 'mission', Icon: ShieldCheck },
    { key: 'vision', Icon: Target },
    { key: 'values', Icon: Scale },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 right-1/3 w-[550px] h-[550px] bg-gold rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto max-w-[1120px] relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-20 max-w-[750px]">
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
          
          <motion.h2
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.2rem,4vw,3rem)] font-light text-light tracking-tight"
          >
            {t('title')}
          </motion.h2>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.key}
              initial={isMobile ? false : { opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="glass-subtle rounded-3xl p-8 md:p-10 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2">
                {/* Icon container with glow */}
                <div className="relative mb-6">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-500 group-hover:scale-110">
                    <item.Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Accent line */}
                <div className="w-12 h-[2px] bg-gradient-to-r from-gold/60 to-transparent mb-6 group-hover:w-16 transition-all duration-500" />

                <h3 className="text-xl md:text-2xl font-light text-light mb-4 group-hover:text-gold transition-colors duration-300">
                  {t(`items.${item.key}.title`)}
                </h3>
                <p className="text-[0.95rem] md:text-base leading-[1.75] text-light/75 text-left">
                  {t(`items.${item.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
