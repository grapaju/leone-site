'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useIsMobile } from '@/lib/useIsMobile'

export function ClosingSection() {
  const t = useTranslations('about.closing')
  const ref = useRef(null)
  const isMobile = useIsMobile()
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const inView = isMobile ? true : isInView

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-[900px] relative z-10">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Decorative line with glow - alinhado à esquerda */}
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

          {/* Title */}
          <motion.h2
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.2rem,4vw,3rem)] font-light text-light tracking-tight mb-8"
          >
            {t('title')}
          </motion.h2>
          
          {/* Text sem card glass */}
          <motion.p
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl leading-[1.75] text-light/85 mb-10 text-center"
          >
            {t('text')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/empreendimentos">
              <Button variant="gold" size="xl" className="group shadow-xl shadow-gold/20">
                {t('cta')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
