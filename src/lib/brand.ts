/**
 * Constantes da marca — fonte única de verdade.
 * Tudo que é "identidade" ou "contato" mora aqui; nenhum componente
 * deve hardcodar número, @ ou nome do atelier.
 */
export const brand = {
  nome: 'Simone Sá',
  subtitulo: 'Atelier',

  /** TODO: preencher com o @ real do Instagram. */
  instagram: '@simonesa.atelier',

  /**
   * TODO: preencher com o número real.
   * Formato internacional, apenas dígitos: 55 + DDD + número.
   * Ex.: 5511987654321
   */
  whatsapp: '5500000000000',

  /** TODO: preencher (opcionais — deixe vazio para ocultar no rodapé). */
  cidade: '',
  email: '',
} as const

/** Título usado como sufixo em todas as páginas. */
export const TITULO_BASE = 'Simone Sá Atelier — Alta-costura sob medida'

/**
 * TODO: trocar pelo domínio real após o deploy.
 * Usado nas URLs canônicas e nas imagens de Open Graph, que precisam ser
 * absolutas — robô de preview não resolve caminho relativo.
 * Sem barra no final.
 */
export const SITE_URL = 'https://simone-sa-atelier.vercel.app'

export const navegacao = [
  { href: '/', rotulo: 'Início' },
  { href: '/catalogo', rotulo: 'Catálogo' },
  { href: '/sobre', rotulo: 'Sobre' },
] as const

/** URL do perfil no Instagram, derivada do @. */
export const linkInstagram = `https://instagram.com/${brand.instagram.replace(/^@/, '')}`

/**
 * Monta o link de conversa no WhatsApp com mensagem pré-preenchida.
 *
 * @example
 * linkWhatsApp('Olá! Tenho interesse na peça Adèle.')
 * // → https://wa.me/5500000000000?text=Ol%C3%A1!%20Tenho%20interesse...
 */
export function linkWhatsApp(mensagem: string): string {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(mensagem)}`
}
