import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Volta ao topo a cada navegação — comportamento esperado num catálogo. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
