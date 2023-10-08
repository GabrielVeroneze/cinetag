import { useFavoritoContext } from "contexts/Favoritos"
import Banner from "components/Banner"
import Cards from "components/Cards"
import CardsContainer from "components/CardsContainer"
import Titulo from "components/Titulo"

const Favoritos = () => {
    const { favoritos } = useFavoritoContext()

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <CardsContainer>
                {favoritos.map(favorito => (
                    <Cards key={favorito.id} {...favorito} />
                ))}
            </CardsContainer>
        </>
    )
}

export default Favoritos