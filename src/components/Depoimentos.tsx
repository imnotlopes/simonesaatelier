import { depoimentos } from '../data/depoimentos'

/**
 * Grid simples dos depoimentos — três colunas no desktop, empilhado no mobile.
 * Compartilhado entre a home e a página Sobre.
 */
export default function Depoimentos() {
  return (
    <ul className="grid gap-px bg-borda-sutil md:grid-cols-3">
      {depoimentos.map((depoimento) => (
        <li key={depoimento.id} className="flex flex-col bg-off-white p-8 md:p-10">
          <span aria-hidden className="font-display text-5xl leading-none text-preto/25">
            &ldquo;
          </span>

          <blockquote className="mt-4 flex-1">
            <p className="font-display text-h4 font-light italic leading-snug text-preto">
              {depoimento.texto}
            </p>
          </blockquote>

          <footer className="mt-8">
            <p className="font-display text-h6 uppercase tracking-luxo text-preto">
              {depoimento.nome}
            </p>
            <p className="mt-1 text-sm text-preto/65">{depoimento.ocasiao}</p>
          </footer>
        </li>
      ))}
    </ul>
  )
}
