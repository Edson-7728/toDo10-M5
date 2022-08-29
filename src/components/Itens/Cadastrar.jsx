import S from './Cadastrar.module.css'
const Cadastrar = () => {
  return (
    <div className={S.container}>
        <fieldset className={S.campo}>
            <label htmlFor="">Nome</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Sobrenome</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
            <label htmlFor="">Telefone</label>
            <input type="tel" name="" id="" />
        </fieldset>
        <div className={S.divBtn}>
            <button className={S.botao}>Proximo</button>
        </div>
    </div>
  )
}

export default Cadastrar