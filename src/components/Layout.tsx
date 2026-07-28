import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Faq from './Faq'
import FloatWhatsapp from './FloatWhatsapp'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from './ScrollToTop'
import SecaoGoogle from './SecaoGoogle'

/** Reserva altura durante o carregamento do chunk, para o rodapé não saltar. */
function Carregando() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center" role="status">
      <span className="sr-only">Carregando…</span>
      <span aria-hidden className="filete animate-pulse" />
    </div>
  )
}

/** Casca do site: header sticky, conteúdo da rota, rodapé e contato flutuante. */
export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-off-white">
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Suspense fallback={<Carregando />}>
          <Outlet />
        </Suspense>

        {/* Prova social, localização e dúvidas: fecham toda página do site. */}
        <SecaoGoogle />
        <Faq />
      </main>

      <Footer />
      <FloatWhatsapp />
    </div>
  )
}
