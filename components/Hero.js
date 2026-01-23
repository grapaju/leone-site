'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/lib/useIsMobile'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const t = useTranslations('hero')
  const isMobile = useIsMobile()
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    // Só carrega o vídeo em desktop após um pequeno delay
    if (!isMobile) {
      const timer = setTimeout(() => setShowVideo(true), 100)
      return () => clearTimeout(timer)
    }
  }, [isMobile])

  const scrollToProjects = () => {
    document.getElementById('empreendimentos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Video para desktop, imagem para mobile */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          // Mobile: usa imagem estática para melhor performance
          <div className="relative w-full h-full">
            <Image
              src="/imagens/Balneário Camboriú/orla-bc-lateral-dia.jpg"
              alt="Balneário Camboriú"
              fill
              priority
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ) : (
          // Desktop: usa vídeo
          showVideo && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              preload="none"
            >
              <source
                src="/videos/bc_praia.mp4"
                type="video/mp4"
              />
            </video>
          )
        )}
        {/* Elegant Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-base/70 via-[#2B2116]/65 to-dark-base/80" />
        {/* Additional radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-base/50 via-transparent to-dark-base/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-8 md:pt-16">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-block glass-subtle rounded-full px-4 py-2 md:px-6 md:py-3 text-[0.6rem] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-gold font-medium">
              {t('badge')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-light leading-tight sm:leading-tight md:leading-tight px-4 sm:px-0">
            {t('title')}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-light/85 max-w-3xl mx-auto leading-relaxed sm:leading-loose px-4 sm:px-6">
            {t('subtitle')}
          </p>

          {/* CTA Button */}
          <div className="pt-4 px-4">
            <Button
              onClick={scrollToProjects}
              variant="glass"
              size="xl"
              className="w-full sm:w-auto border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/60"
            >
              {t('cta')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce duration-[2000ms]">
        <button 
          onClick={scrollToProjects}
          className="text-light/50 hover:text-gold transition-colors p-2 flex flex-col items-center gap-1"
          aria-label="Rolar para baixo"
        >
          <span className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">Explore</span>
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gold/80" strokeWidth={1} />
        </button>
      </div>
    </section>
  )
}
