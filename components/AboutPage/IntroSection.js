'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function IntroSection() {
  const t = useTranslations('about.hero')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background decoration subtle */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[800px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          
        >
          {/* Accent line with glow */}
          <div className="relative mb-8">
            <div className="w-20 h-[2px] bg-gradient-to-r from-gold via-gold/50 to-transparent" />
            <div className="absolute inset-0 w-20 h-[2px] bg-gradient-to-r from-gold to-transparent blur-sm" />
          </div>

          <p className="text-[1.15rem] md:text-xl leading-[1.8] text-light/85 font-light text-left" style={{lineHeight: '2.0'}}>
            {t('intro')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
