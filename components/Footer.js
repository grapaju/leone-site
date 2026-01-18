'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

const footerLinks = {
  empresa: [
    { label: 'about', href: '/sobre' },
    { label: 'projects', href: '/empreendimentos' },
    { label: 'blog', href: '/blog' },
    { label: 'contact', href: '/contato' },
  ],
  legal: [
    { label: 'privacy', href: '/privacidade' },
    { label: 'terms', href: '/termos' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export function Footer() {
  const t = useTranslations('footer')
  const tContact = useTranslations('contact.info')
  const tNav = useTranslations('nav')

  return (
    <footer className="border-t border-gold/20 bg-dark-surface/50 backdrop-blur-sm">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light text-light mb-2">Leone Pavan</h3>
              <p className="text-sm text-light/60 leading-relaxed">
                {t('tagline')}
              </p>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-subtle flex items-center justify-center hover:bg-gold/10 hover:border-gold/30 transition-all group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-light/60 group-hover:text-gold transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gold mb-4 font-medium">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light/70 hover:text-gold transition-colors"
                  >
                    {tNav(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gold mb-4 font-medium">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-light/70">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>{tContact('addressValue')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-light/70">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+554733668848" className="hover:text-gold transition-colors">
                  {tContact('phoneValue')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-light/70">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:vendas@leonepavan.com.br" className="hover:text-gold transition-colors">
                  {tContact('emailValue')}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-light/70">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>{tContact('hoursValue')}</span>
              </li>
            </ul>
          </div>

          {/* Language & Newsletter */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gold mb-4 font-medium">
              Idioma
            </h4>
            <LanguageSwitcher />

            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-wider text-gold mb-4 font-medium">
                Newsletter
              </h4>
              <p className="text-xs text-light/60 mb-3">
                Receba novidades e lançamentos
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 px-3 py-2 bg-dark-base/50 border border-gold/20 rounded-lg text-sm text-light focus:outline-none focus:border-gold/40 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gold text-dark-base rounded-lg text-sm font-medium hover:bg-gold/90 transition-colors"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-light/50">
            <p>{t('rights')}</p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-gold transition-colors"
                >
                  {t(`legal.${link.label}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
