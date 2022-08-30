import S from './Header.module.css'
import { Link } from 'react-router-dom'
import Formulario from '../../pages/Formulario/Formulario'
import Clientes from '../../pages/Clientes/Clientes'
import Home from '../../pages/Home/Home'

const Header = () => {
    return (
        <div className={S.divContainer}>            
            <header className={S.header}>
                <h1>Venture</h1>
                <h2>Labs</h2>
                <nav>
                    <Link className={S.link} to='/'> HOME </Link>
                    <Link className={S.link} to='/Formulario'> + Cadastrar </Link>
                    <Link className={S.link} to='/Clientes'>Clientes</Link>
                </nav>
            </header>
            <div className={S.s}>
                <Home />
                {/* <Formulario />
                <Clientes /> */}
            </div>
        </div>
    )
}

export default Header