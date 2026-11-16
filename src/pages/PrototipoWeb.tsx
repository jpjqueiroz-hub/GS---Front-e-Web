import { useState } from 'react'
import useAudio from '../hooks/useAudio'
import useLinhas from '../hooks/useLinhas'

function PrototipoWeb() {
  const { linhas, carregando, erro: erroLinhas } = useLinhas()
  const { falar, parar, reproduzindo, disponivel, erro: erroAudio } = useAudio()
  const [jaReproduziu, setJaReproduziu] = useState(false)

  const consultaDisponivel = !carregando && !erroLinhas && linhas.length > 0

  function ouvirInformacoes() {
    if (!consultaDisponivel) {
      return
    }

    const informacoes = linhas.map((linha) => {
      const codigoFalado = linha.codigo.split('').join(' ')
      const aproximacao = linha.aproximando ? 'Aproximação simulada deste ônibus.' : ''
      const previsao = linha.previsaoDisponivel ? `Previsão simulada de ${linha.minutos} minutos.` : 'Previsão indisponível.'
      const periodo = linha.noturna ? 'Linha noturna.' : ''

      return `Linha ${codigoFalado}, destino ${linha.destino}. ${periodo} ${aproximacao} ${previsao}`
    }).join(' ')

    falar(`Demonstração MeuPonto. Tempos de espera e aproximação simulados. ${informacoes}`)
    setJaReproduziu(true)
  }

  return (
    <main className="min-h-screen bg-background px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <a href="/#prototipo" className="inline-flex min-h-12 items-center gap-3 font-atkinson text-lg text-light-blue hover:text-yellow">
          <span aria-hidden="true">←</span>
          Voltar ao site
        </a>

        <div className="mb-8 mt-8">
          <p className="mb-3 font-atkinson text-sm tracking-widest text-yellow">
            PROTÓTIPO WEB
          </p>

          <h1 className="font-atkinson text-3xl text-light md:text-4xl">
            As informações do ponto, em um toque.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-light/80">
            Aperte o play para ouvir todas as linhas cadastradas e suas previsões de demonstração.
          </p>
        </div>

        <section aria-labelledby="titulo-ponto" className="rounded-3xl border border-light/15 bg-card p-6 md:p-9">
          <span className="inline-flex rounded-full bg-background px-4 py-2 font-atkinson text-sm text-yellow">
            Demonstração com dados simulados
          </span>

          <h2 id="titulo-ponto" className="mt-5 font-atkinson text-2xl text-light">
            Ponto de referência · FIAP
          </h2>

          <p className="mt-2 text-lg text-light/80">
            Av. Lins de Vasconcelos, 1975 · São Paulo
          </p>

          <div role="status" className="my-6 text-lg leading-relaxed text-light">
            {carregando && <p>Carregando informações do ponto...</p>}
            {erroLinhas && <p>{erroLinhas} Recarregue a página para tentar novamente.</p>}
            {!carregando && !erroLinhas && linhas.length === 0 && <p>Nenhuma linha cadastrada para a demonstração.</p>}
            {consultaDisponivel && <p>{linhas.length} linhas disponíveis para ouvir.</p>}
          </div>

          <button type="button" onClick={ouvirInformacoes} disabled={!disponivel || !consultaDisponivel} className="flex min-h-20 w-full items-center justify-center gap-4 rounded-2xl bg-yellow px-6 py-5 font-atkinson text-xl text-background hover:bg-yellow/90 disabled:cursor-not-allowed disabled:opacity-50">
            {jaReproduziu ? 'Repetir informações do ponto' : 'Ouvir informações do ponto'}
          </button>

          <button type="button" onClick={parar} disabled={!reproduzindo} className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-light/30 bg-button px-6 py-3 font-atkinson text-lg text-light hover:bg-background disabled:cursor-not-allowed disabled:opacity-50">
            Parar áudio
          </button>

          <p role="status" className="mt-4 text-base leading-relaxed text-light/80">
            {!disponivel
              ? 'Leitura por voz indisponível neste navegador. Consulte as informações em texto abaixo.'
              : erroAudio || (reproduzindo ? 'Reproduzindo informações.' : 'Áudio parado.')}
          </p>

          {consultaDisponivel && (
            <div className="mt-9 border-t border-light/15 pt-8">
              <h3 className="mb-5 font-atkinson text-xl text-light">
                Informações em texto
              </h3>

              <ul className="space-y-4">
                {linhas.map((linha) => (
                  <li key={linha.id} className="rounded-2xl bg-background p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="font-atkinson text-xl text-light">
                        {linha.codigo} · {linha.destino}
                      </h4>

                      {linha.aproximando && (
                        <span className="rounded-full bg-button px-3 py-1 font-atkinson text-sm text-yellow">
                          Aproximação simulada
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-lg text-light/80">
                      {linha.previsaoDisponivel ? `Previsão simulada: ${linha.minutos} minutos` : 'Previsão indisponível'}
                    </p>

                    {linha.noturna && (
                      <p className="mt-2 text-base text-light-blue">
                        Linha noturna
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default PrototipoWeb