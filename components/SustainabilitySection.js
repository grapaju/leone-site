'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Leaf, Sun, Droplets, Recycle } from 'lucide-react'

const sustainabilityFeatures = [
  { icon: Leaf, key: 'green', color: 'emerald' },
  { icon: Sun, key: 'solar', color: 'amber' },
  { icon: Droplets, key: 'water', color: 'blue' },
  { icon: Recycle, key: 'recycle', color: 'teal' },
]

export function SustainabilitySection() {
  const t = useTranslations('home')

  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Accent line */}
            <div className="w-14 h-0.5 bg-gradient-to-r from-green-500 via-green-500/40 to-transparent" />

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-light tracking-tight mb-3 sm:mb-4">
                Construímos com responsabilidade
              </h2>
              <p className="text-base sm:text-lg text-light/70 leading-relaxed">
                Práticas sustentáveis, materiais ecológicos e eficiência energética em todos os projetos. 
                Compromisso com o futuro do planeta e do seu lar.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {sustainabilityFeatures.map((feature, index) => {
                const Icon = feature.icon
                const colorClasses = {
                  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
                  amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
                  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
                  teal: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
                }

                return (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2 sm:space-y-3"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center ${colorClasses[feature.color]}`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base text-light font-medium mb-1">
                        {feature.key === 'green' && 'Materiais Sustentáveis'}
                        {feature.key === 'solar' && 'Energia Solar'}
                        {feature.key === 'water' && 'Reuso de Água'}
                        {feature.key === 'recycle' && 'Reciclagem'}
                      </h3>
                      <p className="text-xs sm:text-sm text-light/60 leading-relaxed">
                        {feature.key === 'green' && 'Certificações ambientais e materiais ecológicos'}
                        {feature.key === 'solar' && 'Painéis solares e eficiência energética'}
                        {feature.key === 'water' && 'Sistemas de captação e reaproveitamento'}
                        {feature.key === 'recycle' && 'Gestão consciente de resíduos'}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Certifications */}
            <div className="glass-subtle rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-light font-medium">Certificações Verdes</h4>
              </div>
              <p className="text-sm text-light/70 leading-relaxed">
                Nossos empreendimentos buscam certificações como LEED e AQUA-HQE, 
                garantindo padrões internacionais de sustentabilidade.
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[24px] overflow-hidden glass">
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800"
                alt="Construção Sustentável"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 glass-form rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-light text-green-400">30%</div>
                <div className="text-sm text-light/80 leading-tight">
                  Redução no<br />consumo energético
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-4 -right-4 glass rounded-full px-6 py-3"
            >
              <div className="text-xs uppercase tracking-wider text-green-400 font-medium">
                Eco-Friendly
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
