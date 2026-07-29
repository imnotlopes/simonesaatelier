export interface FotoCasamento {
  src: string
  /** Descreve a peça, não a cena: é o vestido que interessa a quem procura. */
  alt: string
  /** Retrato ocupa duas linhas na grade; quadrado ocupa uma. */
  formato: 'retrato' | 'quadrado'
}

export interface Casamento {
  id: string
  /** Nome do casal. Vazio quando não sabemos — não invente. */
  casal: string
  fotos: FotoCasamento[]
}

/**
 * Casamentos atendidos pelo atelier, exibidos na home.
 *
 * Para acrescentar: salve as fotos em public/casamentos/ e adicione o casal
 * abaixo. Peça autorização aos noivos antes de publicar — são fotos de
 * pessoas identificáveis, no dia do casamento delas.
 */
export const casamentos: Casamento[] = [
  {
    id: 'kely-e-carlos',
    casal: 'Kely e Carlos',
    fotos: [
      {
        src: '/casamentos/kely-e-carlos-1.webp',
        alt: 'Noiva em vestido branco de ombro único, com laço estruturado no ombro, abraçada ao noivo.',
        formato: 'retrato',
      },
      {
        src: '/casamentos/kely-e-carlos-2.webp',
        alt: 'Casal de noivos diante de parede escura; o vestido de ombro único com laço aparece por inteiro.',
        formato: 'quadrado',
      },
      {
        src: '/casamentos/kely-e-carlos-3.webp',
        alt: 'Noiva assinando o registro civil, com o laço estruturado do vestido em primeiro plano.',
        formato: 'quadrado',
      },
    ],
  },
  {
    id: 'richelli-e-vinicius',
    casal: 'Richelli e Vinicius',
    fotos: [
      {
        src: '/casamentos/richelli-e-vinicius-1.webp',
        alt: 'Noiva em vestido longo branco de ombro único, com rosetas de tecido aplicadas no decote.',
        formato: 'retrato',
      },
      {
        src: '/casamentos/richelli-e-vinicius-2.webp',
        alt: 'Noiva de vestido branco com gola alta franzida e rosetas, diante do bolo de casamento.',
        formato: 'quadrado',
      },
      {
        src: '/casamentos/richelli-e-vinicius-3.webp',
        alt: 'Detalhe do decote do vestido de noiva, com aplicações de tecido em relevo.',
        formato: 'retrato',
      },
    ],
  },
  {
    id: 'glaucia-e-augusto',
    casal: 'Gláucia e Augusto',
    fotos: [
      {
        src: '/casamentos/glaucia-e-augusto.webp',
        alt: 'Noiva sentada em vestido branco de gola alta e cauda longa e fluida, ao lado do noivo.',
        formato: 'quadrado',
      },
    ],
  },
]

/** Lista plana das fotos, na ordem em que aparecem na home. */
export const fotosCasamentos = casamentos.flatMap((c) =>
  c.fotos.map((foto) => ({ ...foto, casal: c.casal, casamentoId: c.id })),
)
