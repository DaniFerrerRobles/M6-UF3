import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Panell from './vistas/Panell'
import Menu from './componentes/Menu'
import BarraNavegacio from './componentes/Capcelera'
import GestioUsuaris from './componentes/GestioUsuaris'

function App() {
  return (
    <>
    <header><BarraNavegacio /></header>
    <Menu />
    </>
  )
}

export default App
