import { useLocation } from 'react-router-dom'

import { SITE_URL, TITULO_BASE } from '../lib/brand'

interface SeoProps {
  /** Omita na home para usar o título base puro. */
  titulo?: string
  descricao: string
  /** Caminho absoluto a partir da raiz, ex.: "/pecas/placeholder-01.webp". */
  imagem?: string
}

/**
 * Metadados por rota.
 *
 * O React 19 eleva `<title>` e `<meta>` para o <head> sozinho — por isso não há
 * react-helmet aqui. Vale saber do limite: isso roda no cliente, então serve ao
 * Google (que executa JS), mas NÃO aos robôs de preview do WhatsApp e do
 * Facebook, que não executam JS. As tags de Open Graph que eles leem são as
 * estáticas do index.html. Ver a nota sobre pré-renderização no README.
 */
export default function Seo({ titulo, descricao, imagem = '/og-image.jpg' }: SeoProps) {
  const { pathname } = useLocation()

  const tituloFinal = titulo ? `${titulo} | ${TITULO_BASE}` : TITULO_BASE
  const urlCanonica = `${SITE_URL}${pathname}`
  const urlImagem = `${SITE_URL}${imagem}`

  return (
    <>
      <title>{tituloFinal}</title>
      <meta name="description" content={descricao} />
      <link rel="canonical" href={urlCanonica} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={TITULO_BASE} />
      <meta property="og:title" content={tituloFinal} />
      <meta property="og:description" content={descricao} />
      <meta property="og:url" content={urlCanonica} />
      <meta property="og:image" content={urlImagem} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={tituloFinal} />
      <meta name="twitter:description" content={descricao} />
      <meta name="twitter:image" content={urlImagem} />
    </>
  )
}
