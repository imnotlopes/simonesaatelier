import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

import { perguntas } from '../data/faq'
import BotaoWhatsapp from './BotaoWhatsapp'
import SecaoTitulo from './SecaoTitulo'
import { brand } from '../lib/brand'

/**
 * Acordeão em <details>/<summary>: abre e fecha sem JavaScript, já vem com
 * a semântica certa para leitor de tela e é localizável pelo Ctrl+F do
 * navegador mesmo fechado.
 */
export default function Faq() {
  return (
    /*
      A FAQ é sempre a última seção antes do rodapé, então ela não leva
      espaçamento embaixo: o rodapé já tem o seu (py-16/py-20). Com os dois,
      sobravam de 75 a 131px de branco colados no rodapé preto, variando com
      a largura da tela porque --espaco-secao é um clamp.
    */
    <section className="secao bg-branco pb-0">
      <div className="container-luxo">
        <SecaoTitulo eyebrow="Dúvidas" titulo="Perguntas frequentes" centralizado />

        <ul className="mx-auto mt-14 flex max-w-3xl flex-col border-t border-borda-sutil">
          {perguntas.map((item) => (
            <li key={item.id} className="border-b border-borda-sutil">
              <ItemFaq pergunta={item.pergunta} resposta={item.resposta} />
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center gap-5 text-center">
          <p className="text-preto/70">Ficou com outra dúvida?</p>
          <BotaoWhatsapp
            mensagem={`Olá! Vim pelo site do Atelier ${brand.nome} e fiquei com uma dúvida.`}
          >
            Perguntar no WhatsApp
          </BotaoWhatsapp>
        </div>
      </div>
    </section>
  )
}

function ItemFaq({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [aberto, setAberto] = useState(false)

  return (
    <details
      open={aberto}
      onToggle={(e) => setAberto((e.currentTarget as HTMLDetailsElement).open)}
      className="group"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
        <h3 className="font-display text-h5 uppercase tracking-luxo transition-colors duration-300 ease-suave group-hover:text-cinza">
          {pergunta}
        </h3>
        <span aria-hidden className="shrink-0 text-preto">
          {aberto ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </span>
      </summary>

      <p className="max-w-2xl pb-7 leading-relaxed text-preto/75">{resposta}</p>
    </details>
  )
}
