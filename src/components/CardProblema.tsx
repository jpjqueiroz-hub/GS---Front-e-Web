type CardProblemaProps = {
    titulo: string
    descricao: string
  }
  
  function CardProblema({ titulo, descricao }: CardProblemaProps) {
    return (
      <div className="rounded-2xl border border-light/10 bg-card p-7">
        <h3 className="mb-4 font-atkinson text-2xl text-light">
          {titulo}
        </h3>
  
        <p className="text-lg text-light/80">
          {descricao}
        </p>
      </div>
    )
  }
  
  export default CardProblema