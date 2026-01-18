'use client'

import { useEffect, useState } from 'react'

export function useIsMobile(breakpointPx = 768) {
  // Inicia como undefined para evitar mismatch SSR
  const [isMobile, setIsMobile] = useState(undefined)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const media = window.matchMedia(`(max-width: ${breakpointPx}px)`) 

    const update = () => setIsMobile(media.matches)
    update()

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update)
      return () => media.removeEventListener('change', update)
    }

    // Fallback para navegadores antigos
    media.addListener(update)
    return () => media.removeListener(update)
  }, [breakpointPx])

  // Retorna false durante SSR/primeira renderização para evitar mismatch
  return mounted ? isMobile : false
}
