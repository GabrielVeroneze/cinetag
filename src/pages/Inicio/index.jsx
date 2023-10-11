import { useEffect, useState } from "react"
import Banner from "components/Banner"
import Cards from "components/Cards"
import CardsContainer from "components/CardsContainer"
import Titulo from "components/Titulo"

const Inicio = () => {
    const [videos, setVideo] = useState([])

    useEffect(() => {
        async function buscarDadosVideos() {
            try {
                const response = await fetch('https://my-json-server.typicode.com/GabrielVeroneze/cinetag-api/videos')
                const dados = await response.json()
                setVideo(dados)
            } catch (error) {
                console.log(error);
            }
        }
        buscarDadosVideos()
    }, [])

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