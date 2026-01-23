'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
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
  const [isVisible, setIsVisible] = useState(false)
  const accentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (accentRef.current) {
      observer.observe(accentRef.current)
    }

    return () => {
      if (accentRef.current) {
        observer.unobserve(accentRef.current)
      }
    }
  }, [])

  return (
    <section className="py-12 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Text Side */}
          <div className="space-y-4 sm:space-y-6 lg:order-1">
            {/* Accent line */}
            <div 
              ref={accentRef}
              className={`h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent transition-all duration-700 ease-out ${
                isVisible ? 'w-14 opacity-100' : 'w-0 opacity-0'
              }`}
            />

            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-light text-light tracking-tight leading-tight">
              Investir em <br />
              <span className="font-medium text-gold">Balneário Camboriú</span>
            </h2>

            <p className="text-base sm:text-lg text-light/70 leading-relaxed">
              Balneário Camboriú é um dos mercados imobiliários mais sólidos do Brasil. Infraestrutura, qualidade de vida e constante valorização tornam a cidade um polo estratégico para quem busca segurança patrimonial e retorno consistente. A Leone Pavan atua nesse cenário com projetos alinhados à vocação da cidade e às expectativas do investidor moderno.
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-6">
              {investmentFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.label}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-4 rounded-lg sm:rounded-xl glass-subtle hover:bg-gold/5 transition-colors group"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="text-[0.65rem] sm:text-xs text-light/70 text-center leading-tight">{feature.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="pt-2 sm:pt-4">
              <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
                <Link href="/empreendimentos">
                  Veja nossos empreendimentos
                </Link>
              </Button>
            </div>
          </div>

          {/* Carousel Side */}
          <div className="lg:order-2">
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
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 glass-form rounded-lg sm:rounded-xl p-3 sm:p-4 z-10">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-lg sm:text-2xl font-light text-gold">{cityImages[activeSlide]?.stats.left.value}</div>
                    <div className="text-[0.65rem] sm:text-xs text-light/70">{cityImages[activeSlide]?.stats.left.label}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg sm:text-2xl font-light text-gold">{cityImages[activeSlide]?.stats.right.value}</div>
                    <div className="text-[0.65rem] sm:text-xs text-light/70">{cityImages[activeSlide]?.stats.right.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
