import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Campeonato from './assets/Componentes/Campeonato'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Campeonato />
  </StrictMode>,
)
