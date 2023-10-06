import styles from './Rodape.module.scss'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <p className={styles.texto}>
                Desenvolvido por <a href="https://github.com/GabrielVeroneze" target='_blank' rel='noreferrer'>Gabriel</a>.
            </p>
        </footer>
    )
}

export default Rodape