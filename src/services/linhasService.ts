export type Linha = {
  id: string
  codigo: string
  origem: string
  destino: string
  minutos: number
  previsaoDisponivel: boolean
  aproximando: boolean
  noturna: boolean
}

export type DadosLinha = Omit<Linha, 'id'>

const enderecoAPI = 'https://6af9dd086d8b86fb22d74e65.mockapi.io/linhas'

export async function buscarLinhas(signal?: AbortSignal): Promise<Linha[]> {
  const resposta = await fetch(enderecoAPI, { signal })

  if (!resposta.ok) {
    throw new Error('Não foi possível consultar as linhas.')
  }

  const dados = await resposta.json()

  if (!Array.isArray(dados)) {
    throw new Error('A API retornou um formato inesperado.')
  }

  return dados
}

export async function cadastrarLinha(dados: DadosLinha): Promise<Linha> {
  const resposta = await fetch(enderecoAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  })

  if (!resposta.ok) {
    throw new Error('Não foi possível cadastrar a linha.')
  }

  return resposta.json()
}

export async function atualizarLinha(id: string, dados: DadosLinha): Promise<Linha> {
  const resposta = await fetch(`${enderecoAPI}/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  })

  if (!resposta.ok) {
    throw new Error('Não foi possível atualizar a linha.')
  }

  return resposta.json()
}

export async function excluirLinha(id: string): Promise<void> {
  if (id === undefined || id === null || String(id).trim() === '') {
    throw new Error('Esta linha está sem ID. Confira o registro no MockAPI.')
  }

  const resposta = await fetch(`${enderecoAPI}/${encodeURIComponent(String(id))}`, {
    method: 'DELETE',
  })

  if (!resposta.ok) {
    throw new Error(`Não foi possível excluir a linha de ID ${id}. Código HTTP: ${resposta.status}.`)
  }
}