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
 * SOBRE OS NOMES
 * As peças levam o nome da cliente que as vestiu, e a descrição é o estilo,
 * como a Simone escreveu ao mandar as fotos.
 *
 * Dez peças receberam nome e estilo direto da lista dela. As outras estão
 * marcadas com "TODO: nome da cliente" e seguem com um título descritivo
 * provisório, porque atribuir o vestido de alguém à pessoa errada é pior do
 * que deixar sem nome. Basta trocar o campo `nome` quando souber.
 */
export const pecas: Peca[] = [
  /* ---------------------------------------------------------------- noiva */
  {
    slug: 'vestido-noiva-renda-francesa',
    // TODO: nome da cliente
    nome: 'Vestido de noiva em renda',
    categoria: 'noiva',
    descricao: 'Clássico e Romântico',
    imagens: ['/pecas/placeholder-01.webp', '/pecas/placeholder-02.webp'],
    destaque: true,
  },
  {
    slug: 'vestido-noiva-civil',
    // TODO: nome da cliente
    nome: 'Vestido de noiva para o civil',
    categoria: 'noiva',
    descricao: 'Minimalista e Contemporâneo',
    imagens: ['/pecas/placeholder-03.webp'],
  },

  /* ---------------------------------------------------------------- festa */
  {
    slug: 'vestido-festa-vermelho-longo',
    nome: 'Esther',
    categoria: 'festa',
    descricao: 'Fluido e Minimalista',
    imagens: ['/pecas/festa-vermelho-1.webp', '/pecas/festa-vermelho-2.webp'],
  },
  {
    slug: 'vestido-festa-flor-aplicada',
    nome: 'Paloma',
    categoria: 'festa',
    descricao: 'Moderno e Romântico',
    imagens: ['/pecas/festa-verde-limao.webp'],
  },
  {
    slug: 'vestido-festa-azul-flores-ombro',
    nome: 'Márcia',
    categoria: 'festa',
    descricao: 'Formal e Clássico',
    imagens: [
      '/pecas/festa-azul-flores-1.webp',
      '/pecas/festa-azul-flores-2.webp',
      '/pecas/festa-azul-flores-3.webp',
    ],
  },
  {
    slug: 'vestido-festa-marsala-laco',
    nome: 'Júnia',
    categoria: 'festa',
    descricao: 'Clássico e Dramático',
    imagens: [
      '/pecas/festa-marsala-1.webp',
      '/pecas/festa-marsala-2.webp',
      '/pecas/festa-marsala-3.webp',
    ],
    destaque: true,
  },
  {
    slug: 'vestido-festa-franjas',
    nome: 'Juliana',
    categoria: 'festa',
    descricao: 'Estilo Flapper',
    imagens: ['/pecas/festa-franjas.webp'],
  },
  {
    slug: 'vestido-festa-babados-organza',
    nome: 'Laura',
    categoria: 'festa',
    descricao: 'Romântico e Dramático',
    imagens: ['/pecas/festa-rosa-babados.webp'],
  },
  {
    slug: 'vestido-festa-verde-com-capa',
    nome: 'Vânia',
    categoria: 'festa',
    descricao: 'Elegante e Sofisticado',
    imagens: ['/pecas/festa-verde-capa.webp'],
    destaque: true,
  },
  {
    slug: 'vestido-festa-longo-cetim',
    // TODO: nome da cliente
    nome: 'Vestido longo de festa',
    categoria: 'festa',
    descricao: 'Fluido e Elegante',
    imagens: ['/pecas/placeholder-04.webp'],
    destaque: true,
  },
  {
    slug: 'vestido-festa-jacquard',
    // TODO: nome da cliente
    nome: 'Vestido de festa em linha A',
    categoria: 'festa',
    descricao: 'Clássico e Sofisticado',
    imagens: ['/pecas/placeholder-06.webp'],
  },
  {
    slug: 'vestido-festa-corselet',
    // TODO: nome da cliente
    nome: 'Vestido com corselet',
    categoria: 'festa',
    descricao: 'Moderno e Estruturado',
    imagens: ['/pecas/festa-corselet-coral.webp'],
    destaque: true,
  },
  {
    slug: 'vestido-festa-frente-unica',
    // TODO: nome da cliente
    nome: 'Vestido frente única com cauda',
    categoria: 'festa',
    descricao: 'Fluido e Minimalista',
    imagens: [
      '/pecas/festa-vermelho-frente-unica.webp',
      '/pecas/festa-vermelho-frente-unica-2.webp',
    ],
  },
  {
    slug: 'vestido-festa-pink-laco',
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
  {
    slug: 'vestido-festa-terracota-flores',
    // TODO: nome da cliente
    nome: 'Vestido com flores no decote',
    categoria: 'festa',
    descricao: 'Elegante e Sofisticado',
    imagens: ['/pecas/festa-terracota-flores.webp'],
  },
  {
    slug: 'vestido-festa-gola-alta',
    // TODO: nome da cliente
    nome: 'Vestido de gola alta com recorte',
    categoria: 'festa',
    descricao: 'Moderno e Minimalista',
    imagens: ['/pecas/festa-vermelho-gola-alta.webp'],
  },

  /* ------------------------------------------------------------ debutante */
  {
    slug: 'vestido-debutante-tule',
    nome: 'Isabella',
    categoria: 'debutante',
    descricao: 'Estilo Princesa com toque Moderno e Romântico',
    imagens: [
      '/pecas/debutante-tule-1.webp',
      '/pecas/debutante-tule-2.webp',
      '/pecas/debutante-tule-3.webp',
    ],
    destaque: true,
  },
  {
    slug: 'vestido-debutante-mullet',
    nome: 'Isabella',
    categoria: 'debutante',
    descricao: 'Estilo Mullet',
    imagens: ['/pecas/debutante-vermelho-mullet.webp'],
  },
  {
    slug: 'vestido-debutante-baile',
    // TODO: nome da cliente
    nome: 'Vestido de debutante de baile',
    categoria: 'debutante',
    descricao: 'Estilo Princesa',
    imagens: ['/pecas/debutante-dourado.webp', '/pecas/debutante-dourado-2.webp'],
  },
  {
    slug: 'vestido-debutante-bordado',
    // TODO: nome da cliente
    nome: 'Vestido de debutante bordado',
    categoria: 'debutante',
    descricao: 'Romântico e Dramático',
    imagens: ['/pecas/placeholder-09.webp', '/pecas/placeholder-10.webp'],
  },

  /* ------------------------------------------------------------- infantil */
  {
    slug: 'vestido-daminha-cetim',
    // TODO: nome da criança
    nome: 'Vestido de daminha',
    categoria: 'infantil',
    descricao: 'Clássico e Romântico',
    imagens: [
      '/pecas/infantil-daminha-cetim-1.webp',
      '/pecas/infantil-daminha-cetim-2.webp',
      '/pecas/infantil-daminha-cetim-3.webp',
    ],
    destaque: true,
  },
  {
    slug: 'vestido-daminha',
    // TODO: nome da criança
    nome: 'Vestido de daminha midi',
    categoria: 'infantil',
    descricao: 'Leve e Delicado',
    imagens: ['/pecas/placeholder-11.webp'],
  },
  {
    slug: 'conjunto-infantil-jardineira',
    // TODO: nome da criança
    nome: 'Conjunto infantil com jardineira',
    categoria: 'infantil',
    descricao: 'Clássico e Confortável',
    imagens: [
      '/pecas/infantil-menino-jardineira-1.webp',
      '/pecas/infantil-menino-jardineira-2.webp',
      '/pecas/infantil-menino-jardineira-3.webp',
    ],
  },
  {
    slug: 'fraque-infantil',
    // TODO: nome da criança
    nome: 'Fraque infantil',
    categoria: 'infantil',
    descricao: 'Clássico e Temático',
    imagens: ['/pecas/infantil-menino-fraque.webp'],
  },

  /* ----------------------------------------------------------- sob medida */
  {
    slug: 'alfaiataria-sob-medida',
    nome: 'Luandra',
    categoria: 'sob-medida',
    descricao: 'Alfaiataria corporativa, Executivo moderno e Clássico refinado',
    imagens: ['/pecas/placeholder-12.webp'],
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
