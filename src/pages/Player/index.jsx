import Banner from "components/Banner"
import Titulo from "components/Titulo"
import styles from "./Player.module.scss"

const Player = () => {
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
                        src="https://www.youtube.com/embed/ypvGqZGJBls"
                        title="Atualizações do Logcat | #AluraMais"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </>
    )
}

export default Player