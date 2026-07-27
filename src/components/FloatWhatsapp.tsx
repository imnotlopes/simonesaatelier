import { brand, linkWhatsApp } from '../lib/brand'
import { IconeWhatsapp } from './icones'

const MENSAGEM_GENERICA = `Olá! Vim pelo site do Atelier ${brand.nome} e gostaria de mais informações.`

/**
 * Botão flutuante de contato, presente em todas as páginas.
 * O formato redondo é a ÚNICA exceção deliberada ao radius 0 do design system —
 * é um elemento de interface, não uma superfície da marca.
 */
export default function FloatWhatsapp() {
  return (
    <a
      href={linkWhatsApp(MENSAGEM_GENERICA)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o atelier no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center
                 rounded-full bg-preto text-branco shadow-md transition-all
                 duration-300 ease-suave hover:bg-cinza hover:shadow-lg
                 focus-visible:outline-offset-4 md:bottom-8 md:right-8"
    >
      <IconeWhatsapp width={26} height={26} strokeWidth={1.5} />
    </a>
  )
}
