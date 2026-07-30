export type CategoriaPeca =
  | 'noiva'
  | 'festa'
  | 'debutante'
  | 'infantil'
  | 'sob-medida'

export interface Peca {
  slug: string
  /** Nome da cliente que vestiu a peça. */
  nome: string
  categoria: CategoriaPeca
  /**
   * O estilo da peça, em uma linha curta, como a Simone descreve.
   * Sem nome de tecido: nem sempre há certeza de qual foi usado, e chutar
   * na descrição de uma peça sob medida é pior do que não dizer.
   */
  descricao: string
  /**
   * Caminhos servidos a partir de /public, por isso começam com "/".
   * Strings em /src/assets NÃO funcionam: o Vite só versiona esses arquivos
   * quando são importados como módulo. Para trocar as fotos, basta substituir
   * os arquivos em public/pecas/ (ou apontar para uma URL externa).
   */
  imagens: string[]
  /** Aparece na vitrine da home. */
  destaque?: boolean
}

/** Rótulos legíveis para filtros e breadcrumbs. */
export const rotulosCategoria: Record<CategoriaPeca, string> = {
  noiva: 'Noiva',
  festa: 'Festa',
  debutante: 'Debutante',
  infantil: 'Infantil',
  'sob-medida': 'Sob medida',
}

/**
 * Catálogo. Todo ele é sob medida: não há peça pronta.
 *
 * Nome e estilo vêm dos próprios arquivos de imagem, nomeados pela Simone no
 * padrão `cliente-estilo`. Quatro peças ainda estão sem cliente identificada e
 * seguem marcadas com "TODO": basta trocar o campo `nome` quando souber.
 */
export const pecas: Peca[] = [
  /* ---------------------------------------------------------------- noiva */
  {
    slug: 'noiva-kelly',
    nome: 'Kelly',
    categoria: 'noiva',
    descricao: 'Romântico, Minimalista e Contemporâneo',
    imagens: ['/pecas/kelly-romantico-minimalista-e-contemporaneo.webp'],
    destaque: true,
  },
  {
    slug: 'noiva-glaucia',
    nome: 'Gláucia',
    categoria: 'noiva',
    descricao: 'Minimalista, Romântico e Fluido',
    imagens: ['/pecas/glaucia-minimalista-romantico-e-fluido.webp'],
  },
  {
    slug: 'noiva-isabella',
    nome: 'Isabella',
    categoria: 'noiva',
    descricao: 'Minimalista Contemporâneo',
    imagens: [
      '/pecas/isabella-minimalista-contemporaneo.webp',
      '/pecas/isabella-minimalista-contemporaneo1.webp',
      '/pecas/isabella-minimalista-contemporaneo2.webp',
    ],
    destaque: true,
  },

  /* ---------------------------------------------------------------- festa */
  {
    slug: 'festa-esther',
    nome: 'Esther',
    categoria: 'festa',
    descricao: 'Fluido e Minimalista',
    imagens: ['/pecas/esther.webp', '/pecas/festa-vermelho-2.webp'],
  },
  {
    slug: 'festa-julia',
    nome: 'Júlia',
    categoria: 'festa',
    descricao: 'Fluido e Minimalista',
    imagens: [
      '/pecas/julia-fluido-e-minimalista.webp',
      '/pecas/julia-fluido-e-minimalista2.webp',
      '/pecas/julia.webp',
    ],
  },
  {
    slug: 'festa-paloma',
    nome: 'Paloma',
    categoria: 'festa',
    descricao: 'Moderno e Romântico',
    imagens: ['/pecas/paloma-moderno-e-romantico.webp'],
  },
  {
    slug: 'festa-marcia',
    nome: 'Márcia',
    categoria: 'festa',
    descricao: 'Formal e Clássico',
    imagens: [
      '/pecas/marcia-formal-e-classico.webp',
      '/pecas/marcia-formal-e-classico1.webp',
    ],
  },
  {
    slug: 'festa-junia',
    nome: 'Júnia',
    categoria: 'festa',
    descricao: 'Clássico e Dramático',
    imagens: [
      '/pecas/junia-classico-e-dramatico.webp',
      '/pecas/junia-classico-e-dramatico1.webp',
      '/pecas/junia-classico-e-dramatico2.webp',
    ],
    destaque: true,
  },
  {
    slug: 'festa-juliana',
    nome: 'Juliana',
    categoria: 'festa',
    descricao: 'Estilo Flapper',
    imagens: ['/pecas/juliana-estilo-flapper.webp'],
  },
  {
    slug: 'festa-laura',
    nome: 'Laura',
    categoria: 'festa',
    descricao: 'Romântico e Dramático',
    imagens: ['/pecas/laura-romantico-dramatico.webp'],
  },
  {
    slug: 'festa-vania',
    nome: 'Vânia',
    categoria: 'festa',
    descricao: 'Elegante e Sofisticado',
    imagens: [
      '/pecas/vania-elegante-e-sofisticado.webp',
      '/pecas/vania-elegante-e-sofisticado2.webp',
    ],
    destaque: true,
  },
  {
    slug: 'festa-lucimar',
    nome: 'Lucimar',
    categoria: 'festa',
    descricao: 'Estilo Cape Dress, com elementos modernos e sofisticados',
    imagens: [
      '/pecas/lucimar-estilo-cape-dress-combinado-elementos-modernos-e-sofisticados.webp',
    ],
  },
  {
    slug: 'festa-munique',
    nome: 'Munique',
    categoria: 'festa',
    descricao: 'Sofisticada',
    imagens: ['/pecas/munique-sofisticada.webp', '/pecas/festa-corselet-coral.webp'],
  },
  {
    slug: 'festa-valesca',
    nome: 'Valesca',
    categoria: 'festa',
    descricao: 'Romântico, Fluido e Sofisticado',
    imagens: ['/pecas/valesca-romantico-fluido-e-sofisticado.webp'],
  },
  {
    slug: 'festa-carla',
    nome: 'Carla',
    categoria: 'festa',
    descricao: 'Romântico e Sofisticado',
    imagens: [
      '/pecas/carla-romantico-e-sofisticado.webp',
      '/pecas/festa-terracota-flores.webp',
    ],
  },
  {
    slug: 'festa-curto-laco',
    // TODO: nome da cliente
    nome: 'Vestido curto com laço',
    categoria: 'festa',
    descricao: 'Moderno e Romântico',
    imagens: [
      '/pecas/festa-pink-laco-1.webp',
      '/pecas/festa-pink-laco-2.webp',
      '/pecas/festa-pink-laco-3.webp',
    ],
  },

  /* ------------------------------------------------------------ debutante */
  {
    slug: 'debutante-isabella-princesa',
    nome: 'Isabella',
    categoria: 'debutante',
    descricao: 'Estilo Princesa',
    imagens: [
      '/pecas/isabella-estilo-princesa.webp',
      '/pecas/isabella-estilo-princesa1.webp',
      '/pecas/isabella-estilo-princesa2.webp',
      '/pecas/debutante-dourado.webp',
    ],
    destaque: true,
  },
  {
    slug: 'debutante-isabella-moderno-romantico',
    nome: 'Isabella',
    categoria: 'debutante',
    descricao: 'Estilo Princesa com toque Moderno e Romântico',
    imagens: ['/pecas/isabella-princesa-toque-moderno-e-romantico.webp'],
  },
  {
    slug: 'debutante-isabella-mullet',
    nome: 'Isabella',
    categoria: 'debutante',
    descricao: 'Estilo Mullet',
    imagens: ['/pecas/isabella-estilo-mullet.webp'],
  },

  /* ------------------------------------------------------------- infantil */
  {
    slug: 'infantil-isis',
    nome: 'Isis',
    categoria: 'infantil',
    descricao: 'Romântico',
    imagens: [
      '/pecas/isis-romantico.webp',
      '/pecas/isis-romantico1.webp',
      '/pecas/isis-romantico2.webp',
    ],
    destaque: true,
  },
  {
    slug: 'infantil-daminha-cetim',
    // TODO: nome da criança
    nome: 'Vestido de daminha',
    categoria: 'infantil',
    descricao: 'Clássico e Romântico',
    imagens: [
      '/pecas/infantil-daminha-cetim-1.webp',
      '/pecas/infantil-daminha-cetim-2.webp',
      '/pecas/infantil-daminha-cetim-3.webp',
    ],
  },
  {
    slug: 'infantil-jardineira',
    // TODO: nome da criança
    nome: 'Conjunto com jardineira',
    categoria: 'infantil',
    descricao: 'Clássico e Confortável',
    imagens: [
      '/pecas/infantil-menino-jardineira-1.webp',
      '/pecas/infantil-menino-jardineira-2.webp',
      '/pecas/infantil-menino-jardineira-3.webp',
    ],
  },
  {
    slug: 'infantil-fraque',
    // TODO: nome da criança
    nome: 'Fraque infantil',
    categoria: 'infantil',
    descricao: 'Clássico e Temático',
    imagens: ['/pecas/infantil-menino-fraque.webp'],
  },

  /* ----------------------------------------------------------- sob medida */
  {
    slug: 'sob-medida-marli',
    nome: 'Marli',
    categoria: 'sob-medida',
    descricao: 'Elegante e Sofisticado',
    imagens: ['/pecas/marli-elegante-e-sofisticado.webp'],
    destaque: true,
  },
]

/** Peças marcadas para a vitrine da home. */
export const pecasDestaque = pecas.filter((peca) => peca.destaque)

export function buscarPeca(slug: string): Peca | undefined {
  return pecas.find((peca) => peca.slug === slug)
}

/** Categorias que de fato têm peça cadastrada, evitando filtro vazio na UI. */
export const categoriasDisponiveis = (
  Object.keys(rotulosCategoria) as CategoriaPeca[]
).filter((categoria) => pecas.some((peca) => peca.categoria === categoria))

export function pecasPorCategoria(categoria: CategoriaPeca): Peca[] {
  return pecas.filter((peca) => peca.categoria === categoria)
}

/**
 * Categorias para a vitrine da home, já com capa e contagem.
 * "sob-medida" fica de fora: tem faixa própria na home.
 */
export const categoriasVitrine = categoriasDisponiveis
  .filter((categoria) => categoria !== 'sob-medida')
  .map((categoria) => {
    const doGrupo = pecasPorCategoria(categoria)
    return {
      categoria,
      rotulo: rotulosCategoria[categoria],
      capa: doGrupo[0].imagens[0],
      quantidade: doGrupo.length,
    }
  })
