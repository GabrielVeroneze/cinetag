import Banner from "components/Banner"
import Cards from "components/Cards"
import CardsContainer from "components/CardsContainer"
import Titulo from "components/Titulo"

const Favoritos = () => {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <CardsContainer>
                <Cards id="1" titulo="O labirinto do Logcat" capa="https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png" />
                <Cards id="3" titulo="O poderoso JavaScript" capa="https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img4.png" />
            </CardsContainer>
        </>
    )
}

export default Favoritos