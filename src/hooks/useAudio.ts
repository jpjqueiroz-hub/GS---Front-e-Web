import { useEffect, useRef, useState } from 'react'

function useAudio() {
  const [reproduzindo, setReproduzindo] = useState(false)
  const [erro, setErro] = useState('')
  const mensagemAtual = useRef<SpeechSynthesisUtterance | null>(null)

  const disponivel = typeof window !== 'undefined' && 'speechSynthesis' in window

  useEffect(() => {
    return () => {
      mensagemAtual.current = null

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  function parar() {
    mensagemAtual.current = null

    if (disponivel) {
      window.speechSynthesis.cancel()
    }

    setReproduzindo(false)
  }

  function falar(texto: string) {
    if (!disponivel) {
      setErro('A leitura por voz não está disponível neste navegador.')
      return
    }

    parar()
    setErro('')

    const mensagem = new SpeechSynthesisUtterance(texto)
    mensagem.lang = 'pt-BR'
    mensagemAtual.current = mensagem

    mensagem.onend = () => {
      if (mensagemAtual.current === mensagem) {
        mensagemAtual.current = null
        setReproduzindo(false)
      }
    }

    mensagem.onerror = () => {
      if (mensagemAtual.current === mensagem) {
        mensagemAtual.current = null
        setReproduzindo(false)
        setErro('Não foi possível reproduzir o áudio. Tente novamente.')
      }
    }

    setReproduzindo(true)
    window.speechSynthesis.speak(mensagem)
  }

  return { falar, parar, reproduzindo, disponivel, erro }
}

export default useAudio