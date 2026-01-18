'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Link } from '@/lib/navigation'
import { useIsMobile } from '@/lib/useIsMobile'

// Conteúdo dos posts
const postsContent = {
  'por-que-investir-em-balneario-camboriu-2026': {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
    category: 'Investimentos',
    date: '2026-01-15',
    readTime: 5,
    titlePt: 'Por que investir em Balneário Camboriú em 2026?',
    excerptPt: 'Descubra as razões que fazem de Balneário Camboriú um dos mercados imobiliários mais promissores do Brasil.',
    contentPt: `
      <p className="text-lg leading-relaxed mb-8 text-light/90">
        Balneário Camboriú se consolida como um dos destinos mais procurados para investimentos imobiliários no Brasil. 
        Com uma valorização média de 120% nos últimos 10 anos, a cidade apresenta características únicas que a tornam 
        irresistível para investidores nacionais e internacionais.
      </p>

      <h2 className="text-3xl font-light text-light mb-6 mt-12">Localização Estratégica</h2>
      <p className="leading-relaxed mb-6 text-light/80">
        Situada no coração de Santa Catarina, Balneário Camboriú oferece fácil acesso às principais capitais do Sul e Sudeste. 
        A apenas 80km de Florianópolis e com infraestrutura rodoviária de primeira linha, a cidade conecta natureza e urbanismo 
        de forma única no país.
      </p>

      <h2 className="text-3xl font-light text-light mb-6 mt-12">Mercado Aquecido</h2>
      <p className="leading-relaxed mb-6 text-light/80">
        Com 98% de ocupação anual e demanda crescente de compradores da Argentina e Europa, o mercado imobiliário local 
        apresenta alta liquidez e rentabilidade. Os empreendimentos da Leone registram média de 85% de vendas ainda 
        na planta, demonstrando a confiança do mercado.
      </p>

      <div className="bg-glass rounded-2xl p-8 my-12 border border-gold/20">
        <h3 className="text-2xl font-light text-gold mb-4">Dados de Investimento</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-3xl font-light text-light mb-2">+120%</div>
            <div className="text-light/70">Valorização em 10 anos</div>
          </div>
          <div>
            <div className="text-3xl font-light text-light mb-2">98%</div>
            <div className="text-light/70">Ocupação anual média</div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light text-light mb-6 mt-12">Qualidade de Vida</h2>
      <p className="leading-relaxed mb-6 text-light/80">
        O IDH de Balneário Camboriú está entre os mais altos do país, resultado de investimentos consistentes em 
        infraestrutura, saúde, educação e segurança. A cidade oferece o que há de melhor em termos de qualidade 
        de vida, atraindo moradores e turistas o ano inteiro.
      </p>

      <h2 className="text-3xl font-light text-light mb-6 mt-12">Perspectivas para 2026</h2>
      <p className="leading-relaxed mb-6 text-light/80">
        Com novos investimentos em infraestrutura turística e a chegada de grandes redes hoteleiras internacionais, 
        2026 promete ser um ano de consolidação de Balneário Camboriú como destino premium. Para investidores, 
        este é o momento ideal para posicionar-se neste mercado em crescimento.
      </p>
    `
  },
  'tendencias-arquitetura-casas-praia': {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    category: 'Arquitetura',
    date: '2026-01-10',
    readTime: 7,
    titlePt: 'Tendências de arquitetura para casas de praia',
    excerptPt: 'Conheça as principais tendências de design que estão revolucionando os empreendimentos litorâneos.',
    contentPt: `
      <p className="text-lg leading-relaxed mb-8 text-light/90">
        A arquitetura contemporânea para casas de praia evolui constantemente, incorporando sustentabilidade, 
        tecnologia e design biofílico. Descubra as tendências que estão moldando os empreendimentos litorâneos 
        mais exclusivos do Brasil.
      </p>

      <h2 className="text-3xl font-light text-light mb-6 mt-12">Design Biofílico</h2>
      <p className="leading-relaxed mb-6 text-light/80">
        A integração entre arquitetura e natureza nunca esteve tão em evidência. Grandes aberturas, jardins internos 
        e o uso de materiais naturais criam ambientes que conectam os moradores com o ambiente costeiro, 
        proporcionando bem-estar e qualidade de vida únicos.
      </p>

      <h2 className="text-3xl font-light text-light mb-6 mt-12">Sustentabilidade Inteligente</h2>
      <p className="leading-relaxed mb-6 text-light/80">
        Energia solar, sistemas de captação de água da chuva e materiais eco-friendly são agora padrão em 
        empreendimentos de alto padrão. Além do benefício ambiental, essas tecnologias agregam valor e 
        reduzem custos operacionais significativamente.
      </p>

      <div className="bg-glass rounded-2xl p-8 my-12 border border-gold/20">
        <h3 className="text-2xl font-light text-gold mb-4">Principais Tendências</h3>
        <ul className="space-y-3 text-light/80">
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            Fachadas ventiladas com materiais naturais
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            Integração de espaços internos e externos
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            Automação residencial sustentável
          </li>
          <li className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            Piscinas naturais e paisagismo nativo
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-light text-light mb-6 mt-12">Tecnologia e Conforto</h2>
      <p className="leading-relaxed mb-6 text-light/80">
        Casas inteligentes com automação completa, climatização eficiente e sistemas de segurança avançados 
        são cada vez mais demandados. A tecnologia serve para simplificar a vida e maximizar o conforto 
        em residências de temporada.
      </p>
    `
  },
  'qualidade-vida-balneario-camboriu': {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200',
    category: 'Lifestyle',
    date: '2026-01-05',
    readTime: 4,
    titlePt: 'Qualidade de vida em Balneário Camboriú',
    excerptPt: 'Saiba por que Balneário Camboriú é considerada uma das melhores cidades para se viver no Sul do Brasil.',
    contentPt: `
      <p className="text-lg leading-relaxed mb-8 text-light/90">
        Balneário Camboriú não é apenas um destino turístico, mas também um local que oferece qualidade 
        de vida excepcional para seus moradores. Descubra os fatores que tornam esta cidade um verdadeiro 
        paraíso para quem busca equilibrio entre trabalho, lazer e bem-estar.
      </p>

      <h2 className="text-3xl font-light text-light mb-6 mt-12">Infraestrutura de Qualidade</h2>
      <p className="leading-relaxed mb-6 text-light/80">
        Com hospitais de referência, escolas de alto padrão e serviços públicos eficientes, Balneário Camboriú 
        oferece infraestrutura urbana comparável às melhores capitais do país. O investimento contínuo em 
        melhorias urbanas garante qualidade de vida crescente.
      </p>

      <h2 className="text-3xl font-light text-light mb-6 mt-12">Natureza e Urbanismo</h2>
      <p className="leading-relaxed mb-6 text-light/80">
        A cidade consegue o equilíbrio perfeito entre desenvolvimento urbano e preservação ambiental. 
        Praias limpas, parques bem cuidados e a proximidade com a Mata Atlântica criam um ambiente 
        único que combina comodidade urbana com natureza exuberante.
      </p>

      <div className="bg-glass rounded-2xl p-8 my-12 border border-gold/20">
        <h3 className="text-2xl font-light text-gold mb-4">Indicadores de Qualidade</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-3xl font-light text-light mb-2">0,845</div>
            <div className="text-light/70">Índice de Desenvolvimento Humano</div>
          </div>
          <div>
            <div className="text-3xl font-light text-light mb-2">92%</div>
            <div className="text-light/70">Satisfação dos moradores</div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light text-light mb-6 mt-12">Estilo de Vida Internacional</h2>
      <p className="leading-relaxed mb-6 text-light/80">
        A presença de uma comunidade internacional diversificada enriquece o ambiente cultural da cidade. 
        Restaurantes de alta gastronomia, eventos culturais e um calendário social movimentado fazem de 
        Balneário Camboriú um local vibrante para se viver.
      </p>
    `
  }
}

export function BlogPostContent({ slug }) {
  const isMobile = useIsMobile()
  const post = postsContent[slug]
  
  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-light mb-4">Post não encontrado</h1>
          <Button asChild variant="gold">
            <Link href="/blog">Voltar ao blog</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.titlePt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-base/70 via-dark-base/60 to-dark-base/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-base/80 via-transparent to-dark-base/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-16 pb-24">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <div className="mb-8">
              <Button asChild variant="glass" size="sm" className="mb-4">
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao blog
                </Link>
              </Button>
            </div>

            {/* Category and Meta */}
            <div className="flex items-center gap-4 text-light/60 text-sm mb-6">
              <Badge variant="gold" className="text-xs">
                {post.category}
              </Badge>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min de leitura</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-light mb-6 tracking-tight leading-tight">
              {post.titlePt}
            </h1>
            
            <p className="text-xl text-light/70 leading-relaxed mb-8">
              {post.excerptPt}
            </p>

            {/* Share Buttons */}
            <div className="flex items-center gap-4">
              <span className="text-light/60 text-sm">Compartilhar:</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-glass rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors">
                  <Facebook className="w-4 h-4 text-light/70" />
                </button>
                <button className="w-10 h-10 bg-glass rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors">
                  <Twitter className="w-4 h-4 text-light/70" />
                </button>
                <button className="w-10 h-10 bg-glass rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-light/70" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-32 relative" style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0)), rgba(58, 46, 34, 0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.article
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={isMobile ? undefined : { once: true }}
            transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-invert prose-xl prose-gold max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.contentPt }} />
            </div>
          </motion.article>

          {/* Call to Action */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={isMobile ? undefined : { once: true }}
            transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="glass rounded-[24px] p-8 md:p-12 text-center border border-gold/20">
              <h3 className="text-3xl font-light text-light mb-4">
                Interessado em nossos empreendimentos?
              </h3>
              <p className="text-light/80 mb-8 text-lg leading-relaxed">
                Conheça nossos projetos de alto padrão no litoral catarinense e descubra 
                oportunidades únicas de investimento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gold-solid" size="lg">
                  <Link href="/empreendimentos">
                    Ver empreendimentos
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link href="/sobre">
                    Sobre a Leone
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}