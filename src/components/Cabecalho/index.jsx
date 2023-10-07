import { Link } from "react-router-dom"
import logo from './logo.png'
import MenuLink from "components/MenuLink"
import styles from './Cabecalho.module.scss'

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <Link to="/">
                <img src={logo} alt="Logo do CineTag" />
            </Link>
            <nav className={styles.navegacao}>
                <MenuLink url="/">
                    Home
                </MenuLink>
                <MenuLink url="/favoritos">
                    Favoritos
                </MenuLink>
            </nav>
        </header>
    )
}

export default Cabecalho