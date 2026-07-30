/**
 * Constantes da marca — fonte única de verdade.
 * Tudo que é "identidade" ou "contato" mora aqui; nenhum componente
 * deve hardcodar número, @ ou nome do atelier.
 */
export const brand = {
  /**
   * Nome corrente. Use em texto que a cliente lê como conversa —
   * mensagens de WhatsApp, descrições, meta tags.
   */
  nome: 'Simone Sá',

  /**
   * Nome com o símbolo de marca registrada no INPI, como aparece na logo.
   * Use onde a marca é exibida como marca: assinatura do cabeçalho,
   * rodapé, aviso de direitos. Fora daí, prefira `nome` — o ® no meio de
   * uma frase de WhatsApp fica estranho.
   */
  nomeRegistrado: 'Simone Sá®',

  subtitulo: 'Atelier',

  instagram: '@simonesaatelier',

  /** Formato internacional, apenas dígitos: 55 + DDD + número. */
  whatsapp: '5511999999999',
  /** Mesmo número, formatado para leitura. */
  whatsappExibicao: '(11) 99999-9999',

  /** TODO: preencher (opcionais — deixe vazio para ocultar no rodapé). */
  cidade: '',
  email: '',
} as const

/** Título usado como sufixo em todas as páginas. */
export const TITULO_BASE = 'Simone Sá Atelier | Alta-costura sob medida'

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
