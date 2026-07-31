/**
 * Dados do perfil do atelier no Google.
 *
 * O link curto (share.google) não é legível por robô, então endereço e
 * horários precisam ser preenchidos à mão a partir do seu Perfil da Empresa.
 */
export const googleNegocio = {
  nome: 'Simone Sá Atelier',

  endereco: 'R. Santa Catarina, 620, Timotinho',
  cidade: 'Timóteo',
  estado: 'MG',
  cep: '35180-476',

  /**
   * Nota e total como constam no perfil. O carrossel mostra as 20 avaliações
   * transcritas até agora, que são uma seleção do total.
   */
  nota: 5,
  totalAvaliacoes: 54,

  /** Link do perfil — usado nos botões "ver no Google" e "como chegar". */
  url: 'https://share.google/VhzpX0ojnGr80s6zZ',

  /**
   * Busca pelo endereço completo, e não pelo nome, para o pin cair no lugar
   * certo mesmo que o perfil mude de nome.
   */
  mapaEmbed:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('R. Santa Catarina, 620, Timotinho, Timóteo - MG, 35180-476') +
    '&output=embed',

  /** Conforme o perfil no Google. Deixe vazio para ocultar o bloco. */
  horarios: [
    { dias: 'Segunda a sexta', horas: '09h às 17h' },
    { dias: 'Sábado e domingo', horas: 'Fechado' },
  ] as Array<{ dias: string; horas: string }>,
}

export interface AvaliacaoGoogle {
  id: string
  autor: string
  /** Nota de 1 a 5, como consta no Google. */
  nota: number
  /** Texto integral, transcrito do perfil. Não edite o conteúdo alheio. */
  texto: string
  /** Como o Google exibe: "2 meses atrás", "um ano atrás". */
  quando: string
  /** Selo de Local Guide, quando o autor tiver. */
  localGuide?: boolean
}

/**
 * Avaliações transcritas do perfil no Google, na íntegra.
 *
 * São palavras de clientes reais: corrija apenas se a própria cliente pedir.
 * Erros de digitação do original foram mantidos de propósito.
 */
export const avaliacoesGoogle: AvaliacaoGoogle[] = [
  {
    /*
      Abre o carrossel: é a avaliação que mais prova o ponto do atelier.
      Vestido feito à distância, com as medidas tiradas por chamada de vídeo
      dos Estados Unidos, e serviu na primeira vez que a cliente vestiu.
    */
    id: 'adilson-silva',
    autor: 'Adilson Silva',
    nota: 5,
    quando: 'um ano atrás',
    texto:
      'Simone Sá é a profissional dos sonhos! Acreditem, se quiserem, que ela e eu trabalhamos nesse projeto maravilhoso À LONGA DISTÂNCIA, pois eu moro nos EUA! Meu marido tirou minhas medidas através enquanto a Simone estava em chamada de vídeo, nos guiando. Esse vestido foi para o casamento de uma filha do coração. Durante meses fomos conversando, ela fazendo ajustes de lá, e eu só orando daqui hahaha. Enfim, quando meu marido trouxe o vestido, e eu experimentei, QUASE não acreditei na perfeição com que ele serviu! Simone Sá é ALTA COSTURA, podem crer! Os detalhes no vestido encantaram a todos. Não vejo a hora de ter outra obra de arte dessas feita pela Simone. Obrigada, minha querida! Espero poder te conhecer em breve! ;)',
  },
  {
    id: 'kenia-andrade',
    autor: 'Kenia Andrade',
    nota: 5,
    quando: '2 meses atrás',
    texto:
      'Simone é uma profissional excelente! Costura divinamente bem! Tudo muito bem feito: a costura bem alinhada e com um acabamento excepcional! Fez um vestido de festa (vestido de madrinha de casamento) pra mim maravilhoso! Quando ela fez o vestido, eu morava a 200KM de distância, sendo que foi necessário encontrar com ela apenas para tirar as medidas e depois para fazer uma prova. No terceiro encontro já foi pra pegar o vestido pronto! Sem dúvida, é uma excelente profissional!',
  },
  {
    id: 'priscila-rezende',
    autor: 'Priscila Rezende',
    nota: 5,
    quando: 'um mês atrás',
    localGuide: true,
    texto:
      'Conheço o trabalho da Simone há muitosssss anos, e posso dizer com propriedade que ela é uma profissional de alto padrão, extremamente cuidadosa, sempre atenta aos mínimos detalhes, o que faz toda diferença na confecção de uma peça. Extremamente pontual, o que tbm faz uma diferença gigante num profissional. Podem confiar sem medo.',
  },
  {
    id: 'glaucia-ferreira',
    autor: 'Glaucia Ferreira',
    nota: 5,
    quando: '6 meses atrás',
    texto:
      'A Simone me atendeu na confecção do meu vestido de noiva. Ela prontamente trabalhou com a ideia que sugeri e transformou meu desejo em realidade. Sensibilidade, competência e agilidade foram os pontos fortes deste atendimento que, sem dúvida, marcou um dos momentos mais importantes da minha vida.',
  },
  {
    id: 'juliana-hott',
    autor: 'Juliana Nelly Vial Hott',
    nota: 5,
    quando: '6 meses atrás',
    texto:
      'O trabalho da Simone é impecável!! Ela fez o meu vestido do jeitinho que eu queria, ficou perfeito! O capricho e cuidado com todos os detalhes na entrega do produto, me surpreendeu muito! Simplesmente maravilhosa!! Recomendo demais!',
  },
  {
    id: 'aparecida-damasceno',
    autor: 'Aparecida Damasceno',
    nota: 5,
    quando: '2 meses atrás',
    texto:
      'Simone Sá Ateliê de Costura... O que dizer sobre ela? Profissional especializada em alta costura, carismática e dona de uma sensibilidade indescritível. Perfeição define o seu trabalho. Atendimento de excelência. Obrigada pela dedicação e carinho com que me recebe, e na entrega ao confeccionar minhas roupas. Grata sou!',
  },
  {
    id: 'fernanda-menezes',
    autor: 'Fernanda Menezes',
    nota: 5,
    quando: 'um ano atrás',
    localGuide: true,
    texto:
      'Fiquei muito satisfeita com o trabalho da Simone. Ela é muito detalhista, pontual e atenciosa. Conseguiu adaptar minhas roupas perfeitamente ao meu corpo, e o acabamento ficou impecável. Além disso, o atendimento é sempre muito cordial e profissional. Recomendo de olhos fechados!',
  },
  {
    id: 'sumaia-tavares',
    autor: 'Sumaia Tavares',
    nota: 5,
    quando: '2 meses atrás',
    texto:
      'O trabalho da Simone é de excelência e zelo. Sempre atenciosa e superando as nossas expectativas. Ela confeccionou uma fantasia linda para o meu filho, do Darth Vader e ficou maravilhosa. Também produziu um vestido lindo, vermelho, com borboletas, para o primeiro aninho da minha filha. Ela tem o cuidado de indicar tecidos de qualidade para a confecção do trabalho e tem muito cuidado com os detalhes. Todos ficaram lindos e muito bem confeccionados!',
  },
  {
    id: 'grecia-souza',
    autor: 'Grécia de Andrade Souza',
    nota: 5,
    quando: '6 meses atrás',
    texto:
      'Simplesmente a melhor costureira do vale do aço! Profissional excelente, com muito conhecimento. Dá ótimas dicas, tem muita experiência. Impecável nos acabamentos, caprichosa e muito criativa!!! Minhas roupas feitas por ela são lindas e elegantes!',
  },
  {
    id: 'jeanne-alves',
    autor: 'Jeanne Alves',
    nota: 5,
    quando: '6 meses atrás',
    texto:
      'Nossa a Simone, ela é uma excelente profissional, uma costureira maravilhosa dedicada e muito carinhosa com os seus clientes. A Simone fez um vestido p mim e um para minha sobrinha. Amamos a costura dela, agora ela é a nossa costureira oficial pois eu já tinha desistido de manda fazer roupas p mim de tanta decepção com costureiras. A Simone pelo contrário provou que a profissão delas é feita com amor',
  },
  {
    id: 'fabiana-oliveira',
    autor: 'Fabiana Oliveira',
    nota: 5,
    quando: '2 meses atrás',
    texto:
      'Excelente profissional! Atendimento impecável, muito capricho e atenção em cada detalhe. As roupas ficaram perfeitas no corpo e exatamente como eu imaginei. Dá pra perceber o carinho e a dedicação no trabalho. E o melhor de tudo ela sempre compra as minhas ideias malucas rsrs... Super recomendo!',
  },
  {
    id: 'm-almeida',
    autor: 'M. Almeida',
    nota: 5,
    quando: '6 meses atrás',
    texto:
      'Perfeição define ela!!! Tão bom sonhar com uma roupa e ela reproduzir ainda melhor!! Há mais de 10 anos fazendo meus looks. Aprovada e super recomendo!!',
  },
  {
    id: 'nobre-ortodontia',
    autor: 'Nobre Ortodontia',
    nota: 5,
    quando: '6 meses atrás',
    texto:
      'Conheço a Simone há muito tempo, o trabalho dela é incrível, perfeito. Muito caprichosa e muito detalhista!! O vestido encaixa no corpo. Além do trabalho perfeito ela cumpre a risca os prazos da confecção do vestido. Super indico.',
  },
  {
    id: 'isabella-godoy',
    autor: 'Isabella Godoy',
    nota: 5,
    quando: '3 meses atrás',
    texto:
      'Vivi uma experiência maravilhosa com a Simone. Uma profissional muito dedicada, fez exatamente o vestido que eu queria... foi a realização de um sonho, valeu muito a pena.',
  },
  {
    id: 'kelly-jaques',
    autor: 'Kelly Jaques',
    nota: 5,
    quando: '2 meses atrás',
    texto:
      'Que experiência incrível, falei com Simone o que queria, e ela fez do jeitinho que pedi!!!! Ela é incrível, e faz tudo com muito amor, é o que faz toda diferença no trabalho dela',
  },
  {
    id: 'junia-marise',
    autor: 'Junia Marise',
    nota: 5,
    quando: '2 meses atrás',
    localGuide: true,
    texto:
      'Costura impecável. Preço justo. Atendimento personalizado. Faz exatamente o que é pedido, sugere melhorias, lojas com preços bons para tecidos, presta a consultoria para ajudar a escolher o tecido ideal.',
  },
  {
    id: 'silvinha-barros',
    autor: 'Silvinha Barros',
    nota: 5,
    quando: '2 meses atrás',
    texto:
      'Muito competente, habilidosa e atendimento personalizado. Minha melhor opção em costura no Vale do Aço.',
  },
  {
    id: 'rizia-martiniano',
    autor: 'Rizia Kerem Martiniano',
    nota: 5,
    quando: '2 meses atrás',
    texto:
      'Excelente trabalho!! Costura impecável!!! Simone além de ser uma pessoa muito gentil e atenciosa trabalha muito bem!!!',
  },
  {
    id: 'paloma-oliveira',
    autor: 'Paloma Oliveira',
    nota: 5,
    quando: '2 meses atrás',
    texto:
      'Profissional excelente, atendeu e superou todas as minhas expectativas. Cuidadosa, detalhista e uma pessoa muito agradável. Recomendo.',
  },
  {
    id: 'angela-damasceno',
    autor: 'Angela Damasceno',
    nota: 5,
    quando: 'um ano atrás',
    texto:
      'Costureira simpática, com boas ideias, me ajudou na decisão do modelo, muito bom gosto e trabalho impecável. Meu vestido ficou lindo!',
  },
]
