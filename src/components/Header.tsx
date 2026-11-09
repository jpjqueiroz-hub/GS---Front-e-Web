import { useState } from 'react'

function Header() {
  const [menuAberto, setMenuAberto] = useState<boolean>(false)

  function alternarMenu() {
    setMenuAberto(!menuAberto)
  }

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="border-b border-light/10 bg-background">
      <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-5 px-6 py-5 lg:px-10">
        <a href="#inicio" onClick={fecharMenu} aria-label="MeuPonto, início" className="inline-flex items-center gap-3 font-atkinson text-2xl">
            <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-xl bg-yellow text-background">
                m•
            </span>
          
            <span className="text-light">
                MeuPonto
                <span className="text-yellow">.</span>
            </span>
        </a>

        <button type="button" onClick={alternarMenu} aria-expanded={menuAberto} aria-controls="menu-principal" className="min-h-12 rounded-xl border border-light/30 px-4 py-3 font-atkinson text-lg text-light hover:bg-button lg:hidden">{menuAberto ? 'Fechar menu' : 'Abrir menu'}
        </button>

        <nav id="menu-principal" aria-label="Navegação principal" className={`${menuAberto ? 'flex' : 'hidden'} w-full flex-col gap-3 text-lg lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-8`}>
            
            <a href="#problema" onClick={fecharMenu} className="rounded-lg py-3 text-light hover:text-yellow">
                Problema
            </a>
            <a href="#solucao" onClick={fecharMenu} className="rounded-lg py-3 text-light hover:text-yellow">
                Solução
            </a>
            <a href="#como-funciona" onClick={fecharMenu} className="rounded-lg py-3 text-light hover:text-yellow">
                Como funciona
            </a>
            <a href="#prototipo" onClick={fecharMenu} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-yellow px-6 py-3 font-atkinson text-background hover:bg-yellow/90">
                Experimentar
            </a>
        </nav>
      </div>
    </header>
  )
}

export default Header