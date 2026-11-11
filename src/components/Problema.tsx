import CardProblema from './CardProblema'

function Problema() {
  return (
    <section id="problema" aria-labelledby="titulo-problema" className="min-h-screen border-y border-light/10 bg-card/90 py-16 md:py-20">
      <div className="mx-auto grid w-full items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-atkinson text-sm tracking-widest text-yellow">
              O PROBLEMA
            </p>

            <h2 id="titulo-problema" className="font-atkinson text-3xl text-light md:text-4xl">
              Qual ônibus está chegando?
            </h2>

            <p className="mt-5 text-lg text-light/80">
              Para pessoas cegas ou com baixa visão, identificar a linha e consultar informações no ponto pode ser uma barreira para viajar com autonomia.
            </p>
          </div>

          <div className="grid gap-6">
            <CardProblema titulo="Identificar a linha" descricao="Quando a identificação depende da leitura do letreiro, reconhecer o ônibus desejado pode ser difícil para quem não consegue acessar essa informação visual."/>

            <CardProblema titulo="Consultar a chegada" descricao="Sem informações acessíveis sobre destino e previsão, acompanhar a espera e decidir como seguir a viagem pode se tornar mais difícil." />

            <CardProblema titulo="Depender de ajuda" descricao="Pedir a outra pessoa que confirme a linha pode ser uma alternativa, mas depende de alguém estar disponível naquele momento."/>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src="/images/imagem1.png" alt="Pessoa com deficiência visual aguardando em um ponto, com um ônibus ao fundo." loading="lazy" className="h-80 w-full rounded-2xl object-cover md:h-112 lg:h-150" />
        </div>
      </div>
    </section>
  )
}

export default Problema