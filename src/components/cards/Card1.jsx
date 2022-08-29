
const Card1 = ({nome, sobrenome, telefone, cep, endereco1, endereco2, dataNascimento, cpf, rendaMensal}) => {
  return (
    <div className={divContainer}>
        <p>Nome: {nome}</p>
        <p>Sobrenome: {sobrenome}</p>
        <p>Telefone: {telefone}</p>
        <p>CEP: {cep}</p>
        <p>Endereço 1: {endereco1}</p>
        <p>Enderecço 2: {endereco2}</p>
        <p>Data de Nascimento: {dataNascimento}</p>
        <p>CPF: {cpf}</p>
        <p>Renda Mensal: {rendaMensal}</p>
    </div>
  )
}

export default Card1