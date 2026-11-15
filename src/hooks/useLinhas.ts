import { useEffect, useState } from 'react'
import { buscarLinhas } from '../services/linhasService'
import type { Linha } from '../services/linhasService'

function useLinhas() {
  const [linhas, setLinhas] = useState<Linha[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    const controlador = new AbortController()

    async function carregarLinhas() {
      try {
        const dados = await buscarLinhas(controlador.signal)

        if (!controlador.signal.aborted) {
          setLinhas(dados)
        }
      } catch {
        if (!controlador.signal.aborted) {
          setErro('Não foi possível carregar as linhas. Tente recarregar a página.')
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

  return { linhas, carregando, erro }
}

export default useLinhas