import Banner from "components/Banner"
import Card from "components/Cards"
import Titulo from "components/Titulo"
import videos from "json/db.json"
import styles from "./Inicio.module.scss"

const Inicio = () => {
    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.lista}>
                {videos.map(video => (
                    <Card key={video.id} {...video} />
                ))}
            </section>
        </>
    )
}

export default Inicio