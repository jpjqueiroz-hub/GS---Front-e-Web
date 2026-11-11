type CardSolucaoProps = {
    numero: string
    titulo: string
    descricao: string
  }
  
  function CardSolucao({ numero, titulo, descricao }: CardSolucaoProps) {
    return (
      <div className="rounded-2xl border border-light/10 bg-card p-7">
        <div className="mb-4 flex items-center gap-4">
          <span aria-hidden="true" className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-button font-atkinson text-xl text-yellow">
            {numero}
          </span>
          <h3 className="font-atkinson text-2xl text-light">
            {titulo}
          </h3>
        </div>
  
        <p className="text-lg leading-relaxed text-light/80">
          {descricao}
        </p>
      </div>
    )
  }
  
  export default CardSolucao