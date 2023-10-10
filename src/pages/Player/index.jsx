import { useParams } from "react-router-dom"
import NaoEncontrada from "pages/NaoEncontrada"
import Banner from "components/Banner"
import Titulo from "components/Titulo"
import videos from "json/db.json"
import styles from "./Player.module.scss"

const Player = () => {
    const { id } = useParams()

    const video = videos.find(video => video.id === Number(id))

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section>
                <div className={styles.container}>
                    <iframe
                        className={styles.video}
                        src={video.link}
                        title={video.titulo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </>
    )
}

export default Player