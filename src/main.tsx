import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './index.css'

/**
 * As tags de SEO do index.html existem para os robôs que NÃO executam
 * JavaScript (preview de link do WhatsApp, Facebook). A partir daqui quem
 * manda é o <Seo>, que gera as tags por rota.
 *
 * Sem esta limpeza o documento fica com duas <meta name="description"> — e a
 * estática, por vir primeiro, é a que o Google considera, anulando as
 * descrições de cada página.
 */
document.querySelectorAll('[data-seo-estatico]').forEach((tag) => tag.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
