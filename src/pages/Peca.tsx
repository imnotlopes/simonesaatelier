import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import BotaoWhatsapp from '../components/BotaoWhatsapp'
import CardPeca from '../components/CardPeca'
import GaleriaPeca from '../components/GaleriaPeca'
import SecaoTitulo from '../components/SecaoTitulo'
import Seo from '../components/Seo'
import {
  buscarPeca,
  pecasPorCategoria,
  rotulosCategoria,
  type Peca as TipoPeca,
} from '../data/pecas'

/**
 * Todo o catálogo é sob medida, então a mensagem é sempre de orçamento.
 *
 * O nome da peça é o da cliente que a vestiu, então a frase é montada para
 * funcionar nos dois casos: "a peça Isabella (Debutante, Estilo Mullet)" e
 * também as que ainda estão com título descritivo. Categoria e estilo entram
 * entre parênteses para a Simone identificar o vestido na primeira linha.
 */
function mensagemDaPeca(peca: TipoPeca) {
  const contexto = `${rotulosCategoria[peca.categoria]}, ${peca.descricao}`
  return `Olá! Vi no site a peça ${peca.nome} (${contexto}) e gostaria de um orçamento sob medida.`
}

export default function Peca() {
  const { slug } = useParams<{ slug: string }>()
  const peca = slug ? buscarPeca(slug) : undefined

  if (!peca) return <PecaNaoEncontrada />

  const relacionadas = pecasPorCategoria(peca.categoria)
    .filter((outra) => outra.slug !== peca.slug)
    .slice(0, 3)

  return (
    <>
      <Seo
        titulo={`${peca.nome} | ${rotulosCategoria[peca.categoria]}`}
        /* A descrição da peça é só o estilo, curto demais para meta tag.
           Aqui ela entra numa frase que dá contexto ao buscador. */
        descricao={`${peca.descricao}. Peça de ${rotulosCategoria[
          peca.categoria
        ].toLowerCase()} desenvolvida sob medida no atelier Simone Sá, com modelagem própria e provas no atelier.`}
        imagem={peca.imagens[0]}
      />

      <section className="secao bg-off-white">
        <div className="container-luxo">
          <Link to="/catalogo" className="link-menu inline-flex items-center gap-2">
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden />
            Voltar ao catálogo
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* key: reinicia a miniatura ativa ao trocar de peça */}
            <GaleriaPeca key={peca.slug} imagens={peca.imagens} nome={peca.nome} />

            <div className="lg:pt-4">
              <Link
                to={`/catalogo?categoria=${peca.categoria}`}
                className="eyebrow transition-colors duration-300 ease-suave hover:text-preto"
              >
                {rotulosCategoria[peca.categoria]}
              </Link>

              <h1 className="mt-4 uppercase tracking-luxo">{peca.nome}</h1>
              <span className="filete mt-6" />

              {/* A descrição é o estilo, em uma linha. Ganha peso de destaque
                  porque é a única informação sobre a peça. */}
              <p className="mt-8 font-display text-h4 font-light text-preto/75">
                {peca.descricao}
              </p>

              <div className="mt-10 border-l-2 border-preto bg-branco p-7">
                <p className="font-display text-h5 uppercase tracking-luxo text-preto">
                  Peça sob medida
                </p>
                <p className="mt-3 text-sm leading-relaxed text-preto/70">
                  Modelagem desenvolvida a partir das suas medidas, com provas no
                  atelier. O valor depende do tecido e do acabamento escolhidos.
                </p>
              </div>

              <BotaoWhatsapp className="mt-8 w-full sm:w-auto" mensagem={mensagemDaPeca(peca)}>
                Solicitar orçamento
              </BotaoWhatsapp>
            </div>
          </div>
        </div>
      </section>

      {relacionadas.length > 0 && (
        <section className="secao bg-branco">
          <div className="container-luxo">
            <SecaoTitulo eyebrow="Na mesma categoria" titulo="Você também pode gostar" />

            <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relacionadas.map((outra) => (
                <li key={outra.slug}>
                  <CardPeca peca={outra} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}

/** Slug inexistente: mantém a URL e oferece saída, em vez de redirecionar seco. */
function PecaNaoEncontrada() {
  return (
    <section className="secao bg-off-white">
      <Seo
        titulo="Peça não encontrada"
        descricao="Esta peça não está mais disponível no catálogo do atelier Simone Sá."
      />

      <div className="container-luxo flex flex-col items-center py-16 text-center">
        <span className="eyebrow">Peça não encontrada</span>

        <h1 className="mt-4 uppercase tracking-luxo">
          Esta peça saiu do catálogo
        </h1>
        <span className="filete mt-6" />

        <p className="mt-6 max-w-md text-preto/70">
          O endereço pode ter mudado ou a peça já não está disponível. Veja o
          catálogo completo ou fale com o atelier sobre uma criação sob medida.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/catalogo" className="btn-primario">
            Ver o catálogo
          </Link>
          <BotaoWhatsapp
            variante="contorno"
            mensagem="Olá! Estava vendo uma peça no site e gostaria de mais informações."
          >
            Falar com o atelier
          </BotaoWhatsapp>
        </div>
      </div>
    </section>
  )
}
