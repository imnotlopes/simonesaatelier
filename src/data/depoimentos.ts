export interface Depoimento {
  id: string
  nome: string
  /** Curto — duas ou três linhas no máximo. */
  texto: string
  ocasiao: string
}

export const depoimentos: Depoimento[] = [
  {
    id: 'carolina-m',
    nome: 'Carolina M.',
    texto:
      'Cheguei com uma ideia vaga e saí com um vestido que parecia sempre ter sido meu. A Simone entendeu o que eu não sabia explicar.',
    ocasiao: 'Vestido de noiva',
  },
  {
    id: 'renata-l',
    nome: 'Renata L.',
    texto:
      'Três provas, nenhum ajuste de última hora. É raro encontrar esse cuidado com prazo e com caimento ao mesmo tempo.',
    ocasiao: 'Vestido de festa',
  },
  {
    id: 'beatriz-s',
    nome: 'Beatriz S.',
    texto:
      'Minha filha girou a noite inteira e o vestido continuou impecável. O acabamento por dentro é tão bonito quanto por fora.',
    ocasiao: 'Debutante',
  },
]
