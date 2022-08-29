import S from './Clientes.module.css'
import Card1 from '../../components/cards/Card1'

const Clientes = () => {
    return (
        <div className={S.divCampo}>
            {campo.length > 0 ? campo.map((item) => <Card1 nome={item.nome} sobrenome={item.sobrenome} telefone={item.telefone} cep={item.cep} endereco1={item.endereco1} endereco2={item.endereco2} dataNascimento={item.dataNascimento} cpf={item.cpf} rendaMensal={item.rendaMensal} />)
                : 'Campo não retornou resultados'}
        </div>
    )
}

export default Clientes