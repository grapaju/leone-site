'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Calendar, 
  Building2, 
  Car, 
  Bed, 
  Bath, 
  Maximize,
  Eye,
  Home,
  ChevronRight,
  Camera,
  CheckCircle
} from 'lucide-react'
import { Link } from '@/lib/navigation'
import { useState } from 'react'

// Dados dos projetos
const projectsData = {
  miranteAtlantico: {
    year: 2012,
    status: 'completed',
    progress: 100,
    bedrooms: '3',
    area: '119-140',
    parking: '2-4',
    floors: '15 pavimentos',
    unitsPerFloor: '2 por andar',
    totalUnits: '30 apartamentos',
    address: 'Rua José Venâncio dos Santos, 100',
    neighborhood: 'Pioneiros (Pontal Norte)',
    distanceBeach: '300m da praia',
    images: [
      '/imagens/Mirante do Atlantico/Edificio-Mirante-do-Atlantico-Balneario-Camboriu-600x450.jpg',
      '/imagens/Mirante do Atlantico/fachada-mirante-do-atlantico-001.png',
      '/imagens/Mirante do Atlantico/fachada-lateral-dia.jpg',
      '/imagens/Mirante do Atlantico/fachada-frontal-dia.jpg',
      '/imagens/Mirante do Atlantico/fachada-frontal-horizontal.jpg'
    ],
    plantImages: [
      '/imagens/Mirante do Atlantico/planta-areas-comuns.jpg',
      '/imagens/Mirante do Atlantico/planta-apartamento-3-quartos.jpg',
      '/imagens/Mirante do Atlantico/planta-piso-superior.jpg',
      '/imagens/Mirante do Atlantico/planta-duplex.jpg'
    ],
    highlights: [
      { icon: MapPin, title: 'Vista Exuberante', description: '300m da praia com vista para o mar' },
      { icon: Building2, title: 'Alto Padrão Leone', description: 'Qualidade construtiva premium' },
      { icon: Car, title: 'Até 4 Vagas', description: 'Garagem demarcada' },
      { icon: Home, title: 'Lazer Completo', description: 'Infraestrutura para toda família' },
    ],
    amenities: [
      'Piscina adulta e infantil com raia',
      'Piscina com churrasqueira', 
      'Salão de festas',
      'Sala de jogos',
      'Espaço fitness',
      'Brinquedoteca',
      'Playground',
      'Home cinema'
    ],
    description: {
      main: 'O Mirante do Atlântico é um empreendimento residencial de alto padrão desenvolvido pela Leone Construtora, entregue em 2012. Localizado no tranquilo bairro Pioneiros (Pontal Norte), a apenas 300 metros da praia, oferece vista exuberante para o mar em uma das áreas mais valorizadas de Balneário Camboriú.',
      building: 'Torre única com 15 pavimentos e apenas 2 apartamentos por andar, garantindo privacidade e exclusividade. Próximo à roda-gigante FG Big Wheel e à Praia Central, em uma localização estratégica que combina tranquilidade residencial com fácil acesso aos principais pontos da cidade.',
      units: 'Apartamentos típicos com 3 quartos (sendo 1 suíte), área privativa entre 119 m² e 140 m², sacada com churrasqueira e até 4 vagas de garagem. Muitas unidades são oferecidas mobiliadas ou semi-mobiliadas.'
    }
  },
  palazzoDelMare: {
    year: 2018,
    status: 'completed',
    progress: 100,
    bedrooms: '2-3',
    area: '85-140',
    parking: '1-2',
    images: [
      'https://leonepavan.com.br/wp-content/uploads/2019/08/CL_PDM_HALL_R00-copy.jpg',
      '/imagens/Palazzo del Mare/fachada-palazzo-del-mare-001.png',
    ],
    highlights: [
      { icon: MapPin, title: '27 Passos da Praia', description: 'Bombinhas/SC' },
      { icon: Building2, title: 'Design Exclusivo', description: 'Arquitetura moderna' },
      { icon: Eye, title: 'Vista Privilegiada', description: 'Frente para o mar' },
      { icon: CheckCircle, title: 'Entregue', description: '100% concluído' },
    ]
  },
  portalMunicipios: {
    year: 2014,
    status: 'completed',
    progress: 100,
    bedrooms: '2-3',
    area: '90-150',
    parking: '1-2',
    images: [
      '/imagens/Portal do Municipios/fachada-portal-dos-municipios-001.png',
    ],
    highlights: [
      { icon: MapPin, title: 'Centro da Cidade', description: 'Localização estratégica' },
      { icon: Building2, title: 'Segurança Total', description: 'Portaria 24h' },
      { icon: Car, title: 'Estacionamento', description: 'Garagem coberta' },
      { icon: Home, title: 'Bem-estar', description: 'Espaços de convivência' },
    ]
  },
  residencialNacoes: {
    year: 2005,
    status: 'completed',
    progress: 100,
    bedrooms: '3',
    area: '120-150',
    parking: '1',
    floors: '3 casas conjugadas',
    unitsPerFloor: '6 residências',
    totalUnits: '6 residências',
    address: 'Bairro das Nações',
    neighborhood: 'Nações',
    distanceBeach: '1km da praia',
    images: [
      '/imagens/Residencial das Nacoes/fachada-residencial-nacoes-frontal.jpg',
      '/imagens/Residencial das Nacoes/fachada-residencial-nacoes-lateral.jpg'
    ],
    highlights: [
      { icon: MapPin, title: 'Bairro das Nações', description: 'Área nobre e residencial' },
      { icon: Building2, title: 'Casas Conjugadas', description: '3 casas geminadas duplex' },
      { icon: Home, title: 'Privacidade Total', description: 'Isolamento entre unidades' },
      { icon: CheckCircle, title: 'Entregue 2005', description: 'Mais de 20 anos - 100% vendido' },
    ],
    amenities: [
      'Churrasqueira individual',
      'Sala multiuso',
      'Garagem individual privativa',
      'Instalações para água quente',
      'Sacadas nos dormitórios',
      'Ventilação cruzada',
      'Dois ambientes de sala',
      'Suíte master'
    ],
    description: {
      main: 'O Residencial das Nações é um empreendimento residencial exclusivo de alto padrão desenvolvido pela Leone Construtora (Leone Pavan Empreendimentos), entregue em fevereiro de 2005. Localizado na área nobre do Bairro das Nações, Balneário Camboriú - SC, bairro predominantemente residencial, tranquilo, com fácil acesso à Avenida do Estado, comércio local e proximidade à praia (cerca de 1 km).',
      building: 'Conjunto exclusivo com apenas 6 residências distribuídas em 3 casas conjugadas (geminadas duplex), projetado para máxima privacidade com total isolamento entre as unidades. Excelente padrão arquitetônico, com condições privilegiadas de insolação natural e ventilação cruzada. Obra totalmente concluída e entregue há mais de 20 anos (todas as etapas 100%: fundação, estrutura, alvenaria, esquadrias, instalações, pintura, acabamento e fachada). 100% vendido.',
      units: 'Unidades amplas e confortáveis com suíte-master + 2 dormitórios (total de 3 dormitórios, com sacadas nos dormitórios), dois ambientes de sala (estar e jantar), sala multiuso, churrasqueira, garagem individual privativa, instalações para água quente e privacidade total.',
      legacy: 'O Residencial das Nações destaca-se pela exclusividade, qualidade de construção artesanal da Leone e foco em conforto familiar em um bairro consolidado e valorizado de Balneário Camboriú. É um dos primeiros empreendimentos da empresa, marcando o início de sua trajetória em projetos residenciais de alto padrão.'
    }
  },
  vilaEsperanca: {
    year: 2010,
    status: 'completed',
    progress: 100,
    bedrooms: '2',
    area: '80-120',
    parking: '1-2',
    floors: 'Vila térrea',
    unitsPerFloor: '8 casas',
    totalUnits: '8 casas térreas',
    address: 'Bairro Nova Esperança',
    neighborhood: 'Nova Esperança',
    distanceBeach: '4-5km do centro e praia',
    images: [
      '/imagens/Vila Esperança/vila-esperanca-fachada-001.jpg',
      '/imagens/Vila Esperança/vila-esperanca-area-interna-001.jpg',
    ],
    highlights: [
      { icon: MapPin, title: 'Nova Esperança', description: 'Região tranquila e em expansão' },
      { icon: Building2, title: 'Vila Tradicional', description: 'Condomínio fechado com 8 casas' },
      { icon: Car, title: 'Garagem Descoberta', description: '1-2 vagas por casa' },
      { icon: Home, title: 'Pátio Individual', description: 'Churrasqueira própria' },
    ],
    amenities: [
      'Pátio interno individual com churrasqueira',
      'Pátio central com paisagismo',
      'Interfone + portal eletrônico',
      'Energia e gás individuais',
      'Vidros temperados',
      'Garagem descoberta',
      'Condomínio fechado'
    ],
    description: {
      main: 'O Vila Esperança é um empreendimento residencial exclusivo de alto padrão desenvolvido pela Leone Construtora (Leone Pavan Empreendimentos), já entregue e 100% vendido. Localizado no Bairro Nova Esperança, Balneário Camboriú - SC, uma região mais residencial e afastada do centro, com acesso à BR-101 e proximidade a áreas como Barra Sul/Taquaras (cerca de 4-5 km do centro e da praia principal), oferecendo um ambiente tranquilo e em expansão.',
      building: 'Condomínio fechado no estilo vila tradicional, com 8 casas térreas exclusivas. Projeto que inspira aconchego e sensação de pertencimento, combinando o charme acolhedor de uma vila com o conforto moderno. Obra totalmente concluída (todas as etapas 100%: fundação, estrutura, alvenaria, esquadrias, instalações, pintura, acabamento e fachada).',
      units: 'Unidades térreas com 2 dormitórios, pátio interno individual com churrasqueira, 1 ou 2 vagas de garagem descobertas, energia e gás individuais, e vidros temperados.',
      legacy: 'O Vila Esperança destaca-se pela exclusividade (apenas 8 unidades), privacidade, qualidade de construção artesanal da Leone e localização em um bairro consolidado para quem busca tranquilidade longe do agito central de Balneário Camboriú.'
    }
  }
}

function ProjectHero({ projectId, projectData }) {
  const t = useTranslations('projectsPage')

  return (
    <section className="relative min-h-screen pt-20 section-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={projectData.images[0]}
          alt={t(`projects.${projectId}.name`)}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-base/70 via-dark-base/60 to-dark-base/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-base/80 via-transparent to-dark-base/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-24">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm text-light/70 mb-8"
        >
          <Link href="/" className="hover:text-light transition-colors">Início</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/empreendimentos" className="hover:text-light transition-colors">Empreendimentos</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-light">{t(`projects.${projectId}.name`)}</span>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant={projectData.status} className="mb-6">
              {t(`status.${projectData.status}`)}
            </Badge>

            <h1 className="text-5xl md:text-6xl font-light text-light mb-4 tracking-tight">
              {t(`projects.${projectId}.name`)}
            </h1>

            <div className="flex items-center gap-2 text-xl text-light/80 mb-8">
              <MapPin className="w-5 h-5 text-gold" />
              <span>{t(`projects.${projectId}.location`)}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="glass-subtle rounded-2xl p-4 text-center">
                <Bed className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-sm text-light/60">Quartos</div>
                <div className="text-lg font-medium text-light">{projectData.bedrooms}</div>
              </div>
              <div className="glass-subtle rounded-2xl p-4 text-center">
                <Maximize className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-sm text-light/60">Área (m²)</div>
                <div className="text-lg font-medium text-light">{projectData.area}</div>
              </div>
              <div className="glass-subtle rounded-2xl p-4 text-center">
                <Car className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-sm text-light/60">Vagas</div>
                <div className="text-lg font-medium text-light">{projectData.parking}</div>
              </div>
              <div className="glass-subtle rounded-2xl p-4 text-center">
                <Calendar className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-sm text-light/60">Entrega</div>
                <div className="text-lg font-medium text-light">{projectData.year}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {projectData.images[1] && (
              <div className="glass-subtle rounded-3xl overflow-hidden p-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={projectData.images[1]}
                    alt="Vista adicional"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectHighlights({ projectData }) {
  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent mx-auto mb-6" />
          <h2 className="text-4xl font-light text-light mb-4">Destaques do Empreendimento</h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            Conheça os principais diferenciais que tornam este projeto único
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectData.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-subtle rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <highlight.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-light mb-3">{highlight.title}</h3>
              <p className="text-light/70">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectAbout({ projectId, projectData }) {
  const t = useTranslations('projectsPage')
  const isDetailed = projectData.description && typeof projectData.description === 'object'

  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent mb-6" />
            <h2 className="text-4xl font-light text-light mb-6">Sobre o Empreendimento</h2>
            
            {isDetailed ? (
              <div className="space-y-6 text-lg text-light/80 leading-relaxed">
                <p>{projectData.description.main}</p>
                <p>{projectData.description.building}</p>
                <p>{projectData.description.units}</p>
                {projectData.description.legacy && (
                  <div className="mt-8 glass-subtle rounded-2xl p-6 border border-gold/20">
                    <h3 className="text-xl font-medium text-gold mb-4">Legado e Importância</h3>
                    <p className="text-light/80 leading-relaxed">{projectData.description.legacy}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4 text-lg text-light/80 leading-relaxed">
                <p>{t(`projects.${projectId}.description`)}</p>
                <p>
                  Desenvolvido com materiais de primeira linha e tecnologia de ponta, 
                  este empreendimento representa o que há de mais moderno em construção civil. 
                  Cada detalhe foi pensado para proporcionar conforto, segurança e valorização.
                </p>
              </div>
            )}
            
            {projectData.address && (
              <div className="mt-8 glass-subtle rounded-2xl p-6">
                <h3 className="text-xl font-medium text-light mb-4">Localização Detalhada</h3>
                <div className="space-y-2 text-light/70">
                  <p><strong>Endereço:</strong> {projectData.address}</p>
                  <p><strong>Bairro:</strong> {projectData.neighborhood}</p>
                  <p><strong>Distância da praia:</strong> {projectData.distanceBeach}</p>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-subtle rounded-2xl p-6">
                <Building2 className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-medium text-light mb-2">
                  {projectData.floors ? 'Edifício' : 'Arquitetura'}
                </h3>
                <p className="text-light/70">
                  {projectData.floors || 'Design moderno e funcional'}
                </p>
              </div>
              <div className="glass-subtle rounded-2xl p-6">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-medium text-light mb-2">Qualidade</h3>
                <p className="text-light/70">Padrão Leone Premium</p>
              </div>
              <div className="glass-subtle rounded-2xl p-6">
                <MapPin className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-medium text-light mb-2">Localização</h3>
                <p className="text-light/70">
                  {projectData.distanceBeach || 'Região valorizada'}
                </p>
              </div>
              <div className="glass-subtle rounded-2xl p-6">
                <Home className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-medium text-light mb-2">
                  {projectData.unitsPerFloor ? 'Privacidade' : 'Infraestrutura'}
                </h3>
                <p className="text-light/70">
                  {projectData.unitsPerFloor || 'Área de lazer completa'}
                </p>
              </div>
            </div>
            
            {projectData.totalUnits && (
              <div className="glass-subtle rounded-2xl p-6">
                <h3 className="text-xl font-medium text-light mb-4">Dados Técnicos</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-light/60">Total de unidades:</span>
                    <span className="text-light">{projectData.totalUnits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-light/60">Por andar:</span>
                    <span className="text-light">{projectData.unitsPerFloor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-light/60">Área privativa:</span>
                    <span className="text-light">{projectData.area} m²</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectAmenities({ projectData }) {
  if (!projectData.amenities) return null

  return (
    <section className="py-24 section-dark border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent mx-auto mb-6" />
          <h2 className="text-4xl font-light text-light mb-4">Áreas de Lazer</h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            Infraestrutura completa para lazer e convivência familiar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {projectData.amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass-subtle rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-gold/10 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <p className="text-light/90 text-sm leading-relaxed">{amenity}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectGallery({ projectData }) {
  const [activeTab, setActiveTab] = useState('photos')

  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-14 h-0.5 bg-gradient-to-r from-gold via-gold/40 to-transparent mx-auto mb-6" />
          <h2 className="text-4xl font-light text-light mb-4">Galeria & Plantas</h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto mb-8">
            Explore o empreendimento através de imagens e plantas baixas detalhadas
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'glass text-gold border border-gold/30'
                  : 'glass-subtle text-light/70 hover:text-light border border-transparent hover:border-white/20'
              }`}
            >
              <Camera className="w-4 h-4 mr-2 inline" />
              Fotos
            </button>
            <button
              onClick={() => setActiveTab('plans')}
              className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                activeTab === 'plans'
                  ? 'glass text-gold border border-gold/30'
                  : 'glass-subtle text-light/70 hover:text-light border border-transparent hover:border-white/20'
              }`}
            >
              <Building2 className="w-4 h-4 mr-2 inline" />
              Plantas
            </button>
          </div>
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === 'photos' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.images?.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-subtle rounded-2xl overflow-hidden p-4 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`Imagem ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projectData.plantImages?.map((plantImage, index) => (
                <motion.div
                  key={`plant-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-subtle rounded-2xl overflow-hidden p-4 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={plantImage}
                      alt={`Planta ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-light mb-2">
                      {index === 0 && 'Áreas Comuns'}
                      {index === 1 && 'Apartamento Tipo - 3 Quartos'}
                      {index === 2 && 'Piso Superior - 133,87m²'}
                      {index === 3 && 'Apartamento Duplex - 258,24m²'}
                    </h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-light/60">Área:</span>
                      <span className="text-light">
                        {index === 0 && 'Área de Lazer'}
                        {index === 1 && '119-140 m²'}
                        {index === 2 && '133,87 m²'}
                        {index === 3 && '258,24 m²'}
                      </span>
                    </div>
                    {(index === 1 || index === 3) && (
                      <>
                        <div className="flex justify-between text-sm">
                          <span className="text-light/60">Quartos:</span>
                          <span className="text-light">3 (1 suíte)</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-light/60">Vagas:</span>
                          <span className="text-light">{index === 1 ? '2-4 vagas' : '3 vagas'}</span>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )) || 
              /* Fallback para quando não há plantImages */
              [1, 2].map((item) => (
                <motion.div
                  key={`plan-${item}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item * 0.2 }}
                  className="glass-subtle rounded-2xl overflow-hidden p-6 border-2 border-dashed border-gold/20"
                >
                  <div className="relative aspect-[4/3] rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Building2 className="w-12 h-12 text-gold/40 mx-auto mb-3" />
                      <p className="text-light/60 text-lg font-medium mb-1">Planta Tipo {item}</p>
                      <p className="text-light/40 text-sm">Em breve disponível</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export function ProjectDetailContent({ projectId }) {
  const projectData = projectsData[projectId]
  
  if (!projectData) {
    return <div>Projeto não encontrado</div>
  }

  return (
    <main>
      <ProjectHero projectId={projectId} projectData={projectData} />
      <ProjectHighlights projectData={projectData} />
      <ProjectAbout projectId={projectId} projectData={projectData} />
      <ProjectAmenities projectData={projectData} />
      <ProjectGallery projectData={projectData} />
    </main>
  )
}