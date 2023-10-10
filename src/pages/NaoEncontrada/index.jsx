import styles from "./NaoEncontrada.module.scss"

const NaoEncontrada = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.titulo}>Ops!</h2>
            <p className={styles.texto}>
                O conteúdo que você procura não foi encontrado!
            </p>
        </section>
    )
}

export default NaoEncontrada