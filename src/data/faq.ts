export interface Pergunta {
  id: string
  pergunta: string
  resposta: string
}

/**
 * Máximo de 4 — a FAQ aparece em todas as páginas, então precisa ser curta.
 * TODO: revise as respostas; são o que costuma valer para um atelier sob
 * medida, mas os prazos e condições precisam ser os seus de verdade.
 */
export const perguntas: Pergunta[] = [
  {
    id: 'prazo',
    pergunta: 'Quanto tempo leva para a peça ficar pronta?',
    resposta:
      'Em média quarenta e cinco dias, do primeiro atendimento à entrega, contando as provas. Vestidos de noiva e peças com bordado manual pedem mais tempo — o ideal é procurar o atelier com três a quatro meses de antecedência.',
  },
  {
    id: 'atendimento',
    pergunta: 'Preciso agendar para ser atendida?',
    resposta:
      'Sim. O atendimento é individual e com hora marcada, para que a conversa sobre modelo, tecido e medidas aconteça sem pressa. É só chamar no WhatsApp com a ocasião e a data do evento que combinamos o melhor horário.',
  },
  {
    id: 'orcamento',
    pergunta: 'Como funciona o orçamento?',
    resposta:
      'O valor depende do modelo, do tecido escolhido e do acabamento, então é fechado depois da primeira conversa — não existe tabela pronta. Mande uma mensagem com a referência que você tem em mente e passamos uma estimativa.',
  },
  {
    id: 'ajustes',
    pergunta: 'Vocês fazem ajustes em peças compradas em outro lugar?',
    resposta:
      'Sim, fazemos ajustes e reformas de peças de festa que não foram feitas aqui, dentro da agenda do atelier. Mande uma foto da peça pelo WhatsApp que avaliamos o que é possível fazer.',
  },
]
