import { useEffect, useState } from 'react'
import { atualizarLinha, buscarLinhas, cadastrarLinha, excluirLinha } from '../services/linhasService'
import type { DadosLinha, Linha } from '../services/linhasService'

function useLinhas() {
  const [linhas, setLinhas] = useState<Linha[]>([])
  const [carregando, setCarregando] = useState(true)
  const [salvando, setSalvando] = useState(false)
  const [erro, setErro] = useState('')
  const [erroOperacao, setErroOperacao] = useState('')
  const [sucesso, setSucesso] = useState('')

  useEffect(() => {
    const controlador = new AbortController()

    async function carregarLinhas() {
      try {
        const dados = await buscarLinhas(controlador.signal)

        if (!controlador.signal.aborted) {
          setLinhas(dados)
        }
      } catch (falha) {
        if (!controlador.signal.aborted) {
          setErro(falha instanceof Error ? falha.message : 'Não foi possível carregar as linhas.')
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCarregando(false)
        }
      }
    }

    carregarLinhas()

    return () => controlador.abort()
  }, [])

  function iniciarOperacao() {
    setSalvando(true)
    setErroOperacao('')
    setSucesso('')
  }

  async function adicionarLinha(dados: DadosLinha): Promise<boolean> {
    iniciarOperacao()

    try {
      const novaLinha = await cadastrarLinha(dados)

      setLinhas((linhasAtuais) => [...linhasAtuais, novaLinha])
      setSucesso('Linha cadastrada com sucesso.')

      return true
    } catch (falha) {
      setErroOperacao(falha instanceof Error ? falha.message : 'Não foi possível cadastrar a linha.')

      return false
    } finally {
      setSalvando(false)
    }
  }

  async function editarLinha(id: string, dados: DadosLinha): Promise<boolean> {
    iniciarOperacao()

    try {
      const linhaAtualizada = await atualizarLinha(id, dados)

      setLinhas((linhasAtuais) => linhasAtuais.map((linha) => (
        linha.id === id ? linhaAtualizada : linha
      )))

      setSucesso('Linha atualizada com sucesso.')

      return true
    } catch (falha) {
      setErroOperacao(falha instanceof Error ? falha.message : 'Não foi possível atualizar a linha.')

      return false
    } finally {
      setSalvando(false)
    }
  }

  async function removerLinha(id: string): Promise<boolean> {
    iniciarOperacao()

    try {
      await excluirLinha(id)

      setLinhas((linhasAtuais) => linhasAtuais.filter((linha) => linha.id !== id))
      setSucesso('Linha excluída com sucesso.')

      return true
    } catch (falha) {
      setErroOperacao(falha instanceof Error ? falha.message : 'Não foi possível excluir a linha.')

      return false
    } finally {
      setSalvando(false)
    }
  }

  return {
    linhas,
    carregando,
    salvando,
    erro,
    erroOperacao,
    sucesso,
    adicionarLinha,
    editarLinha,
    removerLinha,
  }
}

export default useLinhas