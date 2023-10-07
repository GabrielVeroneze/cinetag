import iconeFavoritar from "./favoritar.svg"
import styles from "./Card.module.scss"

const Cards = ({ id, titulo, capa}) => {
    return (
        <div className={styles.card}>
            <img
                className={styles.capa}
                src={capa}
                alt={titulo}
            />
            <div className={styles.detalhes}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <img
                    className={styles.favoritar}
                    src={iconeFavoritar}
                    alt="Favoritar Filme"
                />
            </div>
        </div>
    )
}

export default Cards