import { useBuscarDadosVideos } from "hooks/useBuscarDadosVideos"
import Banner from "components/Banner"
import Cards from "components/Cards"
import CardsContainer from "components/CardsContainer"
import Titulo from "components/Titulo"

const Inicio = () => {
    const { videos } = useBuscarDadosVideos()

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <CardsContainer>
                {videos.map(video => (
                    <Cards key={video.id} {...video} />
                ))}
            </CardsContainer>
        </>
    )
}

export default Inicio