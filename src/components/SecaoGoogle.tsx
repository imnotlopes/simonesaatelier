import { MapPin, Phone } from 'lucide-react'

import { avaliacoesGoogle, googleNegocio } from '../data/google'
import { brand } from '../lib/brand'
import { Estrelas } from './IconeEstrela'
import SecaoTitulo from './SecaoTitulo'

export default function SecaoGoogle() {
  return (
    <>
      <Avaliacoes />
      <MapaEInformacoes />
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* Avaliações                                                                  */
/* -------------------------------------------------------------------------- */

function Avaliacoes() {
  return (
    <section className="secao bg-branco">
      <div className="container-luxo">
        <SecaoTitulo
          eyebrow="Avaliações no Google"
          titulo="O que dizem sobre o atelier"
          centralizado
        />

        <div className="mt-8 flex flex-col items-center gap-3">
          <Estrelas nota={googleNegocio.nota} className="flex items-center" />
          <p className="text-sm text-preto/65">
            {googleNegocio.nota.toLocaleString('pt-BR', { minimumFractionDigits: 1 })} de 5
            {' · '}
            {googleNegocio.totalAvaliacoes}{' '}
            {googleNegocio.totalAvaliacoes === 1 ? 'avaliação' : 'avaliações'}
          </p>
        </div>

        {/*
          Carrossel horizontal com scroll nativo: arrasta no touch, roda o
          shift+scroll no desktop e o teclado navega pelos cards porque cada
          um é focável. Sem biblioteca e sem autoplay — quem lê avaliação
          quer controlar o próprio ritmo.

          O `snap` prende cada card na borda esquerda. Os cards têm altura
          igual (`items-stretch`) e o texto empurra o autor para o rodapé do
          card, então avaliação curta e longa ficam alinhadas.
        */}
        <ul
          className="mt-14 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto pb-6
                     [scrollbar-color:rgb(var(--borda-rgb))_transparent] [scrollbar-width:thin]
                     md:gap-6"
          tabIndex={0}
          role="region"
          aria-label="Avaliações do Google, rolagem horizontal"
        >
          {avaliacoesGoogle.map((avaliacao) => (
            <li
              key={avaliacao.id}
              /*
                Largura em rem, não em vw: `vw` conta a barra de rolagem
                vertical, então 80vw é mais largo que a área útil e empurra a
                página para fora em algumas telas. Em rem o card nunca passa
                do container.
              */
              className="flex w-[17rem] shrink-0 snap-start flex-col border border-borda-sutil
                         bg-off-white p-7 sm:w-[21rem] md:p-8 lg:w-[24rem]"
            >
              <figure className="flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <Estrelas nota={avaliacao.nota} className="flex items-center" />
                  <span className="text-sm text-preto/65">{avaliacao.quando}</span>
                </div>

                <blockquote className="mt-5 flex-1">
                  <p className="leading-relaxed text-preto/80">{avaliacao.texto}</p>
                </blockquote>

                <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-h6 uppercase tracking-luxo text-preto">
                    {avaliacao.autor}
                  </span>
                  {avaliacao.localGuide && (
                    <span className="text-xs uppercase tracking-luxo text-preto/65">
                      Local Guide
                    </span>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <a
            href={googleNegocio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contorno"
          >
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Mapa e informações                                                          */
/* -------------------------------------------------------------------------- */

function MapaEInformacoes() {
  // Cidade e endereço ainda não preenchidos: monta só com o que existe,
  // em vez de exibir ", MG" solto.
  const local = [googleNegocio.cidade, googleNegocio.estado].filter(Boolean).join(', ')
  const enderecoCompleto = [googleNegocio.endereco, local].filter(Boolean).join(', ')

  return (
    <section className="secao bg-off-white">
      <div className="container-luxo">
        <SecaoTitulo eyebrow="Onde estamos" titulo="Visite o atelier" centralizado />

        <div className="mt-14 grid gap-px overflow-hidden border border-borda-sutil bg-borda-sutil lg:grid-cols-[1fr_1.4fr]">
          {/* Informações */}
          <div className="flex flex-col gap-8 bg-branco p-8 md:p-10">
            <div>
              <h3 className="font-display text-h5 uppercase tracking-luxo">
                {googleNegocio.nome}
              </h3>
              <div className="mt-3 flex items-center gap-3">
                <Estrelas nota={googleNegocio.nota} className="flex items-center" />
                <span className="text-sm text-preto/65">
                  ({googleNegocio.totalAvaliacoes})
                </span>
              </div>
            </div>

            <dl className="flex flex-col gap-6">
              {enderecoCompleto && (
                <div className="flex gap-3">
                  <MapPin size={18} strokeWidth={1.5} aria-hidden className="mt-0.5 shrink-0" />
                  <div>
                    <dt className="font-display text-h6 uppercase tracking-luxo text-preto/65">
                      Endereço
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed">{enderecoCompleto}</dd>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Phone size={18} strokeWidth={1.5} aria-hidden className="mt-0.5 shrink-0" />
                <div>
                  <dt className="font-display text-h6 uppercase tracking-luxo text-preto/65">
                    Telefone
                  </dt>
                  <dd className="mt-1 text-sm">
                    <a
                      href={`tel:+${brand.whatsapp}`}
                      className="underline-offset-4 transition-colors duration-300 ease-suave hover:text-cinza hover:underline"
                    >
                      {brand.whatsappExibicao}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            {googleNegocio.horarios.length > 0 && (
              <div>
                <p className="font-display text-h6 uppercase tracking-luxo text-preto/65">
                  Atendimento
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {googleNegocio.horarios.map((h) => (
                    <li key={h.dias} className="flex justify-between gap-4 text-sm">
                      <span className="text-preto/65">{h.dias}</span>
                      <span>{h.horas}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={googleNegocio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primario btn-sm mt-auto self-start"
            >
              Como chegar
            </a>
          </div>

          {/* Mapa */}
          <div className="min-h-[320px] bg-branco lg:min-h-[460px]">
            <iframe
              src={googleNegocio.mapaEmbed}
              title={`Mapa com a localização do ${googleNegocio.nome}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="size-full min-h-[320px] border-0 grayscale lg:min-h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
