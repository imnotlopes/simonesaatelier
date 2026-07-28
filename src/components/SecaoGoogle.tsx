import { MapPin, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'

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
/* Avaliações — grade de prints, ampliáveis no clique                          */
/* -------------------------------------------------------------------------- */

function Avaliacoes() {
  const [ampliada, setAmpliada] = useState<number | null>(null)

  // Fechar com Escape é o reflexo esperado de quem abriu uma imagem grande.
  useEffect(() => {
    if (ampliada === null) return
    const aoTeclar = (e: KeyboardEvent) => e.key === 'Escape' && setAmpliada(null)
    window.addEventListener('keydown', aoTeclar)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', aoTeclar)
      document.body.style.overflow = ''
    }
  }, [ampliada])

  const temPrints = avaliacoesGoogle.length > 0

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
          {googleNegocio.totalAvaliacoes > 0 && (
            <p className="text-sm text-preto/65">
              {googleNegocio.nota.toLocaleString('pt-BR', { minimumFractionDigits: 1 })} de 5
              {' · '}
              {googleNegocio.totalAvaliacoes}{' '}
              {googleNegocio.totalAvaliacoes === 1 ? 'avaliação' : 'avaliações'}
            </p>
          )}
        </div>

        {/*
          Colunas de altura livre, não grade: os prints têm proporções bem
          diferentes e, recortados para um formato único, o texto da avaliação
          ficaria cortado — que é justamente o que interessa ler aqui.
        */}
        {temPrints && (
          <ul className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {avaliacoesGoogle.map((avaliacao, indice) => (
              <li key={avaliacao.src} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setAmpliada(indice)}
                  className="block w-full overflow-hidden border border-borda-sutil bg-off-white transition-colors duration-300 ease-suave hover:border-preto"
                >
                  <img
                    src={avaliacao.src}
                    alt={avaliacao.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full"
                  />
                  <span className="sr-only">Ampliar avaliação</span>
                </button>
              </li>
            ))}
          </ul>
        )}

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

      {ampliada !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Avaliação ampliada"
          onClick={() => setAmpliada(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-preto/90 p-4"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setAmpliada(null)}
            className="absolute right-4 top-4 p-2 text-branco transition-opacity duration-300 hover:opacity-70"
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          <img
            src={avaliacoesGoogle[ampliada].src}
            alt={avaliacoesGoogle[ampliada].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88svh] w-auto max-w-full object-contain"
          />
        </div>
      )}
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Mapa e informações                                                          */
/* -------------------------------------------------------------------------- */

function MapaEInformacoes() {
  // Cidade e endereço ainda não preenchidos: monta só com o que existe,
  // em vez de exibir " — MG" solto.
  const local = [googleNegocio.cidade, googleNegocio.estado].filter(Boolean).join(' — ')
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
                {googleNegocio.totalAvaliacoes > 0 && (
                  <span className="text-sm text-preto/65">
                    ({googleNegocio.totalAvaliacoes})
                  </span>
                )}
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
