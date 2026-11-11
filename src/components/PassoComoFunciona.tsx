type PassoComoFuncionaProps = {
    numero: string
    titulo: string
    descricao: string
  }
  
  function PassoComoFunciona({ numero, titulo, descricao }: PassoComoFuncionaProps) {
    return (
      <li className="rounded-2xl border border-light/10 bg-card p-7">
        <span aria-hidden="true" className="mb-6 inline-flex size-14 items-center justify-center rounded-full bg-button font-atkinson text-2xl text-yellow">
          {numero}
        </span>
  
        <h3 className="mb-4 font-atkinson text-2xl text-light">
          {titulo}
        </h3>
  
        <p className="text-lg leading-relaxed text-light/80">
          {descricao}
        </p>
      </li>
    )
  }
  
  export default PassoComoFunciona