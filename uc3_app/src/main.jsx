import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Promocao from './assets/Componentes/Promocao'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
