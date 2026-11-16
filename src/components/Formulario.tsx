import { useState } from 'react'
import type { FormEvent } from 'react'
import type { DadosLinha, Linha } from '../services/linhasService'

type FormularioLinhaProps = {
  linha?: Linha
  salvando: boolean
  aoSalvar: (dados: DadosLinha) => Promise<boolean>
  aoCancelar: () => void
}

function FormularioLinha({ linha, salvando, aoSalvar, aoCancelar }: FormularioLinhaProps) {
  const [codigo, setCodigo] = useState(linha?.codigo ?? '')
  const [origem, setOrigem] = useState(linha?.origem ?? '')
  const [destino, setDestino] = useState(linha?.destino ?? '')
  const [minutos, setMinutos] = useState(linha?.minutos ?? 0)
  const [previsaoDisponivel, setPrevisaoDisponivel] = useState(linha?.previsaoDisponivel ?? true)
  const [aproximando, setAproximando] = useState(linha?.aproximando ?? false)
  const [noturna, setNoturna] = useState(linha?.noturna ?? false)
  const [erro, setErro] = useState('')

  async function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    setErro('')

    if (!codigo.trim() || !origem.trim() || !destino.trim()) {
      setErro('Preencha o código, a origem e o destino.')
      return
    }

    const dados: DadosLinha = {
      codigo: codigo.trim(),
      origem: origem.trim(),
      destino: destino.trim(),
      minutos,
      previsaoDisponivel,
      aproximando,
      noturna,
    }

    const sucesso = await aoSalvar(dados)

    if (sucesso && !linha) {
      setCodigo('')
      setOrigem('')
      setDestino('')
      setMinutos(0)
      setPrevisaoDisponivel(true)
      setAproximando(false)
      setNoturna(false)
    }
  }

  return (
    <section aria-labelledby="titulo-formulario" className="rounded-2xl border border-light/15 bg-card p-6 md:p-8">
      <h2 id="titulo-formulario" className="mb-6 font-atkinson text-2xl text-light">
        {linha ? 'Editar linha' : 'Cadastrar linha'}
      </h2>

      <form onSubmit={enviarFormulario}>
        <fieldset disabled={salvando} className="space-y-5 disabled:opacity-60">
          <legend className="sr-only">Dados da linha</legend>

          <div>
            <label htmlFor="codigo" className="mb-2 block font-atkinson text-lg text-light">
              Código da linha
            </label>

            <input id="codigo" type="text" required placeholder="Ex.: 274P-10" value={codigo} onChange={(evento) => setCodigo(evento.target.value)} className="min-h-12 w-full rounded-xl border border-light/30 bg-background px-4 py-3 text-lg text-light" />
          </div>

          <div>
            <label htmlFor="origem" className="mb-2 block font-atkinson text-lg text-light">
              Origem
            </label>

            <input id="origem" type="text" required value={origem} onChange={(evento) => setOrigem(evento.target.value)} className="min-h-12 w-full rounded-xl border border-light/30 bg-background px-4 py-3 text-lg text-light" />
          </div>

          <div>
            <label htmlFor="destino" className="mb-2 block font-atkinson text-lg text-light">
              Destino
            </label>

            <input id="destino" type="text" required value={destino} onChange={(evento) => setDestino(evento.target.value)} className="min-h-12 w-full rounded-xl border border-light/30 bg-background px-4 py-3 text-lg text-light" />
          </div>

          <div>
            <label htmlFor="minutos" className="mb-2 block font-atkinson text-lg text-light">
              Espera simulada em minutos
            </label>

            <input id="minutos" type="number" required min="0" step="1" value={minutos} onChange={(evento) => setMinutos(Number(evento.target.value))} className="min-h-12 w-full rounded-xl border border-light/30 bg-background px-4 py-3 text-lg text-light" />
          </div>

          <label className="flex cursor-pointer items-center gap-3 text-lg text-light">
            <input type="checkbox" checked={previsaoDisponivel} onChange={(evento) => setPrevisaoDisponivel(evento.target.checked)} className="size-5 shrink-0 accent-yellow" />
            Previsão disponível
          </label>

          <label className="flex cursor-pointer items-center gap-3 text-lg text-light">
            <input type="checkbox" checked={aproximando} onChange={(evento) => setAproximando(evento.target.checked)} className="size-5 shrink-0 accent-yellow" />
            Simular ônibus em aproximação
          </label>

          <label className="flex cursor-pointer items-center gap-3 text-lg text-light">
            <input type="checkbox" checked={noturna} onChange={(evento) => setNoturna(evento.target.checked)} className="size-5 shrink-0 accent-yellow" />
            Linha noturna
          </label>

          {erro && (
            <p role="alert" className="text-base text-yellow">
              {erro}
            </p>
          )}

          <button type="submit" className="min-h-12 w-full rounded-xl bg-yellow px-6 py-3 font-atkinson text-lg text-background hover:bg-yellow/90">
            {salvando ? 'Salvando...' : linha ? 'Salvar alterações' : 'Cadastrar linha'}
          </button>

          {linha && (
            <button type="button" onClick={aoCancelar} className="min-h-12 w-full rounded-xl border border-light/30 bg-button px-6 py-3 font-atkinson text-lg text-light hover:bg-background">
              Cancelar edição
            </button>
          )}
        </fieldset>
      </form>
    </section>
  )
}

export default FormularioLinha