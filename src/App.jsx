import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Formulario from '../src/pages/Formulario/Formulario'
import Clientes from './pages/Clientes/Clientes'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/cadastrar' element={<Formulario />} />
    <Route path='/clientes' element={<Clientes />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
