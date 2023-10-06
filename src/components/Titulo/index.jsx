import styles from "./Titulo.module.scss"

const Titulo = ({ children }) => {
    return (
        <div className={styles.titulo}>
            {children}
        </div>
    )
}

export default Titulo