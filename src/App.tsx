import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'

/**
 * Cada rota vira um chunk próprio: quem abre a home não baixa o catálogo
 * inteiro. O Layout fica fora do lazy porque é a casca de todas as páginas.
 */
const Home = lazy(() => import('./pages/Home'))
const Catalogo = lazy(() => import('./pages/Catalogo'))
const Peca = lazy(() => import('./pages/Peca'))
const Sobre = lazy(() => import('./pages/Sobre'))
const NaoEncontrada = lazy(() => import('./pages/NaoEncontrada'))

function App() {
  return (
    <Routes>
      {/* O Suspense mora dentro do Layout, em volta do <Outlet />, para que
          header e rodapé não pisquem a cada troca de rota. */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="peca/:slug" element={<Peca />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default App
