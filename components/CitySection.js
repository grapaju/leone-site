'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { Button } from '@/components/ui/button'
import { Waves, Mountain, UtensilsCrossed, Shield, Palmtree, Building2 } from 'lucide-react'
import { Link } from '@/lib/navigation'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const cityImages = [
  {
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
    alt: 'Praia de Balneário Camboriú',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    alt: 'Mata Atlântica',
  },
  {
    src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200',
    alt: 'Skyline noturno',
  },
]

const amenities = [
  { icon: Shield, label: 'Segurança' },
  { icon: UtensilsCrossed, label: 'Gastronomia' },
  { icon: Palmtree, label: 'Lazer' },
  { icon: Waves, label: 'Praias' },
  { icon: Mountain, label: 'Natureza' },
  { icon: Building2, label: 'Infraestrutura' },
]

export function CitySection() {
  const t = useTranslations('home')

  return (
    <section className="py-24 md:py-32 section-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

            <h2 className="text-4xl md:text-5xl font-light text-light tracking-tight">
              Viver em Balneário Camboriú
            </h2>

            <p className="text-lg text-light/70 leading-relaxed">
              Um dos litorais mais valorizados do Brasil, com qualidade de vida e investimentos sólidos.
            </p>

            <p className="text-light/80 leading-relaxed">
              Localizada no coração de Santa Catarina, Balneário Camboriú combina belezas naturais com infraestrutura cosmopolita. 
              Uma cidade que oferece o melhor dos dois mundos: tranquilidade praiana e todas as comodidades urbanas.
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon
                return (
                  <motion.div
                    key={amenity.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl glass-subtle hover:bg-gold/5 transition-colors group"
                  >
                    <Icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="text-xs text-light/70 text-center">{amenity.label}</span>
                  </motion.div>
                )
              })}
            </div>

            <div className="pt-4">
              <Button asChild variant="gold" size="lg">
                <Link href="/cidade">
                  Explore a cidade
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

              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6 glass-form rounded-xl p-4 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-light text-gold">R$ 12k+</div>
                    <div className="text-xs text-light/70">Valorização média m²</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-gold">98%</div>
                    <div className="text-xs text-light/70">Ocupação anual</div>
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
