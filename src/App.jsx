import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Cadastrar from './components/Itens/Cadastrar'
import Clientes from './components/Itens/Clientes'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/cadastrar' element={<Cadastrar />} />
    <Route path='/clientes' element={<Clientes />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
