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