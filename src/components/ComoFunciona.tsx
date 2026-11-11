import PassoComoFunciona from './PassoComoFunciona'

function ComoFunciona() {
  return (
    <section id="como-funciona" aria-labelledby="titulo-como-funciona" className="flex min-h-screen items-center border-y border-light/10 bg-card/90 py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-atkinson text-sm tracking-widest text-yellow">
            COMO FUNCIONA
          </p>

          <h2 id="titulo-como-funciona" className="font-atkinson text-3xl text-light md:text-4xl">
            Um botão. As informações do seu ponto.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-light/80">
            Sem menus ou seleção de linha: a proposta é consultar as informações por voz com uma única ação.
          </p>
        </div>

        <ol className="grid gap-6 lg:grid-cols-3">
          <PassoComoFunciona numero="01" titulo="Chegue ao ponto" descricao="O terminal fica instalado no próprio ponto, com um botão físico de reprodução identificado pelo tato." />

          <PassoComoFunciona numero="02" titulo="Aperte o play" descricao="Pressione o botão para iniciar a mensagem. Não é necessário selecionar uma linha ou navegar por menus."/>

          <PassoComoFunciona numero="03" titulo="Ouça as informações" descricao="A mensagem informa as linhas que passam no ponto, qual ônibus está se aproximando e a previsão de espera."/>
        </ol>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-lg leading-relaxed text-light/80">
            No protótipo web, você poderá experimentar essa mensagem com linhas, aproximação e tempos de espera simulados.
          </p>

          <a href="#prototipo" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-yellow px-6 py-3 font-atkinson text-lg text-background hover:bg-yellow/90">
            Experimentar o protótipo
          </a>
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona