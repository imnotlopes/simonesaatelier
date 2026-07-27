import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import BotaoWhatsapp from '../components/BotaoWhatsapp'
import CardPeca from '../components/CardPeca'
import Depoimentos from '../components/Depoimentos'
import SecaoTitulo from '../components/SecaoTitulo'
import Seo from '../components/Seo'
import { IconeInstagram } from '../components/icones'
import { categoriasVitrine, pecasDestaque } from '../data/pecas'
import { brand, linkInstagram } from '../lib/brand'

const IMAGEM_HERO = '/pecas/placeholder-01.jpg'

const PASSOS_SOB_MEDIDA = [
  { titulo: 'Conversa', texto: 'Entendemos a ocasião, o corpo e a referência que você trouxe.' },
  { titulo: 'Modelagem', texto: 'O molde é desenvolvido do zero sobre as suas medidas.' },
  { titulo: 'Provas', texto: 'Três encontros para acertar caimento, comprimento e acabamento.' },
]

export default function Home() {
  return (
    <>
      <Seo descricao="Atelier de costura sob medida: vestidos de noiva, festa, debutante e infantil. Modelagem própria, provas no atelier e acabamento feito à mão." />

      {/* ------------------------------------------------------------------ */}
      {/* 1 · Hero                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative flex min-h-[82svh] items-center overflow-hidden">
        <img
          src={IMAGEM_HERO}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover object-center"
        />
        {/*
          Véu escuro. Calibrado para sustentar o contraste do texto mesmo com
          foto clara — vale conferir de novo ao trocar a imagem definitiva.
        */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-preto/85 via-preto/60 to-preto/25"
        />

        <div className="container-luxo relative py-24">
          <div className="max-w-xl">
            <span className="font-display text-h6 uppercase tracking-luxo-lg text-branco/70">
              {brand.subtitulo} {brand.nome}
            </span>

            <h1 className="mt-6 font-display text-branco">Alta-costura sob medida</h1>

            <span className="filete-claro mt-7" />

            <p className="mt-7 max-w-md text-branco/75">
              Cada peça nasce de uma modelagem própria, desenhada sobre o seu corpo e
              costurada à mão no atelier.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {/* Sobre a foto escura a hierarquia inverte: o cheio é o branco. */}
              <Link to="/catalogo" className="btn-secundario">
                Ver catálogo
              </Link>
              <BotaoWhatsapp
                variante="contorno-claro"
                mensagem={`Olá! Vim pelo site do Atelier ${brand.nome} e gostaria de conversar sobre uma peça.`}
              >
                Falar com o atelier
              </BotaoWhatsapp>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2 · Categorias                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="secao bg-off-white">
        <div className="container-luxo">
          <SecaoTitulo
            eyebrow="O que fazemos"
            titulo="Categorias"
            descricao="Do vestido de noiva ao traje de festa — cada ocasião pede uma construção diferente."
            centralizado
          />

          <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {categoriasVitrine.map(({ categoria, rotulo, capa, quantidade }) => (
              <li key={categoria}>
                <Link to={`/catalogo?categoria=${categoria}`} className="group block">
                  <div className="overflow-hidden bg-borda-sutil">
                    <img
                      src={capa}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-suave group-hover:scale-[1.05]"
                    />
                  </div>
                  <h3 className="mt-4 text-h5 uppercase tracking-luxo transition-colors duration-300 ease-suave group-hover:text-cinza">
                    {rotulo}
                  </h3>
                  <p className="mt-1 text-sm text-preto/65">
                    {quantidade} {quantidade === 1 ? 'peça' : 'peças'}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3 · Peças em destaque                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="secao bg-branco">
        <div className="container-luxo">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SecaoTitulo eyebrow="Seleção" titulo="Peças em destaque" />

            <Link
              to="/catalogo"
              className="link-menu inline-flex items-center gap-2 pb-1"
            >
              Ver tudo
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
            </Link>
          </div>

          <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {pecasDestaque.map((peca, indice) => (
              <li key={peca.slug}>
                <CardPeca peca={peca} prioridade={indice < 2} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4 · Faixa sob medida                                                */}
      {/* ------------------------------------------------------------------ */}
      {/* Bloco invertido: é o pico de contraste da página, no lugar onde
          antes havia a faixa dourada. */}
      <section className="bg-preto text-branco">
        <div className="container-luxo secao">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <span className="font-display text-h6 uppercase tracking-luxo text-branco/70">
                Sob medida
              </span>
              <h2 className="mt-3 uppercase tracking-luxo text-branco">
                Uma peça feita só para você
              </h2>
              <span className="filete-claro mt-6" />
              <p className="mt-6 max-w-md text-branco/75">
                Nada de tabela de tamanhos. O molde é construído a partir das suas
                medidas, e o caimento é ajustado prova a prova até ficar exato.
              </p>

              <BotaoWhatsapp
                variante="claro"
                className="mt-9"
                mensagem={`Olá! Vim pelo site do Atelier ${brand.nome} e gostaria de solicitar um orçamento para uma peça sob medida.`}
              >
                Solicitar orçamento
              </BotaoWhatsapp>
            </div>

            <ol className="grid gap-8 sm:grid-cols-3 lg:gap-6">
              {PASSOS_SOB_MEDIDA.map((passo, indice) => (
                <li key={passo.titulo} className="border-t border-branco/30 pt-5">
                  <span className="font-display text-h3 text-branco/55">
                    {String(indice + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-h5 uppercase tracking-luxo text-branco">
                    {passo.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-branco/75">{passo.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5 · Depoimentos                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="secao bg-off-white">
        <div className="container-luxo">
          <SecaoTitulo eyebrow="Clientes" titulo="Quem já vestiu" centralizado />
          <div className="mt-14">
            <Depoimentos />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6 · Instagram                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="secao bg-branco">
        <div className="container-luxo flex flex-col items-center text-center">
          <IconeInstagram width={28} height={28} className="text-preto" />

          <h2 className="mt-6 uppercase tracking-luxo">Acompanhe o atelier</h2>
          <span className="filete mt-6" />

          <p className="mt-6 max-w-md text-preto/70">
            Bastidores, tecidos chegando e peças saindo — o dia a dia do atelier
            está no Instagram.
          </p>

          <a
            href={linkInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contorno mt-10"
          >
            Seguir {brand.instagram}
          </a>
        </div>
      </section>
    </>
  )
}
