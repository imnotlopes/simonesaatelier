import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import CardPeca from '../components/CardPeca'
import SecaoTitulo from '../components/SecaoTitulo'
import Seo from '../components/Seo'
import {
  categoriasDisponiveis,
  pecas,
  pecasPorCategoria,
  rotulosCategoria,
  type CategoriaPeca,
} from '../data/pecas'
import { cn } from '../lib/utils'

const PARAM = 'categoria'

function ehCategoria(valor: string | null): valor is CategoriaPeca {
  return valor !== null && categoriasDisponiveis.includes(valor as CategoriaPeca)
}

export default function Catalogo() {
  const [params, setParams] = useSearchParams()

  /**
   * A URL é a fonte de verdade do filtro — é ela que chega dos cards da home
   * (/catalogo?categoria=noiva) e que o botão voltar do navegador restaura.
   * Valor desconhecido cai em "Todas" em vez de quebrar a página.
   */
  const filtroAtivo = ehCategoria(params.get(PARAM)) ? params.get(PARAM) as CategoriaPeca : null

  const listadas = useMemo(
    () => (filtroAtivo ? pecasPorCategoria(filtroAtivo) : pecas),
    [filtroAtivo],
  )

  function selecionar(categoria: CategoriaPeca | null) {
    setParams(categoria ? { [PARAM]: categoria } : {})
  }

  return (
    <section className="secao bg-off-white">
      <Seo
        titulo={filtroAtivo ? `${rotulosCategoria[filtroAtivo]} — Catálogo` : 'Catálogo'}
        descricao={
          filtroAtivo
            ? `Peças da categoria ${rotulosCategoria[filtroAtivo].toLowerCase()} do atelier Simone Sá, prontas para prova ou desenvolvidas sob medida.`
            : 'Catálogo completo do atelier Simone Sá: vestidos de noiva, festa, debutante, infantil e alfaiataria sob medida.'
        }
        imagem={listadas[0]?.imagens[0]}
      />

      <div className="container-luxo">
        <SecaoTitulo
          eyebrow="Coleção"
          titulo="Catálogo"
          descricao="Peças prontas para prova e criações desenvolvidas sob medida."
          nivel={1}
          centralizado
        />

        {/* Filtro */}
        <div className="mt-14 flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar por categoria">
          <ChipFiltro ativo={filtroAtivo === null} aoClicar={() => selecionar(null)}>
            Todas
          </ChipFiltro>

          {categoriasDisponiveis.map((categoria) => (
            <ChipFiltro
              key={categoria}
              ativo={filtroAtivo === categoria}
              aoClicar={() => selecionar(categoria)}
            >
              {rotulosCategoria[categoria]}
            </ChipFiltro>
          ))}
        </div>

        {/* Contagem — dá retorno imediato de que o filtro agiu. */}
        <p aria-live="polite" className="mt-8 text-center text-sm text-preto/65">
          {listadas.length} {listadas.length === 1 ? 'peça' : 'peças'}
          {filtroAtivo && ` em ${rotulosCategoria[filtroAtivo].toLowerCase()}`}
        </p>

        {listadas.length > 0 ? (
          <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listadas.map((peca, indice) => (
              <li key={peca.slug}>
                <CardPeca peca={peca} prioridade={indice < 4} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-16 flex flex-col items-center border border-borda-sutil bg-branco px-8 py-20 text-center">
            <span className="filete" />
            <h2 className="mt-8 text-h4 uppercase tracking-luxo">
              Nenhuma peça nesta categoria
            </h2>
            <p className="mt-4 max-w-sm text-preto/65">
              O catálogo é renovado com frequência. Veja as demais categorias ou
              fale com o atelier sobre uma criação sob medida.
            </p>
            <button type="button" onClick={() => selecionar(null)} className="btn-contorno mt-10">
              Ver todas as peças
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ChipFiltro({
  ativo,
  aoClicar,
  children,
}: {
  ativo: boolean
  aoClicar: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={aoClicar}
      aria-pressed={ativo}
      className={cn(
        'border px-6 py-3 font-display text-h6 uppercase leading-none tracking-luxo',
        'transition-all duration-300 ease-suave',
        ativo
          ? 'border-preto bg-preto text-branco'
          : 'border-borda bg-transparent text-preto hover:border-preto hover:text-cinza',
      )}
    >
      {children}
    </button>
  )
}
