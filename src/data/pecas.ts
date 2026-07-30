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
 * Todo o catálogo é sob medida — não há peça pronta.
 * Os nomes descrevem a peça em vez de batizá-la: como nada é produzido em
 * modelo fixo, um nome próprio sugeriria uma coleção que não existe.
 */
export const pecas: Peca[] = [
  {
    slug: 'vestido-noiva-renda-francesa',
    nome: 'Vestido de noiva em renda francesa',
    categoria: 'noiva',
    descricao:
      'Corpo estruturado em renda francesa aplicada à mão sobre base de tule ilusão. A saia em camadas ganha volume discreto na cauda, desenhando o movimento sem peso. Cada aplicação é posicionada individualmente sobre o corpo da noiva.',
    tecido: 'renda francesa e tule',
    imagens: ['/pecas/placeholder-01.webp', '/pecas/placeholder-02.webp'],
    destaque: true,
  },
  {
    slug: 'vestido-noiva-civil',
    nome: 'Vestido de noiva para o civil',
    categoria: 'noiva',
    descricao:
      'Midi de linhas limpas em crepe pesado, pensado para o casamento no civil. O decote quadrado e a manga curta estruturada dispensam qualquer ornamento. A modelagem é construída sobre as suas medidas, sem tabela de tamanho.',
    tecido: 'crepe pesado',
    imagens: ['/pecas/placeholder-03.webp'],
  },
  {
    slug: 'vestido-festa-longo-cetim',
    nome: 'Vestido longo de festa em cetim',
    categoria: 'festa',
    descricao:
      'Longo em cetim duchesse com caimento fluido e fenda lateral discreta. As alças finas e o decote em V alongam a silhueta sem esforço. Uma peça de festa que não compete com quem a veste.',
    tecido: 'cetim duchesse',
    imagens: ['/pecas/placeholder-04.webp'],
    destaque: true,
  },
  {
    slug: 'vestido-festa-jacquard',
    nome: 'Vestido de festa em jacquard',
    categoria: 'festa',
    descricao:
      'Jacquard de seda com brilho contido, cortado em linha A a partir da cintura marcada. O tecido tem corpo suficiente para sustentar a forma sem estrutura interna aparente. Modelagem desenvolvida sobre as medidas da cliente.',
    tecido: 'jacquard de seda',
    imagens: ['/pecas/placeholder-06.webp'],
  },
  {
    slug: 'vestido-debutante-bordado',
    nome: 'Vestido de debutante bordado',
    categoria: 'debutante',
    descricao:
      'Saia ampla em camadas de tule sobre anágua estruturada, com corpo bordado em pedraria aplicada à mão. Pensado para a valsa: leve o bastante para girar, firme o bastante para durar a noite toda. Cor e densidade do bordado definidas junto com a debutante.',
    tecido: 'tule e bordado manual',
    imagens: ['/pecas/placeholder-09.webp', '/pecas/placeholder-10.webp'],
  },
  {
    slug: 'vestido-daminha',
    nome: 'Vestido de daminha',
    categoria: 'infantil',
    descricao:
      'Vestido de daminha em algodão fino forrado, com faixa de cetim que amarra atrás. O comprimento midi e a ausência de armação deixam a criança livre para brincar. Feito sob as medidas dela, com margem de ajuste até o dia da festa.',
    tecido: 'algodão fino e cetim',
    imagens: ['/pecas/placeholder-11.webp'],
  },
  {
    slug: 'vestido-festa-corselet',
    nome: 'Vestido de festa com corselet',
    categoria: 'festa',
    descricao:
      'Corselet estruturado com barbatanas aparentes e decote coração, sobre saia ampla com fenda frontal. A cor fechada e o brilho seco do tecido sustentam a peça sem nenhum aplique. Modelagem construída sobre o corpo, prova a prova.',
    tecido: 'zibeline',
    imagens: ['/pecas/festa-corselet-coral.webp'],
    destaque: true,
  },
  {
    slug: 'vestido-festa-vermelho-longo',
    nome: 'Vestido longo vermelho',
    categoria: 'festa',
    descricao:
      'Longo em crepe vermelho com decote em V, alças finas e costas abertas. A saia sai da cintura em viés, o que dá o caimento fluido sem volume. Uma peça direta, para quem não quer disputar atenção com o próprio vestido.',
    tecido: 'crepe',
    imagens: ['/pecas/festa-vermelho-1.webp', '/pecas/festa-vermelho-2.webp'],
  },
  {
    slug: 'vestido-festa-frente-unica',
    nome: 'Vestido frente única com cauda',
    categoria: 'festa',
    descricao:
      'Frente única de gola alta, costas inteiramente abertas e saia rodada que se estende em cauda leve. Feito para foto e para movimento: o tecido acompanha o corpo sem pesar. Comprimento ajustado ao sapato escolhido.',
    tecido: 'crepe leve',
    imagens: [
      '/pecas/festa-vermelho-frente-unica.webp',
      '/pecas/festa-vermelho-frente-unica-2.webp',
    ],
  },
  {
    slug: 'vestido-festa-marsala-laco',
    nome: 'Vestido marsala com laço',
    categoria: 'festa',
    descricao:
      'Longo tomara que caia em ombro a ombro, com mangas bufantes e um laço construído nas costas. A peça é feita para ser vista de trás. Fenda frontal e caimento reto em zibeline, que sustenta o volume da manga sem murchar ao longo da noite.',
    tecido: 'zibeline',
    imagens: [
      '/pecas/festa-marsala-1.webp',
      '/pecas/festa-marsala-2.webp',
      '/pecas/festa-marsala-3.webp',
    ],
    destaque: true,
  },
  {
    slug: 'vestido-festa-pink-laco',
    nome: 'Vestido curto com laço',
    categoria: 'festa',
    descricao:
      'Curto tomara que caia com laço estruturado sobre o busto, montado à mão em cetim. O corpo justo e o comprimento acima do joelho pedem festa à noite. O laço é peça de estrutura, não aplique: mantém a forma sem barbatana aparente.',
    tecido: 'cetim',
    imagens: [
      '/pecas/festa-pink-laco-1.webp',
      '/pecas/festa-pink-laco-2.webp',
      '/pecas/festa-pink-laco-3.webp',
    ],
  },
  {
    slug: 'vestido-festa-azul-flores-ombro',
    nome: 'Vestido azul com flores no ombro',
    categoria: 'festa',
    descricao:
      'Longo em cetim azul com gola drapeada e flores de tecido construídas uma a uma sobre o ombro. A saia reta com fenda lateral mantém a leitura sóbria, e o volume fica concentrado só no ombro. A terceira foto mostra o acabamento das flores no manequim do atelier.',
    tecido: 'cetim',
    imagens: [
      '/pecas/festa-azul-flores-1.webp',
      '/pecas/festa-azul-flores-2.webp',
      '/pecas/festa-azul-flores-3.webp',
    ],
  },
  {
    slug: 'vestido-festa-terracota-flores',
    nome: 'Vestido terracota com flores',
    categoria: 'festa',
    descricao:
      'Longo em crepe terracota, com manga três quartos franzida, cintura marcada e flores de tecido no decote. A fenda frontal solta o passo. Pensado para mãe de noivos e madrinha, quando o traje precisa durar a cerimônia inteira sem incomodar.',
    tecido: 'crepe',
    imagens: ['/pecas/festa-terracota-flores.webp'],
  },
  {
    slug: 'vestido-festa-gola-alta',
    nome: 'Vestido de gola alta com recorte',
    categoria: 'festa',
    descricao:
      'Frente única de gola alta com recorte em gota sobre o decote, em crepe de caimento firme. As costas ficam abertas e a saia segue reta até o chão. Um vestido de linhas fechadas na frente e aberto atrás.',
    tecido: 'crepe',
    imagens: ['/pecas/festa-vermelho-gola-alta.webp'],
  },
  {
    slug: 'vestido-festa-franjas',
    nome: 'Vestido curto de franjas',
    categoria: 'festa',
    descricao:
      'Curto forrado, coberto por franjas de fio metalizado costuradas em fileiras. O movimento é todo do tecido: a modelagem por baixo é reta e discreta de propósito. Peça para festa à noite, aniversário e réveillon.',
    tecido: 'franjas de fio metalizado',
    imagens: ['/pecas/festa-franjas.webp'],
  },
  {
    slug: 'vestido-festa-babados-organza',
    nome: 'Vestido com babados em organza',
    categoria: 'festa',
    descricao:
      'Sereia em cetim com decote coração, que abre da altura do joelho em camadas de babados de organza. O contraste entre o corpo liso e o volume embaixo alonga a silhueta. Comprimento e altura do babado definidos na prova.',
    tecido: 'cetim e organza',
    imagens: ['/pecas/festa-rosa-babados.webp'],
  },
  {
    slug: 'vestido-debutante-mullet',
    nome: 'Vestido de debutante mullet',
    categoria: 'debutante',
    descricao:
      'Comprimento mullet em cetim, curto na frente e longo atrás, com franjas de strass caindo do ombro. Pensado como segundo vestido da festa: entra depois da valsa, quando a debutante quer dançar. As franjas são aplicadas uma a uma.',
    tecido: 'cetim e strass',
    imagens: ['/pecas/debutante-vermelho-mullet.webp'],
  },
  {
    slug: 'vestido-daminha-cetim',
    nome: 'Vestido de daminha em cetim',
    categoria: 'infantil',
    descricao:
      'Corpo em cetim com manga bufante curta e saia em pregas fundas, com cós marcado na cintura. O comprimento vai até o chão, como o das madrinhas, e a saia tem corpo suficiente para armar sem anágua. Feito sob as medidas da criança.',
    tecido: 'cetim',
    imagens: [
      '/pecas/infantil-daminha-cetim-1.webp',
      '/pecas/infantil-daminha-cetim-2.webp',
      '/pecas/infantil-daminha-cetim-3.webp',
    ],
    destaque: true,
  },
  {
    slug: 'conjunto-infantil-jardineira',
    nome: 'Conjunto infantil com jardineira',
    categoria: 'infantil',
    descricao:
      'Jardineira de alças com vivo contrastante e camisa de gola, em algodão macio. Sem elástico apertado e sem forro grosso: a criança passa a festa inteira sem reclamar. Bordado do tema aplicado no peitilho, combinado com a família.',
    tecido: 'algodão',
    imagens: [
      '/pecas/infantil-menino-jardineira-1.webp',
      '/pecas/infantil-menino-jardineira-2.webp',
      '/pecas/infantil-menino-jardineira-3.webp',
    ],
  },
  {
    slug: 'fraque-infantil',
    nome: 'Fraque infantil',
    categoria: 'infantil',
    descricao:
      'Fraque de gola com galão dourado aplicado à mão, calça de cetim e gravata borboleta. Feito para o tema da festa, com forro leve para a criança aguentar o dia. Corte pensado para bebê que ainda não anda firme.',
    tecido: 'cetim e galão bordado',
    imagens: ['/pecas/infantil-menino-fraque.webp'],
  },
  {
    slug: 'vestido-festa-verde-com-capa',
    nome: 'Vestido verde com capa',
    categoria: 'festa',
    descricao:
      'Longo em tecido de fio metalizado, com decote V profundo, cintura marcada e fenda lateral. A capa de organza presa ao ombro, com flores de tecido aplicadas à mão, pode ser retirada na recepção. Pensado para madrinha e mãe de noivos.',
    tecido: 'malha metalizada e organza',
    imagens: ['/pecas/festa-verde-capa.webp'],
    destaque: true,
  },
  {
    slug: 'vestido-festa-flor-aplicada',
    nome: 'Vestido com flor aplicada',
    categoria: 'festa',
    descricao:
      'Tomara que caia com recorte vazado na cintura e flor de tecido construída à mão sobre o busto. A saia longa termina em babado único, que dá movimento sem encher a silhueta. Ideal para casamento de dia.',
    tecido: 'crepe e organza',
    imagens: ['/pecas/festa-verde-limao.webp'],
  },
  {
    slug: 'vestido-debutante-tule',
    nome: 'Vestido de debutante em tule',
    categoria: 'debutante',
    descricao:
      'Corpete estruturado em tule sobre barbatanas aparentes, com mangas caídas e saia em camadas de babados. O tule com fio brilhante pega a luz sem parecer bordado. A saia gira, porque foi construída pensando na valsa.',
    tecido: 'tule com fio brilhante',
    imagens: [
      '/pecas/debutante-tule-1.webp',
      '/pecas/debutante-tule-2.webp',
      '/pecas/debutante-tule-3.webp',
    ],
    destaque: true,
  },
  {
    slug: 'vestido-debutante-baile',
    nome: 'Vestido de debutante de baile',
    categoria: 'debutante',
    descricao:
      'Saia ampla sobre anágua estruturada, em tecido de paetê fino que cobre o vestido inteiro. As faixas na diagonal marcam a cintura e quebram o volume da saia. Cor definida junto com a debutante, a partir do tema da festa.',
    tecido: 'paetê e tule',
    imagens: ['/pecas/debutante-dourado.webp', '/pecas/debutante-dourado-2.webp'],
  },
  {
    slug: 'alfaiataria-sob-medida',
    nome: 'Alfaiataria sob medida',
    categoria: 'sob-medida',
    descricao:
      'Blazer, calça e colete desenvolvidos a partir de molde próprio, para o guarda-roupa que se usa depois da festa. A escolha de tecido, forro e acabamento é feita presencialmente. Prazo médio de quarenta e cinco dias.',
    tecido: 'lã fria, linho ou alfaiataria de seda',
    imagens: ['/pecas/placeholder-12.webp'],
    destaque: true,
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
