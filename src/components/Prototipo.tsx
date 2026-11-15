function Prototipo() {
  return (
    <section id="prototipo" aria-labelledby="titulo-prototipo" className="flex min-h-screen items-center bg-background py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 font-atkinson text-sm tracking-widest text-yellow">
            EXPERIMENTE O MEUPONTO
          </p>

          <h2 id="titulo-prototipo" className="font-atkinson text-3xl text-light md:text-4xl">
            Conheça a experiência na prática.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-light/80">
            Experimente a consulta por voz das informações do ponto, sem precisar selecionar uma linha.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-3xl border border-light/15 bg-card p-7 md:p-9">
          <p className="mb-4 font-atkinson text-sm tracking-widest text-yellow">
            PROTÓTIPO DIGITAL
          </p>

          <h3 className="font-atkinson text-3xl text-light">
            As informações do ponto, em um toque.
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-light/80">
            Aperte o play para ouvir as linhas cadastradas, seus destinos e as previsões disponíveis.
          </p>

          <ul className="my-8 list-disc space-y-4 pl-5 text-lg text-light">
            <li>Consulta de todas as linhas cadastradas no ponto.</li>
            <li>Informações disponíveis em texto e voz.</li>
            <li>Controles para repetir e parar o áudio.</li>
          </ul>

          <a href="/prototipo-web" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-yellow px-6 py-3 font-atkinson text-lg text-background hover:bg-yellow/90">
            Explorar protótipo digital
          </a>

        </div>
      </div>
    </section>
  )
}

export default Prototipo