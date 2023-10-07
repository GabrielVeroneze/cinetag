import Banner from "components/Banner"
import Cabecalho from "components/Cabecalho"
import Card from "components/Cards"
import Rodape from "components/Rodape"
import Titulo from "components/Titulo"
import videos from "json/db.json"
import styles from "./Inicio.module.scss"

const Inicio = () => {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <main className={styles.principal}>
                <Titulo>
                    <h1>Um lugar para guardar seus vídeos e filmes!</h1>
                </Titulo>
                <section className={styles.grid}>
                    {videos.map(video => (
                        <Card key={video.id} {...video} />
                    ))}
                </section>
            </main>
            <Rodape />
        </>
    )
}

export default Inicio