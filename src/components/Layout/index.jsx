import { Outlet } from "react-router-dom"
import Cabecalho from "components/Cabecalho"
import Rodape from "components/Rodape"
import styles from "./Layout.module.scss"

const Layout = () => {
    return (
        <>
            <Cabecalho />
            <section className={styles.container}>
                <Outlet />
            </section>
            <Rodape />
        </>
    )
}

export default Layout