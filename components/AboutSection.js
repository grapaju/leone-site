'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2, Users, Clock, Headset } from 'lucide-react'

const differentials = [
  {
    icon: CheckCircle2,
    key: 'quality',
  },
  {
    icon: Users,
    key: 'team',
  },
  {
    icon: Clock,
    key: 'delivery',
  },
  {
    icon: Headset,
    key: 'support',
  },
]

function DifferentialCard({ differential, index }) {
  const t = useTranslations('differentials')
  const Icon = differential.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-subtle rounded-[20px] p-6 sm:p-8 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 group"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
        <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-medium text-light mb-3 group-hover:text-gold transition-colors">
        {t(`${differential.key}.title`)}
      </h3>
      <p className="text-light/70 leading-relaxed text-sm">
        {t(`${differential.key}.description`)}
      </p>
    </motion.div>
  )
}

export function AboutSection() {
  const t = useTranslations('differentials')
  const tAbout = useTranslations('aboutHome')

  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden glass">
              <Image
                src="/imagens/Heros/bc_molhe.png"
                alt="Balneário Camboriú"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-base/50 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 glass-form rounded-2xl p-4 sm:p-6 max-w-[280px] sm:max-w-xs"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-3xl sm:text-4xl font-light text-gold">20+</div>
                <div className="text-xs sm:text-sm text-light/80 leading-tight">
                  Anos construindo excelência
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Accent line */}
            <div className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-light tracking-tight">
              {t('title')}
            </h2>

            <p className="text-base sm:text-lg text-light/70 leading-relaxed">
              {t('subtitle')}
            </p>

            <p className="text-sm sm:text-base text-light/80 leading-relaxed">
              {tAbout('history')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div>
                <div className="text-2xl sm:text-3xl font-light text-gold mb-1">50+</div>
                <div className="text-[0.65rem] sm:text-xs text-light/60 uppercase tracking-wider">Empreendimentos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-light text-gold mb-1">100%</div>
                <div className="text-[0.65rem] sm:text-xs text-light/60 uppercase tracking-wider">Satisfação</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-light text-gold mb-1">20+</div>
                <div className="text-[0.65rem] sm:text-xs text-light/60 uppercase tracking-wider">Anos</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {differentials.map((differential, index) => (
            <DifferentialCard
              key={differential.key}
              differential={differential}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
