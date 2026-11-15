import Header from './components/Header'
import Hero from './components/Hero'
import Problema from './components/Problema'
import Solucao from './components/Solucao'
import ComoFunciona from './components/ComoFunciona'
import Prototipo from './components/Prototipo'
import PrototipoWeb from './pages/PrototipoWeb'

function App() {
  if (window.location.pathname === '/prototipo-web') {
    return <PrototipoWeb />
  }
  return (
    <>
        <Header />
        <Hero />
        <Problema />
        <Solucao />
        <ComoFunciona />
        <Prototipo />
    </>
  )
}

export default App