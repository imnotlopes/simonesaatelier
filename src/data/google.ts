/**
 * Dados do perfil do atelier no Google.
 *
 * O link curto (share.google) não é legível por robô, então endereço e
 * horários precisam ser preenchidos à mão a partir do seu Perfil da Empresa.
 */
export const googleNegocio = {
  nome: 'Simone Sá Atelier',

  /** TODO: endereço completo, como aparece no Google. */
  endereco: '',
  /**
   * TODO: confirmar a cidade.
   * Duas avaliações citam o Vale do Aço ("melhor costureira do vale do aço",
   * "minha melhor opção em costura no Vale do Aço"), o que aponta para
   * Ipatinga, Timóteo ou Coronel Fabriciano — não Belo Horizonte, ainda que
   * o DDD 31 cubra as duas regiões.
   */
  cidade: '',
  estado: 'MG',

  /** 19 avaliações, todas 5 estrelas — conferido print a print. */
  nota: 5,
  totalAvaliacoes: 19,

  /** Link do perfil — usado nos botões "ver no Google" e "como chegar". */
  url: 'https://share.google/VhzpX0ojnGr80s6zZ',

  /**
   * TODO: trocar pelo embed exato do seu perfil.
   *
   * Abra o Google Maps, encontre o atelier, clique em Compartilhar →
   * Incorporar um mapa, e cole aqui só a URL que está dentro do src="...".
   *
   * Enquanto isso o mapa busca pelo nome do atelier, então o pin pode cair
   * no lugar errado. Confira antes de divulgar o site.
   */
  mapaEmbed:
    'https://www.google.com/maps?q=Simone+S%C3%A1+Atelier+MG&output=embed',

  /** TODO: ajustar conforme o funcionamento real. Deixe vazio para ocultar. */
  horarios: [
    { dias: 'Segunda a sexta', horas: '09h — 18h' },
    { dias: 'Sábado', horas: 'Com hora marcada' },
    { dias: 'Domingo', horas: 'Fechado' },
  ] as Array<{ dias: string; horas: string }>,
}

export interface AvaliacaoImagem {
  src: string
  /**
   * O depoimento está preso dentro da imagem — leitor de tela não alcança.
   * Por isso o alt resume quem escreveu e o que disse, em vez de dizer
   * apenas "avaliação".
   */
  alt: string
}

/**
 * Prints das avaliações do Google, em public/avaliacoes/.
 * Para acrescentar: salve o print na pasta e adicione uma entrada aqui.
 */
export const avaliacoesGoogle: AvaliacaoImagem[] = [
  {
    src: '/avaliacoes/01-kenia.jpeg',
    alt: 'Kenia Andrade, 5 estrelas: costura alinhada e acabamento excepcional no vestido de madrinha; morava a 200 km e bastaram três encontros.',
  },
  {
    src: '/avaliacoes/02-priscila.jpeg',
    alt: 'Priscila Rezende, 5 estrelas: profissional de alto padrão, atenta aos mínimos detalhes e extremamente pontual. "Podem confiar sem medo."',
  },
  {
    src: '/avaliacoes/03-glaucia.jpeg',
    alt: 'Glaucia Ferreira, 5 estrelas: confecção do vestido de noiva, com sensibilidade, competência e agilidade num dos momentos mais importantes da vida dela.',
  },
  {
    src: '/avaliacoes/04-juliana.jpeg',
    alt: 'Juliana Nelly Vial Hott, 5 estrelas: o vestido ficou do jeitinho que queria, com capricho e cuidado em todos os detalhes.',
  },
  {
    src: '/avaliacoes/05-aparecida.jpeg',
    alt: 'Aparecida Damasceno, 5 estrelas: profissional especializada em alta costura, com atendimento de excelência e perfeição no trabalho.',
  },
  {
    src: '/avaliacoes/06-fernanda.jpeg',
    alt: 'Fernanda Menezes, Local Guide, 5 estrelas: detalhista, pontual e atenciosa; adaptou as roupas perfeitamente ao corpo, com acabamento impecável.',
  },
  {
    src: '/avaliacoes/07-sumaia.jpeg',
    alt: 'Sumaia Tavares, 5 estrelas: fez uma fantasia do Darth Vader para o filho e um vestido vermelho com borboletas para o primeiro aninho da filha.',
  },
  {
    src: '/avaliacoes/08-grecia.jpeg',
    alt: 'Grécia de Andrade Souza, 5 estrelas: "a melhor costureira do Vale do Aço", impecável nos acabamentos, caprichosa e criativa.',
  },
  {
    src: '/avaliacoes/09-jeanne.jpeg',
    alt: 'Jeanne Alves, 5 estrelas: fez vestidos para ela e para a sobrinha; já tinha desistido de mandar fazer roupas e voltou a confiar.',
  },
  {
    src: '/avaliacoes/10-fabiana.jpeg',
    alt: 'Fabiana Oliveira, 5 estrelas: atendimento impecável, roupas perfeitas no corpo e exatamente como imaginava.',
  },
  {
    src: '/avaliacoes/11-malmeida.jpeg',
    alt: 'M. Almeida, 5 estrelas: há mais de 10 anos faz seus looks no atelier. "Tão bom sonhar com uma roupa e ela reproduzir ainda melhor."',
  },
  {
    src: '/avaliacoes/12-nobre.jpeg',
    alt: 'Nobre Ortodontia, 5 estrelas: trabalho perfeito, caprichoso e detalhista, com os prazos de confecção cumpridos à risca.',
  },
  {
    src: '/avaliacoes/13-isabella.jpeg',
    alt: 'Isabella Godoy, 5 estrelas: profissional muito dedicada, fez exatamente o vestido que ela queria. "A realização de um sonho."',
  },
  {
    src: '/avaliacoes/14-kelly.jpeg',
    alt: 'Kelly Jaques, 5 estrelas: falou o que queria e recebeu do jeitinho que pediu; destaca o amor no trabalho dela.',
  },
  {
    src: '/avaliacoes/15-junia.jpeg',
    alt: 'Junia Marise, Local Guide, 5 estrelas: costura impecável, preço justo e consultoria para escolher o tecido ideal.',
  },
  {
    src: '/avaliacoes/16-silvinha.jpeg',
    alt: 'Silvinha Barros, 5 estrelas: competente, habilidosa e com atendimento personalizado. "Minha melhor opção em costura no Vale do Aço."',
  },
  {
    src: '/avaliacoes/17-rizia.jpeg',
    alt: 'Rizia Kerem Martiniano, 5 estrelas: costura impecável e pessoa muito gentil e atenciosa.',
  },
  {
    src: '/avaliacoes/18-paloma.jpeg',
    alt: 'Paloma Oliveira, 5 estrelas: atendeu e superou todas as expectativas; cuidadosa, detalhista e muito agradável.',
  },
  {
    src: '/avaliacoes/19-angela.jpeg',
    alt: 'Angela Damasceno, 5 estrelas: ajudou na decisão do modelo, com bom gosto e trabalho impecável. "Meu vestido ficou lindo!"',
  },
]
