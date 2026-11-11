import Header from './components/Header'
import Hero from './components/Hero'
import Problema from './components/Problema'
import Solucao from './components/Solucao'
import ComoFunciona from './components/ComoFunciona'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Problema />
        <Solucao />
        <ComoFunciona />
      </main>
    </>
  )
}

export default App