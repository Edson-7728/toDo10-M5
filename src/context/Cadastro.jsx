import React from 'react'
import { createContext, useState } from 'react'
export const CadastroContext = createContext()

const CadastroProvider = ({children}) => {
    const [campo, setCampo]= useState([])
    const [dados, setDados] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        cep: '',
        endereco1: '',
        endereco2: '',
        dataNascimento: '',
        cpf: '',
        rendaMensal: ''
    })
  
    const handleChange =(e, chave) => {
      setDados({...dados, [chave]: e.target.value})
    }
    const handleClick = ()=>{
      setCampo([...campo, dados])
      setDados(
        {
          nome: "",
          sobrenome: "",
          email: "",
          telefone: "",
          cep: "",
          endereco1: "",
          endereco2: "",
          dataNascimento: "",
          cpf: "",
          rendaMensal: ""
      }
      )
    }
    const contexto = {
        dados: dados,
        handleChange: handleChange,
        handleClick: handleClick,
    }
  return (
    <CadastroContext.Provider value={contexto}>{children}</CadastroContext.Provider>

  )
}

export default CadastroProvider