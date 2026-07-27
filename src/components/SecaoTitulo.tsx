import { cn } from '../lib/utils'

interface SecaoTituloProps {
  /** Rótulo pequeno em cinza, acima do título. */
  eyebrow?: string
  titulo: string
  /** Linha de apoio abaixo do filete. */
  descricao?: string
  centralizado?: boolean
  /** Use 1 apenas quando este for o título principal da página. */
  nivel?: 1 | 2 | 3
  className?: string
}

/**
 * Título de seção padronizado: uppercase, tracking 0.18em e um fino
 * filete preto abaixo. Único lugar onde esse ritmo é definido.
 */
export default function SecaoTitulo({
  eyebrow,
  titulo,
  descricao,
  centralizado = false,
  nivel = 2,
  className,
}: SecaoTituloProps) {
  const Titulo = `h${nivel}` as 'h1' | 'h2' | 'h3'

  return (
    <div className={cn(centralizado && 'flex flex-col items-center text-center', className)}>
      {eyebrow && <span className="eyebrow block">{eyebrow}</span>}

      <Titulo className={cn('uppercase tracking-luxo', eyebrow && 'mt-3')}>
        {titulo}
      </Titulo>

      <span className="filete mt-5" />

      {descricao && (
        <p className={cn('mt-5 max-w-prose text-preto/70', centralizado && 'mx-auto')}>
          {descricao}
        </p>
      )}
    </div>
  )
}
