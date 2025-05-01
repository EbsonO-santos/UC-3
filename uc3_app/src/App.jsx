import './App.css'
import Header from './assets/Componentes/Header'
import Conteudo from './assets/Componentes/Conteudo'
import Campeonato from './assets/Componentes/Campeonato'
import Oficina from './assets/Componentes/Oficina'

function App() {

  return (
    <main className={'fundo'}>
      <Header />
      <Conteudo />
      <Campeonato />
      <Oficina />
    </main>
  )
}

export default App
