import BotaoWhatsapp from '../components/BotaoWhatsapp'
import SecaoTitulo from '../components/SecaoTitulo'
import Seo from '../components/Seo'
import { brand } from '../lib/brand'

const FOTO_SIMONE = '/atelier/simone.webp'
const FOTO_EMBALAGEM = '/atelier/embalagem.webp'

const PROCESSO = [
  {
    titulo: 'Atendimento',
    texto:
      'Uma conversa sem pressa sobre a ocasião, as referências que você trouxe e o que o seu corpo pede. Saímos daqui com o desenho definido e o tecido escolhido.',
  },
  {
    titulo: 'Prova',
    texto:
      'A modelagem é desenvolvida do zero sobre as suas medidas e montada em tecido de prova, para acertar a estrutura antes de cortar o tecido definitivo.',
  },
  {
    titulo: 'Ajustes',
    texto:
      'Dois a três encontros para afinar caimento, comprimento e cava. É aqui que a peça deixa de servir e passa a pertencer.',
  },
  {
    titulo: 'Entrega',
    texto:
      'A peça sai passada, embalada e com as instruções de conservação. Ajustes finos de última hora ficam por nossa conta.',
  },
]

export default function Sobre() {
  return (
    <>
      <Seo
        titulo="Sobre o atelier"
        descricao="Conheça o atelier Simone Sá: modelagem construída do zero, três provas por peça e acabamento à mão. Atendimento individual com hora marcada."
        imagem={FOTO_SIMONE}
      />

      {/* Abertura */}
      <section className="secao bg-off-white">
        <div className="container-luxo grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SecaoTitulo
              eyebrow="Sobre"
              titulo="O atelier"
              nivel={1}
            />

            <div className="mt-8 space-y-5 text-preto/75">
              <p>
                O atelier {brand.nome} nasceu de um incômodo simples: roupa de festa
                raramente cabe em quem a veste. Aqui não existe tabela de tamanho:
                existe uma modelagem construída do zero, sobre as medidas e o corpo
                de cada cliente.
              </p>
              <p>
                Trabalhamos com poucas peças por vez, e isso é uma escolha. Cada
                vestido passa por três provas antes de sair, e boa parte do
                acabamento, como bainhas, aplicações e forros, é feita à mão. O que
                se vê por dentro da peça diz tanto quanto o que se vê por fora.
              </p>
              <p>
                Atendemos noivas, madrinhas, debutantes e daminhas,
                além de alfaiataria sob medida para o guarda-roupa que continua
                depois da festa. O atendimento é individual, com hora marcada.
              </p>
            </div>
          </div>

          {/* Retrato da Simone: a página fala do atelier, então mostra quem
              costura, não uma peça do catálogo. */}
          <figure>
            <div className="overflow-hidden bg-borda-sutil">
              <img
                src={FOTO_SIMONE}
                alt="Simone Sá no atelier, de camisa branca, segurando a tesoura de alfaiate ao lado do manequim de modelagem com o monograma da marca."
                width={1254}
                height={1254}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm text-preto/65">
              Simone Sá, à frente do atelier.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Processo */}
      <section className="secao bg-branco">
        <div className="container-luxo">
          <SecaoTitulo
            eyebrow="Como funciona"
            titulo="O processo sob medida"
            descricao="Do primeiro contato à entrega, em média quarenta e cinco dias."
            centralizado
          />

          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {PROCESSO.map((etapa, indice) => (
              <li key={etapa.titulo} className="border-t border-borda pt-6">
                {/* Numeral grande sobre branco: 3:1 basta para texto grande. */}
                <span className="font-display text-h2 leading-none text-preto/50">
                  {String(indice + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-h5 uppercase tracking-luxo">{etapa.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-preto/70">{etapa.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Embalagem */}
      <section className="secao bg-off-white">
        <div className="container-luxo grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <figure className="overflow-hidden bg-borda-sutil">
            <img
              src={FOTO_EMBALAGEM}
              alt="Três sacolas brancas do atelier alinhadas, cada uma com o monograma Simone Sá impresso e um laço de fita preta amarrado nas alças."
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>

          <div>
            <SecaoTitulo eyebrow="A entrega" titulo="Como a peça chega até você" />

            <div className="mt-8 space-y-5 text-preto/75">
              <p>
                A peça sai do atelier passada, protegida em papel de seda e embalada
                na sacola da casa, fechada com laço de fita preta. Junto vai a
                instrução de conservação do tecido, escrita para aquela peça.
              </p>
              <p>
                Não é enfeite: o vestido costuma ficar guardado semanas até o dia do
                evento, e sair daqui já embalado do jeito certo é o que garante que
                ele chegue ao evento como saiu da última prova.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-preto text-branco">
        <div className="container-luxo secao flex flex-col items-center text-center">
          <span className="font-display text-h6 uppercase tracking-luxo text-branco/70">
            Vamos começar
          </span>

          <h2 className="mt-4 uppercase tracking-luxo text-branco">
            Conte o que você imagina
          </h2>
          <span className="filete-claro mt-6" />

          <p className="mt-6 max-w-md text-branco/70">
            Mande uma mensagem com a ocasião e a data. Respondemos com os próximos
            passos e a disponibilidade da agenda.
          </p>

          <BotaoWhatsapp
            variante="claro"
            className="mt-10"
            mensagem={`Olá! Vim pelo site do Atelier ${brand.nome} e gostaria de agendar um atendimento.`}
          >
            Agendar atendimento
          </BotaoWhatsapp>
        </div>
      </section>
    </>
  )
}
