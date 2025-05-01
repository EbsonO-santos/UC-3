import './App.css'
import Header from './assets/Componentes/Header'
import Conteudo from './assets/Componentes/Conteudo'
import Promocao from './assets/Componentes/Promocao'
import Loja from './assets/Componentes/Loja'

function App() {

  return (
    <main className={'fundo'}>
      <Header />
      <Conteudo />
      <Promocao />
      <Loja />
    </main>
  )
}

export default App
