import { useState } from 'react'
import type { FormEvent } from 'react'

type LoginProps = {
  aoEntrar: () => void
}

function Login({ aoEntrar }: LoginProps) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  function entrar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    if (usuario.trim() !== 'admMeuPonto' || senha !== 'MeuPonto123') {
      setErro('Usuário ou senha incorretos.')
      return
    }

    setErro('')
    aoEntrar()
  }

  return (
    <section aria-labelledby="titulo-login" className="mx-auto max-w-md rounded-3xl border border-light/15 bg-card p-7 md:p-9">
      <p className="mb-3 font-atkinson text-sm tracking-widest text-yellow">
        ACESSO DO ADMINISTRADOR
      </p>

      <h1 id="titulo-login" className="font-atkinson text-3xl text-light">
        Painel Administrativo
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-light/80">
        Entre para gerenciar as linhas da demonstração.
      </p>

      <form onSubmit={entrar} className="mt-8 space-y-6">
        <div>
          <label htmlFor="usuario" className="mb-2 block font-atkinson text-lg text-light">
            Usuário
          </label>

          <input id="usuario" name="usuario" type="text" autoComplete="username" required value={usuario} onChange={(evento) => { setUsuario(evento.target.value); setErro('') }} className="min-h-12 w-full rounded-xl border border-light/30 bg-background px-4 py-3 text-lg text-light" />
        </div>

        <div>
          <label htmlFor="senha" className="mb-2 block font-atkinson text-lg text-light">
            Senha
          </label>

          <input id="senha" name="senha" type="password" autoComplete="current-password" required value={senha} onChange={(evento) => { setSenha(evento.target.value); setErro('') }} className="min-h-12 w-full rounded-xl border border-light/30 bg-background px-4 py-3 text-lg text-light" />
        </div>

        {erro && (
          <p role="alert" className="text-base text-yellow">
            {erro}
          </p>
        )}

        <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-yellow px-6 py-3 font-atkinson text-lg text-background hover:bg-yellow/90">
          Entrar
        </button>
      </form>
    </section>
  )
}

export default Login