'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const t = useTranslations('hero')

  const scrollToProjects = () => {
    document.getElementById('empreendimentos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/bc_praia.mp4"
            type="video/mp4"
          />
        </video>
        {/* Elegant Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-base/70 via-[#2B2116]/65 to-dark-base/80" />
        {/* Additional radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-base/50 via-transparent to-dark-base/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="inline-block glass-subtle rounded-full px-4 py-2 md:px-6 md:py-3 text-[0.65rem] md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] text-gold font-medium">
              {t('badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-light leading-tight px-4 sm:px-0"
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-light/85 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-4"
          >
            <Button
              onClick={scrollToProjects}
              variant="gold"
              size="xl"
              className="group"
            >
              {t('cta')}
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
