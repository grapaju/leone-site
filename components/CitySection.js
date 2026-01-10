'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { Button } from '@/components/ui/button'
import { Waves, Mountain, UtensilsCrossed, Shield, Palmtree, Building2, TrendingUp, Users, Calendar, Crown } from 'lucide-react'
import { Link } from '@/lib/navigation'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const cityImages = [
  {
    src: '/imagens/Balneário Camboriú/orla-bc-lateral-dia.jpg',
    alt: 'Orla de Balneário Camboriú - Vista do skyline durante o dia',
    stats: {
      left: { value: '+120%', label: 'em 10 anos' },
      right: { value: 'Valorização', label: 'imobiliária média' }
    }
  },
  {
    src: '/imagens/Balneário Camboriú/icone-bc-unipraias.jpg',
    alt: 'Bondinho Unipraias - Vista da Mata Atlântica preservada',
    stats: {
      left: { value: '98%', label: 'de ocupação anual' },
      right: { value: 'Alta demanda', label: 'para morar e alugar' }
    }
  },
  {
    src: '/imagens/Balneário Camboriú/orla-bc-lateral-tarde.jpg',
    alt: 'Skyline de Balneário Camboriú ao pôr do sol',
    stats: {
      left: { value: 'Perfil', label: 'internacional' },
      right: { value: 'Compradores', label: 'Brasil, Argentina e Europa' }
    }
  },
  {
    src: '/imagens/Balneário Camboriú/skyline-bc-barra-sul.jpg',
    alt: 'Vista aérea panorâmica de Balneário Camboriú',
    stats: {
      left: { value: 'IDH', label: 'entre os mais altos' },
      right: { value: 'Infraestrutura', label: 'saúde e segurança' }
    }
  },
]

const investmentFeatures = [
  { icon: TrendingUp, label: 'Alta valorização' },
  { icon: Building2, label: 'Mercado aquecido' },
  { icon: Calendar, label: 'Turismo anual' },
  { icon: Crown, label: 'Infraestrutura premium' },
  { icon: Waves, label: 'Praias urbanizadas' },
  { icon: Users, label: 'Público A e A+' },
]

export function CitySection() {
  const t = useTranslations('home')
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="py-16 sm:py-24 md:py-32 section-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:order-1"
          >
            {/* Accent line */}
            <div className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-light tracking-tight">
              Investir em Balneário Camboriú
            </h2>

            <p className="text-base sm:text-lg text-light/70 leading-relaxed">
              O investimento mais inteligente do litoral brasileiro, com retorno comprovado e potencial crescente.
            </p>

            <p className="text-sm sm:text-base text-light/80 leading-relaxed">
              Balneário Camboriú oferece o que todo investidor busca: valorização consistente, alta demanda de locação, 
              perfil internacional de compradores e infraestrutura de primeira linha que garante liquidez e rentabilidade.
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
              {investmentFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl glass-subtle hover:bg-gold/5 transition-colors group"
                  >
                    <Icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="text-xs text-light/70 text-center">{feature.label}</span>
                  </motion.div>
                )
              })}
            </div>

            <div className="pt-4">
              <Button asChild variant="gold" size="lg">
                <Link href="/empreendimentos">
                  Veja nossos empreendimentos
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Carousel Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:order-2"
          >
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden glass">
              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-gold/30',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-gold',
                }}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                loop={true}
                className="w-full h-full"
              >
                {cityImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-base/60 to-transparent" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Dynamic info card */}
              <div className="absolute bottom-6 left-6 right-6 glass-form rounded-xl p-4 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-light text-gold">{cityImages[activeSlide]?.stats.left.value}</div>
                    <div className="text-xs text-light/70">{cityImages[activeSlide]?.stats.left.label}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-gold">{cityImages[activeSlide]?.stats.right.value}</div>
                    <div className="text-xs text-light/70">{cityImages[activeSlide]?.stats.right.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
