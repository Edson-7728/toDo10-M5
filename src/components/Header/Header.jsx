import S from './Header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className={S.divContainer}>
            <header className={S.header}>
                <h1>Venture Labs</h1>
                <h2>Questionário</h2>
                <nav>
                <Link className={S.link} to='/cadastrar'>+ Cadastrar</Link>
                <Link className={S.link} to='/clientes'>Clientes</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header