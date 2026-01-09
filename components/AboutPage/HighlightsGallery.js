'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function HighlightsGallery() {
  const images = [
    {
      src: '/imagens/Mirante do Atlantico/Edificio-Mirante-do-Atlantico-Balneario-Camboriu-600x450.jpg',
      alt: 'Mirante do Atlântico',
    },
    // Adicione mais imagens quando disponíveis, por exemplo:
    // { src: '/imagens/Palazzo del Mare/alguma-foto.jpg', alt: 'Palazzo del Mare' },
  ]

  if (images.length === 0) return null

  return (
    <section className="py-24 md:py-28 px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative rounded-[20px] overflow-hidden glass"
            >
              <Image src={img.src} alt={img.alt} width={800} height={600} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-base/60 via-dark-base/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-light/90 tracking-wide text-sm">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
