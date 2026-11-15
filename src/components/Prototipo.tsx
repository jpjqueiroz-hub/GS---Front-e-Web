function Prototipo() {
    return (
      <section id="prototipo" aria-labelledby="titulo-prototipo" className="flex min-h-screen items-center bg-background py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-atkinson text-sm tracking-widest text-yellow">
              EXPERIMENTE O MEUPONTO
            </p>
  
            <h2 id="titulo-prototipo" className="font-atkinson text-3xl text-light md:text-4xl">
              Duas formas de conhecer a experiência.
            </h2>
  
            <p className="mt-5 text-lg leading-relaxed text-light/80">
              Explore a consulta pela web ou conheça a interação com o terminal físico em uma demonstração 3D.
            </p>
          </div>
  
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-3xl border border-light/15 bg-card p-7 md:p-9">
              <p className="mb-4 font-atkinson text-sm tracking-widest text-yellow">
                VERSÃO DIGITAL
              </p>
  
              <h3 className="font-atkinson text-3xl text-light">
                O ponto na sua mão.
              </h3>
  
              <p className="mt-4 text-lg leading-relaxed text-light/80">
                Conheça uma interface simples para ouvir as informações do ponto, sem precisar selecionar uma linha.
              </p>
  
              <ul className="my-8 space-y-4 text-lg text-light">
                <li>Consulta de todas as linhas do ponto</li>
                <li>Informações em texto e voz</li>
                <li>Controles para repetir e parar o áudio</li>
              </ul>
  
              <a href="/prototipo-web" className="mt-auto inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-yellow px-6 py-3 font-atkinson text-lg text-background hover:bg-yellow/90">
                Explorar versão digital
              </a>
            </div>
  
            <div className="flex flex-col rounded-3xl border border-light/15 bg-card p-7 md:p-9">
              <p className="mb-4 font-atkinson text-sm tracking-widest text-yellow">
                TERMINAL INTERATIVO
              </p>
  
              <h3 className="font-atkinson text-3xl text-light">
                Conheça o totem.
              </h3>
  
              <p className="mt-4 text-lg leading-relaxed text-light/80">
                Explore uma representação 3D do dispositivo e descubra como será a interação pelos botões físicos.
              </p>
  
              <ul className="my-8 space-y-4 text-lg text-light">
                <li>Visualização do dispositivo em 3D</li>
                <li>Botões interativos de consulta por voz</li>
                <li>Simulação do sinal sonoro de localização</li>
              </ul>
  
              <a href="/prototipo-totem" className="mt-auto inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-yellow px-6 py-3 font-atkinson text-lg text-background hover:bg-yellow/90">
                Explorar totem 3D
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Prototipo