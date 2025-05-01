import './App.css'
import Header from './assets/Componentes/Header'
import Conteudo from './assets/Componentes/Conteudo'
import Promocao from './assets/Componentes/Promocao'

function App() {

  return (
    <main className={'fundo'}>
      <Header />
      <Conteudo />
      <Promocao />
    </main>
  )
}

export default App
