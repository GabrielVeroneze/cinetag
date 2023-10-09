import { Link } from "react-router-dom"
import { useFavoritoContext } from "contexts/Favoritos"
import iconeFavoritar from "./favoritar.svg"
import iconeFavoritarAtivo from "./favoritar-ativo.svg"
import styles from "./Card.module.scss"

const Cards = ({ id, titulo, capa }) => {
    const { favoritos, adicionarFavorito } = useFavoritoContext()

    const foiFavoritado = favoritos.some(favorito => favorito.id === id)
    const icone = foiFavoritado ? iconeFavoritarAtivo : iconeFavoritar

    return (
        <div className={styles.card}>
            <Link to={`/${id}`}>
                <img
                    className={styles.capa}
                    src={capa}
                    alt={titulo}
                />
            </Link>
            <div className={styles.detalhes}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <img
                    className={styles.favoritar}
                    src={icone}
                    alt="Favoritar Filme"
                    onClick={() => adicionarFavorito({ id, titulo, capa })}
                />
            </div>
        </div>
    )
}

export default Cards