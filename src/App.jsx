import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Panell from './vistas/Panell'
import Menu from './componentes/Menu'
import Comentarios from './vistas/comentaris'
import BarraNavegacio from './componentes/Capcelera'
function App() {
  return (
    <>
    <header><BarraNavegacio /></header>
    <Menu />
    <Comentarios />
    </>
  )
}

export default App
