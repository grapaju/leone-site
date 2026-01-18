'use client'

import { useEffect } from 'react'

/**
 * Componente que otimiza a performance no mobile
 * desabilitando animações desnecessárias
 */
export function MobileOptimizer() {
  useEffect(() => {
    // Verifica se está no mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    
    if (isMobile) {
      // Adiciona classe ao body para otimizações específicas
      document.body.classList.add('mobile-optimized')
      
      // Desabilita animações do Framer Motion no mobile
      if (typeof window !== 'undefined') {
        // Desabilita reduceMotion do Framer Motion
        const style = document.createElement('style')
        style.innerHTML = `
          @media (max-width: 768px) {
            * {
              animation-duration: 0s !important;
              animation-delay: 0s !important;
              transition-duration: 0s !important;
            }
          }
        `
        document.head.appendChild(style)
      }
    }
  }, [])

  return null
}
