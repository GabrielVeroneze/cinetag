import styles from "./CardsContainer.module.scss"

const CardsContainer = ({ children }) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default CardsContainer