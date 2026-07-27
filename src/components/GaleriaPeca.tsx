import { useState } from 'react'

import { cn } from '../lib/utils'

interface GaleriaPecaProps {
  imagens: string[]
  nome: string
}

/**
 * Imagem principal + miniaturas.
 * Renderize com `key={peca.slug}` para que a miniatura ativa volte à primeira
 * ao navegar de uma peça para outra.
 */
export default function GaleriaPeca({ imagens, nome }: GaleriaPecaProps) {
  const [ativa, setAtiva] = useState(0)

  return (
    <div>
      <div className="overflow-hidden bg-borda-sutil">
        <img
          src={imagens[ativa]}
          alt={nome}
          fetchPriority="high"
          decoding="async"
          className="aspect-[3/4] w-full object-cover"
        />
      </div>

      {imagens.length > 1 && (
        <ul className="mt-4 grid grid-cols-4 gap-4">
          {imagens.map((imagem, indice) => (
            <li key={imagem}>
              <button
                type="button"
                onClick={() => setAtiva(indice)}
                aria-label={`Ver imagem ${indice + 1} de ${imagens.length}`}
                aria-current={indice === ativa}
                className={cn(
                  'block w-full overflow-hidden border-2 transition-colors duration-300 ease-suave',
                  indice === ativa
                    ? 'border-preto'
                    : 'border-transparent hover:border-borda',
                )}
              >
                <img
                  src={imagem}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
