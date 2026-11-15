function Prototipo() {
  return (
    <section id="prototipo" aria-labelledby="titulo-prototipo" className="flex min-h-screen items-center bg-background py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-atkinson text-sm tracking-widest text-yellow">
            EXPERIMENTE O MEUPONTO
          </p>

          <h2 id="titulo-prototipo" className="font-atkinson text-3xl text-light md:text-4xl">
            Do ponto de ônibus à experiência digital.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-light/80">
            Conheça a proposta do terminal e experimente a consulta das informações por voz.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <figure className="min-w-0">
            <div className="overflow-hidden rounded-3xl border border-light/15 bg-card">
              <img src="/images/totem.png" alt="Representação do terminal MeuPonto instalado em um ponto de ônibus, com botões amarelos e identificação de alto contraste." loading="lazy" className="h-auto w-full" />
            </div>
          </figure>

          <div className="rounded-3xl border border-light/15 bg-card p-7 md:p-9">
            <p className="mb-4 font-atkinson text-sm tracking-widest text-yellow">
              PROTÓTIPO DIGITAL
            </p>

            <h3 className="font-atkinson text-3xl text-light">
              As informações do ponto, em um toque.
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-light/80">
              Aperte o play para ouvir as linhas cadastradas, seus destinos e as previsões disponíveis.
            </p>

            <ul className="my-8 space-y-4 text-lg text-light">
              <li className="flex items-start gap-3">
                <span>- Consulta de todas as linhas cadastradas no ponto.</span>
              </li>

              <li className="flex items-start gap-3">
                <span>- Informações disponíveis em texto e voz.</span>
              </li>

              <li className="flex items-start gap-3">
                <span>- Controles para repetir e parar o áudio.</span>
              </li>
            </ul>

            <a href="/prototipo-web" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-yellow px-6 py-3 font-atkinson text-lg text-background hover:bg-yellow/90">
              Explorar protótipo digital
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prototipo