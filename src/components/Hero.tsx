function Hero() {
    return (
      <section id="inicio" aria-labelledby="titulo-hero" className="hero-banner relative isolate flex min-h-screen items-center overflow-hidden bg-background bg-cover bg-center bg-no-repeat">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/40"></div>
  
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <h1 id="titulo-hero" className="font-atkinson text-4xl leading-tight text-light sm:text-5xl lg:text-6xl">
              Mais autonomia em cada
              <span className="text-yellow"> parada.</span>
            </h1>
  
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-light md:text-xl">
              Informações sobre seu ônibus, em texto e voz.
            </p>
  
            <a href="#prototipo" className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-yellow px-6 py-3 font-atkinson text-lg text-background hover:bg-yellow/90">
              Experimentar o protótipo
            </a>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero