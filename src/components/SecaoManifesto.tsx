import { brand } from '../lib/brand'

/**
 * Manifesto da Simone, em primeira pessoa.
 *
 * Fica logo depois do hero, antes de qualquer vitrine: quem chega lê a voz de
 * quem costura e só então vê as peças. É o texto que responde "por que aqui e
 * não em outro lugar", e por isso vem antes do catálogo.
 *
 * Sem foto de propósito: o retrato da Simone vive na página Sobre. Aqui o
 * peso é todo da tipografia, com a coluna estreita para a leitura não se
 * perder na largura da tela.
 *
 * Marcado como <blockquote> com <cite>: são palavras de uma pessoa real, não
 * texto institucional.
 */
export default function SecaoManifesto() {
  return (
    <section className="secao bg-branco">
      <div className="container-luxo">
        <blockquote className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="font-display text-h2 font-light uppercase leading-tight tracking-luxo text-preto">
            Costuro há 30 anos. Comecei por amor e continuo por amor.
          </p>

          <span className="filete mt-10" />

          <div className="mt-10 max-w-xl space-y-5 text-preto/75">
            <p>
              Se tem uma coisa que me realiza é fazer parte de momentos únicos.
              O vestido de noiva que vira memória pra vida toda. O vestido de
              festa que te faz entrar e todo mundo virar pra olhar.
            </p>
            <p>
              Minha diferença está no detalhe, no caimento perfeito e no carinho
              de quem costura há 3 décadas sabendo que cada ponto carrega um
              sonho.
            </p>
          </div>

          {/* A frase de fechamento é a promessa da marca: ganha peso próprio. */}
          <p className="mt-10 max-w-2xl font-display text-h3 font-light italic leading-snug text-preto">
            Meu trabalho é esse: transformar tecido em autoestima e fazer você se
            sentir a protagonista do seu momento.
          </p>

          <cite className="mt-10 block font-display text-h6 uppercase not-italic tracking-luxo text-cinza">
            {brand.nome}, {brand.subtitulo}
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
