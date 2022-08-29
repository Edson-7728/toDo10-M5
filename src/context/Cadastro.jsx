import { createContext, useState } from 'react'
export const CadastroContext = createContext()

const CadastroProvider = ({children}) => {
    const [campo, seCampo]= useState([])
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
  
    const handleChange =(e, chave)=>{
      setDados({...dados, [chave]: e.target.value})
      console.log( campo);
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
        campo: campo,
    }
  return (
    <CadastroContext.Provider value={contexto}>{children}</CadastroContext.Provider>

  )
}

export default CadastroProvider