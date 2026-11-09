import CardSolucao from './CardSolucao'

function Solucao() {
  return (
    <section id="solucao" aria-labelledby="titulo-solucao" className=" flex min-h-screen items-center bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-atkinson text-sm tracking-widest text-yellow">
            A SOLUÇÃO
          </p>

          <h2 id="titulo-solucao" className="font-atkinson text-3xl text-light md:text-4xl">
            Informação acessível, do digital ao ponto.
          </h2>

          <p className="mt-5 text-lg  text-light/80">
            O MeuPonto propõe unir uma plataforma web e um terminal físico para facilitar a consulta de informações durante a espera pelo ônibus.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <CardSolucao numero="01" titulo="Plataforma web acessível" descricao="Consulte a linha, o destino e a previsão disponível em texto ou voz, com controles para repetir ou interromper a leitura." />

          <CardSolucao numero="02" titulo="Terminal no ponto" descricao="Um protótipo com ESP32, botões físicos e sinalizações para demonstrar a interação no ponto. A leitura por voz será demonstrada na plataforma web." />
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-light/15 p-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h3 className="font-atkinson text-xl text-light">
              Uma proposta que começa pequena.
            </h3>

            <p className="mt-3 text-lg  text-light/80">
              O protótipo inicial terá um ponto demonstrativo e três linhas, com dados simulados identificados.
            </p>
          </div>

          <a href="#prototipo" className= "flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-yellow px-6 py-3 font-atkinson text-lg text-background hover:bg-yellow/90">
            Conhecer o protótipo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Solucao