'use client'

import { motion } from 'framer-motion'

export function InternalPageHero({ badge, title, subtitle, align = 'left' }) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
  }

  return (
    <section className="relative min-h-[50vh] flex items-end pt-40 pb-16 px-6 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/60 via-dark-base to-dark-base" />
      
      {/* Content */}
      <div className={`relative max-w-[920px] w-full flex flex-col ${alignmentClasses[align]}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Top golden line */}
          <motion.div
            className="h-[1.5px] w-14 bg-gradient-to-r from-gold via-gold/50 to-transparent mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[0.7rem] tracking-[0.2em] uppercase text-gold/90">
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-[clamp(2.4rem,3.5vw,3.2rem)] font-light leading-[1.15] mb-6 text-light/95 max-w-[780px]">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-[1rem] leading-relaxed text-light/70 max-w-[640px]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
