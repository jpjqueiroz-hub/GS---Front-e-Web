import Header from './components/Header'
import Hero from './components/Hero'
import Problema from './components/Problema'
import Solucao from './components/Solucao'
import ComoFunciona from './components/ComoFunciona'
import Prototipo from './components/Prototipo'
import PrototipoWeb from './pages/PrototipoWeb'
import Administracao from './pages/Administracao'

function App() {
  if (window.location.pathname === '/prototipo-web') {
    return <PrototipoWeb />
  }
  if (window.location.pathname === '/administracao') {
    return <Administracao />
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