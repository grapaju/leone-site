'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Building2,
  Calendar
} from 'lucide-react'

export function ContactPageContent() {
  const t = useTranslations('contact')
  const tInfo = useTranslations('contact.info')
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState(null)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkDevice()
    const resizeHandler = () => {
      clearTimeout(window.resizeTimeout)
      window.resizeTimeout = setTimeout(checkDevice, 150)
    }
    
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
      if (window.resizeTimeout) {
        clearTimeout(window.resizeTimeout)
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('loading')
    
    // Simular envio do formulário
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      
      setTimeout(() => setFormStatus(null), 5000)
    }, 1000)
  }

  // Configurações de animação otimizadas para mobile
  const getAnimationProps = (delay = 0) => {
    if (shouldReduceMotion || isMobile) {
      return {
        initial: { opacity: 0.8 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay: delay * 0.1 }
      }
    }
    
    return {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.6, delay: delay * 0.1 }
    }
  }

  const contactInfo = [
    {
      icon: Building2,
      title: 'Endereço Principal',
      description: 'Balneário Camboriú - SC',
      link: '#'
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: '+55 (47) 99999-9999',
      link: 'tel:+5547999999999'
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'contato@leonepavan.com.br',
      link: 'mailto:contato@leonepavan.com.br'
    },
    {
      icon: Clock,
      title: 'Horário',
      description: 'Seg - Sex: 8h às 18h',
      link: '#'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark via-dark-secondary to-black">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        
        <div className="relative container mx-auto px-4 sm:px-6">
          <motion.div 
            {...getAnimationProps()}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-light mb-4 sm:mb-6 tracking-tight">
              Entre em{' '}
              <span className="text-gold font-normal">Contato</span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-light/70 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atendê-lo e esclarecer todas as suas dúvidas sobre 
              nossos empreendimentos exclusivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
            
            {/* Contact Info */}
            <motion.div 
              {...getAnimationProps(1)}
              className="space-y-6 sm:space-y-8"
            >
              <div className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-light mb-4 sm:mb-6 tracking-tight">
                  Informações de{' '}
                  <span className="text-gold">Contato</span>
                </h2>
                <p className="text-base sm:text-lg text-light/70 leading-relaxed">
                  Nossa equipe especializada está à disposição para apresentar as melhores 
                  oportunidades de investimento em imóveis de alto padrão.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  
                  return (
                    <motion.div
                      key={index}
                      {...getAnimationProps(index + 2)}
                      className="group"
                    >
                      <div className={`glass rounded-[20px] p-5 sm:p-6 border border-gold/20 h-full 
                        transition-all duration-300 ${!shouldReduceMotion ? 'hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/20' : ''}`}>
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold/20 to-gold/10 
                                        rounded-2xl flex items-center justify-center border border-gold/30">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-medium text-light mb-1 sm:mb-2 group-hover:text-gold transition-colors">
                              {info.title}
                            </h3>
                            <p className="text-light/70 text-xs sm:text-sm leading-relaxed break-words">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              {...getAnimationProps(3)}
              className="glass rounded-[24px] p-8 md:p-10 border border-gold/20"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-light text-light mb-3 tracking-tight">
                  Envie sua mensagem
                </h3>
                <p className="text-light/70">
                  Preencha o formulário abaixo e retornaremos o seu contato em até 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-light/80">
                      Nome completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-light 
                                 placeholder-light/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 
                                 transition-all backdrop-blur-sm"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-light/80">
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light/40" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-light 
                                 placeholder-light/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 
                                 transition-all backdrop-blur-sm"
                        placeholder="(47) 99999-9999"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-light/80">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light/40" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-light 
                               placeholder-light/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 
                               transition-all backdrop-blur-sm"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-light/80">
                    Mensagem
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-light/40" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-light 
                               placeholder-light/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50 
                               transition-all resize-none backdrop-blur-sm"
                      placeholder="Conte-nos sobre seu interesse em nossos empreendimentos..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full md:w-auto bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold text-black 
                             font-medium py-3 px-8 rounded-xl transition-all duration-300 
                             hover:shadow-xl hover:shadow-gold/20 disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Send className="w-5 h-5" />
                        Enviar mensagem
                      </div>
                    )}
                  </Button>
                </div>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Mensagem enviada com sucesso! Retornaremos em breve.</span>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">Erro ao enviar mensagem. Tente novamente.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}