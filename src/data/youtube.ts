/**
 * Vídeos do YouTube exibidos na home.
 *
 * COMO ADICIONAR UM VÍDEO
 * -----------------------
 * Abra o Short no YouTube, copie o link da barra de endereço e cole na lista
 * `videos` abaixo, junto com um título curto. Só isso — o site extrai o
 * identificador do vídeo sozinho.
 *
 * Qualquer um destes formatos funciona:
 *   https://www.youtube.com/shorts/dQw4w9WgXcQ
 *   https://youtu.be/dQw4w9WgXcQ
 *   https://www.youtube.com/watch?v=dQw4w9WgXcQ
 *   dQw4w9WgXcQ                                   (só o identificador)
 */

export const canalYoutube = {
  handle: '@SimoneSaAtelier',
  /** Preenchido a partir do handle; vira o botão "ver o canal". */
  get url() {
    return this.handle
      ? `https://www.youtube.com/${this.handle.startsWith('@') ? '' : '@'}${this.handle}`
      : 'https://www.youtube.com/'
  },
}

export interface VideoYoutube {
  /** Link do YouTube ou só o identificador — os dois funcionam. */
  link: string
  /** Título curto. É o que o leitor de tela anuncia e o que aparece no card. */
  titulo: string
}

/**
 * Os títulos abaixo são de exibição, não os do YouTube.
 * Os originais são cadeias de hashtag ("#noiva#wedding#casamento #viral"),
 * que ficariam ruins no card e piores ainda num leitor de tela.
 */
export const videos: VideoYoutube[] = [
  {
    link: 'https://www.youtube.com/shorts/rlBBAGYnOtQ',
    titulo: 'Vestido de noiva',
  },
  {
    link: 'https://www.youtube.com/shorts/_2TIbf6nlcQ',
    titulo: 'O tecido zibeline',
  },
  {
    link: 'https://www.youtube.com/shorts/KXHSt27GH0w',
    titulo: 'Corset estruturado',
  },
  {
    link: 'https://www.youtube.com/shorts/kiY2g5VdFNg',
    titulo: 'Vestido de 15 anos',
  },
]

/**
 * Extrai o identificador do vídeo a partir de qualquer formato de link.
 * Devolve null quando não reconhece — melhor sumir com o card do que
 * renderizar um player quebrado.
 */
export function idDoVideo(link: string): string | null {
  const limpo = link.trim()
  if (!limpo) return null

  // Já é só o identificador (11 caracteres do alfabeto do YouTube).
  if (/^[\w-]{11}$/.test(limpo)) return limpo

  const padroes = [
    /youtube\.com\/shorts\/([\w-]{11})/,
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/watch\?v=([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/live\/([\w-]{11})/,
  ]
  for (const padrao of padroes) {
    const achou = limpo.match(padrao)
    if (achou) return achou[1]
  }
  return null
}

/** Vídeos com link reconhecido, já com o identificador resolvido. */
export const videosValidos = videos
  .map((video) => ({ ...video, id: idDoVideo(video.link) }))
  .filter((video): video is VideoYoutube & { id: string } => video.id !== null)
