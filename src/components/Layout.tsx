import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Faq from './Faq'
import FloatWhatsapp from './FloatWhatsapp'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from './ScrollToTop'
import SecaoAvaliacoes, { SecaoMapa } from './SecaoGoogle'

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

        {/* Fecham toda página do site, nesta ordem: prova social, dúvidas e,
            por último, onde encontrar o atelier. */}
        <SecaoAvaliacoes />
        <Faq />
        <SecaoMapa />
      </main>

      <Footer />
      <FloatWhatsapp />
    </div>
  )
}
