import { Link } from 'react-router-dom'

import { rotulosCategoria, type Peca } from '../data/pecas'
import { cn } from '../lib/utils'

interface CardPecaProps {
  peca: Peca
  /** A primeira fileira da home carrega adiantada; o resto é lazy. */
  prioridade?: boolean
  className?: string
}

/** Card de vitrine. Usado na home (destaques) e no catálogo. */
export default function CardPeca({ peca, prioridade = false, className }: CardPecaProps) {
  return (
    <Link to={`/peca/${peca.slug}`} className={cn('group block', className)}>
      <div className="relative overflow-hidden bg-borda-sutil">
        <img
          src={peca.imagens[0]}
          alt={peca.nome}
          loading={prioridade ? 'eager' : 'lazy'}
          decoding="async"
          className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-suave group-hover:scale-[1.04]"
        />

        {!peca.sobMedida && (
          <span className="absolute left-0 top-0 bg-branco/95 px-3 py-2 font-display text-h6 uppercase tracking-luxo text-preto">
            Pronta entrega
          </span>
        )}
      </div>

      <div className="pt-5">
        <span className="eyebrow block">{rotulosCategoria[peca.categoria]}</span>
        <h3 className="mt-2 text-h4 uppercase tracking-luxo transition-colors duration-300 ease-suave group-hover:text-cinza">
          {peca.nome}
        </h3>
        {peca.tecido && (
          <p className="mt-1 text-sm capitalize text-preto/65">{peca.tecido}</p>
        )}
      </div>
    </Link>
  )
}
