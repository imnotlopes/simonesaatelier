import { brand, linkInstagram, linkWhatsApp } from '../lib/brand'
import { IconeInstagram, IconeWhatsapp } from './icones'

const MENSAGEM_RODAPE = `Olá! Vim pelo site do Atelier ${brand.nome} e gostaria de conversar.`

const classeContato =
  'inline-flex items-center gap-3 font-display text-h6 uppercase tracking-luxo text-branco/80 transition-colors duration-300 ease-suave hover:text-branco'

export default function Footer() {
  return (
    <footer className="bg-preto text-branco">
      <div className="container-luxo flex flex-col items-center gap-10 py-16 text-center md:py-20">
        {/* Aqui cabe o lockup completo: em ~160px o "SIMONE SÁ" ainda é legível. */}
        <img
          src="/logo-completo-claro.png"
          alt={`${brand.nome} ${brand.subtitulo}`}
          width={720}
          height={636}
          loading="lazy"
          decoding="async"
          className="h-auto w-40 md:w-44"
        />

        <span className="filete-claro" />

        <p className="max-w-sm text-sm leading-relaxed text-branco/60">
          Costura sob medida, modelagem própria e acabamento feito à mão.
        </p>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-12">
          <a href={linkInstagram} target="_blank" rel="noopener noreferrer" className={classeContato}>
            <IconeInstagram width={18} height={18} />
            {brand.instagram}
          </a>

          <a
            href={linkWhatsApp(MENSAGEM_RODAPE)}
            target="_blank"
            rel="noopener noreferrer"
            className={classeContato}
          >
            <IconeWhatsapp width={18} height={18} />
            WhatsApp
          </a>
        </div>

        <p className="mt-2 text-xs tracking-wide text-branco/55">
          © {new Date().getFullYear()} {brand.nomeRegistrado}. Marca registrada no INPI.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
