import { useParams } from "react-router-dom"
import { useBuscarDadosVideos } from "hooks/useBuscarDadosVideos"
import NaoEncontrada from "pages/NaoEncontrada"
import Banner from "components/Banner"
import Titulo from "components/Titulo"
import styles from "./Player.module.scss"

const Player = () => {
    const { id } = useParams()
    const { videos } = useBuscarDadosVideos(id)
    
    const video = videos[0]

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