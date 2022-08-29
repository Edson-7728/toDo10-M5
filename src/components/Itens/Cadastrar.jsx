import S from './Cadastrar.module.css'
import { useState } from 'react'
import Label from '../Label/Label'
import Button from '../Button/Button'
import { useContext } from 'react'
import { CadastroContext } from '../../context/Cadastro'
const Cadastrar = () => {
  const [pg, setPg] = useState(1)
  const {handleChange, handleClick, dados} = useContext(CadastroContext)

  const proximo = (e)=>{
    e.preventDefault()
    setPg(pg + 1)
  }
  const anterior = (e)=>{
    e.preventDefault()
    setPg(pg - 1)
  }
  const salvar = (e)=>{
    e.preventDefault()
    handleClick()
    setPg(1)
  }

  return (
    <div className={S.container}>
        <form className={S.campo}>
          {pg == 1 ? <div className={S.divForm}>
          <Label texto='Nomes'/>
          <input type="text" placeholder='Digite o seu nome' value={dados.nome} onChange={(e)=>{handleChange(e, "nome")}} />
          <Label texto='Sobrenome'/>
          <input type="text" placeholder='Digite o seu sobrenome' value={dados.sobrenome} onChange={(e)=>{handleChange(e, "sobrenome")}}/>
          <Label texto='E-mail'/>
          <input type="email" placeholder='Digite o seu E-mail' value={dados.email} onChange={(e)=>{handleChange(e, "email")}}/>
          <Label texto='Telefone'/>
          <input type='text' placeholder='Digite o seu numero' value={dados.telefone}  onChange={(e)=>{handleChange(e, "telefone")}}/>
          <Button onClick={proximo} texto={"Próximo"}/> 
          </div> : ''}

          {pg == 2 ? <div className={S.form}>
        <Label texto='cep'/>
        <input type="text" placeholder='Digite CEP' value={dados.cep} onChange={(e)=>{handleChange(e, "cep")}} />
        <Label texto='endereço1'/>
        <input type="text" placeholder='Digite Endereço' value={dados.endereco1} onChange={(e)=>{handleChange(e, "endereco1")}}/>
        <Label texto='endereço2'/>
        <input type="text" placeholder='Digite Endereço 2' value={dados.endereco2} onChange={(e)=>{handleChange(e, "endereco2")}}/>          
          <Button onClick={anterior} texto={"Anterior"}/>
          <Button onClick={proximo} texto={"Próximo"}/>
        </div> : ''}

        {pg == 3 ? <div className={S.form}>
          <Label texto='CPF'/>
          <input type="text" placeholder='Digite Data Nascimento' value={dados.dataNascimento} onChange={(e)=>{handleChange(e, "dataNascimento")}} />
          <Label texto='Data nascimento'/>
          <input type="text" placeholder='Digite CPF'  value={dados.cpf} onChange={(e)=>{handleChange(e, "cpf")}}/>
          <Label texto='Renda Mensal'/>
          <input type="text" placeholder='Renda mensal' value={dados.rendaMensal} onChange={(e)=>{handleChange(e, "rendaMensal")}}/>
          <Button  onClick={salvar} texto='salvar'/>
          <Button onClick={anterior} texto={"Anterior"}/>
        </div> : ''}         
        </form>        
    </div>
  )
}

export default Cadastrar