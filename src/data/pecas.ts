export type CategoriaPeca =
  | 'noiva'
  | 'festa'
  | 'debutante'
  | 'infantil'
  | 'sob-medida'

export interface Peca {
  slug: string
  nome: string
  categoria: CategoriaPeca
  /** 2–3 frases. Tom sofisticado, sem superlativo barato. */
  descricao: string
  /** Ex.: "cetim", "renda e tule", "jacquard de seda". */
  tecido?: string
  /**
   * Caminhos servidos a partir de /public — por isso começam com "/".
   * Strings em /src/assets NÃO funcionam: o Vite só versiona esses arquivos
   * quando são importados como módulo. Para trocar as fotos, basta substituir
   * os arquivos em public/pecas/ (ou apontar para uma URL externa).
   */
  imagens: string[]
  /** Aparece na vitrine da home. */
  destaque?: boolean
  /** true = orçamento sob medida · false = peça pronta, disponível na vitrine. */
  sobMedida: boolean
}

/** Rótulos legíveis para filtros e breadcrumbs. */
export const rotulosCategoria: Record<CategoriaPeca, string> = {
  noiva: 'Noiva',
  festa: 'Festa',
  debutante: 'Debutante',
  infantil: 'Infantil',
  'sob-medida': 'Sob medida',
}

export const pecas: Peca[] = [
  {
    slug: 'vestido-noiva-adele',
    nome: 'Adèle',
    categoria: 'noiva',
    descricao:
      'Corpo estruturado em renda francesa aplicada à mão sobre base de tule ilusão. A saia em camadas ganha volume discreto na cauda, desenhando o movimento sem peso. Cada aplicação é posicionada individualmente sobre o corpo da noiva.',
    tecido: 'renda francesa e tule',
    imagens: ['/pecas/placeholder-01.jpg', '/pecas/placeholder-02.jpg'],
    destaque: true,
    sobMedida: true,
  },
  {
    slug: 'vestido-noiva-civil-lis',
    nome: 'Lis',
    categoria: 'noiva',
    descricao:
      'Midi de linhas limpas em crepe pesado, pensado para o civil. O decote quadrado e a manga curta estruturada dispensam qualquer ornamento. Peça pronta, disponível para prova imediata no atelier.',
    tecido: 'crepe pesado',
    imagens: ['/pecas/placeholder-03.jpg'],
    sobMedida: false,
  },
  {
    slug: 'vestido-festa-aurora',
    nome: 'Aurora',
    categoria: 'festa',
    descricao:
      'Longo em cetim duchesse com caimento fluido e fenda lateral discreta. As alças finas e o decote em V alongam a silhueta sem esforço. Uma peça de festa que não compete com quem a veste.',
    tecido: 'cetim duchesse',
    imagens: ['/pecas/placeholder-04.jpg', '/pecas/placeholder-05.jpg'],
    destaque: true,
    sobMedida: false,
  },
  {
    slug: 'vestido-festa-noite-veneza',
    nome: 'Veneza',
    categoria: 'festa',
    descricao:
      'Jacquard de seda com brilho contido, cortado em linha A a partir da cintura marcada. O tecido tem corpo suficiente para sustentar a forma sem estrutura interna aparente. Modelagem desenvolvida sobre as medidas da cliente.',
    tecido: 'jacquard de seda',
    imagens: ['/pecas/placeholder-06.jpg'],
    sobMedida: true,
  },
  {
    slug: 'vestido-debutante-valsa',
    nome: 'Valsa',
    categoria: 'debutante',
    descricao:
      'Saia ampla em camadas de tule sobre anágua estruturada, com corpo bordado em pedraria aplicada à mão. Pensado para a valsa: leve o bastante para girar, firme o bastante para durar a noite toda. Cor e densidade do bordado definidas junto com a debutante.',
    tecido: 'tule e bordado manual',
    imagens: ['/pecas/placeholder-09.jpg', '/pecas/placeholder-10.jpg'],
    sobMedida: true,
  },
  {
    slug: 'vestido-infantil-daminha-flor',
    nome: 'Flor',
    categoria: 'infantil',
    descricao:
      'Vestido de daminha em algodão fino forrado, com faixa de cetim que amarra atrás. O comprimento midi e a ausência de armação deixam a criança livre para brincar. Disponível pronto nos tamanhos 2 a 10 anos.',
    tecido: 'algodão fino e cetim',
    imagens: ['/pecas/placeholder-11.jpg'],
    sobMedida: false,
  },
  {
    slug: 'alfaiataria-sob-medida',
    nome: 'Alfaiataria sob medida',
    categoria: 'sob-medida',
    descricao:
      'Blazer, calça e colete desenvolvidos a partir de molde próprio, para o guarda-roupa que se usa depois da festa. A escolha de tecido, forro e acabamento é feita presencialmente. Prazo médio de quarenta e cinco dias.',
    tecido: 'lã fria, linho ou alfaiataria de seda',
    imagens: ['/pecas/placeholder-12.jpg'],
    destaque: true,
    sobMedida: true,
  },
]

/** Peças marcadas para a vitrine da home. */
export const pecasDestaque = pecas.filter((peca) => peca.destaque)

export function buscarPeca(slug: string): Peca | undefined {
  return pecas.find((peca) => peca.slug === slug)
}

/** Categorias que de fato têm peça cadastrada — evita filtro vazio na UI. */
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
