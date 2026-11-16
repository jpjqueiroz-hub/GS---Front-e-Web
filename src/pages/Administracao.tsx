import { useState } from 'react'
import FormularioLinha from '../components/Formulario'
import Login from '../components/Login'
import useLinhas from '../hooks/useLinhas'
import type { DadosLinha, Linha } from '../services/linhasService'

function PainelLinhas() {
  const { linhas, carregando, salvando, erro, erroOperacao, sucesso, adicionarLinha, editarLinha, removerLinha } = useLinhas()
  const [linhaEmEdicao, setLinhaEmEdicao] = useState<Linha | undefined>(undefined)

  async function salvarLinha(dados: DadosLinha): Promise<boolean> {
    if (linhaEmEdicao) {
      const atualizado = await editarLinha(linhaEmEdicao.id, dados)

      if (atualizado) {
        setLinhaEmEdicao(undefined)
      }

      return atualizado
    }

    return adicionarLinha(dados)
  }

  async function apagarLinha(linha: Linha) {
    if (salvando) {
      return
    }
  
    const excluido = await removerLinha(linha.id)
  
    if (excluido && linhaEmEdicao?.id === linha.id) {
      setLinhaEmEdicao(undefined)
    }
  }

  return (
    <>
      <div role="status" className="mb-6 text-lg text-light">
        {carregando && <p>Carregando linhas...</p>}
        {sucesso && <p>{sucesso}</p>}
      </div>

      {(erro || erroOperacao) && (
        <p role="alert" className="mb-6 text-lg text-yellow">
          {erro || erroOperacao}
        </p>
      )}

      {!carregando && !erro && (
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <FormularioLinha
            key={linhaEmEdicao?.id ?? 'nova'}
            linha={linhaEmEdicao}
            salvando={salvando}
            aoSalvar={salvarLinha}
            aoCancelar={() => setLinhaEmEdicao(undefined)}
          />

          <section aria-labelledby="titulo-lista" className="rounded-2xl border border-light/15 bg-card p-6 md:p-8">
            <h2 id="titulo-lista" className="mb-6 font-atkinson text-2xl text-light">
              Linhas cadastradas ({linhas.length})
            </h2>

            {linhas.length === 0 ? (
              <p className="text-lg text-light/80">
                Nenhuma linha cadastrada. Use o formulário para adicionar a primeira.
              </p>
            ) : (
              <ul className="space-y-5">
                {linhas.map((linha) => (
                  <li key={linha.id} className="rounded-2xl bg-background p-5">
                    <h3 className="font-atkinson text-xl text-light">
                      {linha.codigo}
                    </h3>

                    <p className="mt-2 text-lg text-light/80">
                      {linha.origem} → {linha.destino}
                    </p>

                    <p className="mt-3 text-base text-light/80">
                      {linha.previsaoDisponivel ? `Espera simulada: ${linha.minutos} minutos` : 'Previsão indisponível'}
                    </p>

                    {linha.aproximando && (
                      <p className="mt-2 text-base text-yellow">
                        Aproximação simulada
                      </p>
                    )}

                    {linha.noturna && (
                      <p className="mt-2 text-base text-light-blue">
                        Linha noturna
                      </p>
                    )}

                    <div className="mt-5 flex flex-wrap gap-3">
                        <button type="button" onClick={() => setLinhaEmEdicao(linha)} disabled={salvando} aria-label={`Editar linha ${linha.codigo}`} className="min-h-12 rounded-xl bg-yellow px-5 py-3 font-atkinson text-lg text-background hover:bg-yellow/90 disabled:cursor-not-allowed disabled:opacity-50">
                            Editar
                        </button>

                        <button type="button" onClick={() => apagarLinha(linha)} disabled={salvando} aria-label={`Excluir linha ${linha.codigo}`} className="min-h-12 rounded-xl border border-light/30 bg-button px-5 py-3 font-atkinson text-lg text-light hover:bg-card disabled:cursor-not-allowed disabled:opacity-50">
                            Excluir
                        </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      )}
    </>
  )
}

function Administracao() {
  const [autenticado, setAutenticado] = useState(() => sessionStorage.getItem('meuponto-admin') === 'true')

  function entrar() {
    sessionStorage.setItem('meuponto-admin', 'true')
    setAutenticado(true)
  }

  function sair() {
    sessionStorage.removeItem('meuponto-admin')
    setAutenticado(false)
  }

  return (
    <main className="flex min-h-screen flex-col bg-background px-6 py-10 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <a href="/" className="inline-flex min-h-12 items-center gap-3 font-atkinson text-lg text-light-blue hover:text-yellow">
          <span aria-hidden="true">←</span>
          Voltar ao site
        </a>
      </div>

      {autenticado ? (
        <div className="mx-auto mt-10 w-full max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-3 font-atkinson text-sm tracking-widest text-yellow">
                PAINEL ADMINISTRATIVO
              </p>
              <h1 className="font-atkinson text-3xl text-light">
                Gerenciar linhas
              </h1>
            </div>
            <button type="button" onClick={sair} className="min-h-12 rounded-xl border border-light/30 bg-button px-6 py-3 font-atkinson text-lg text-light hover:bg-card">
              Sair
            </button>
          </div>

          <PainelLinhas />
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center py-10">
          <Login aoEntrar={entrar} />
        </div>
      )}
    </main>
  )
}

export default Administracao