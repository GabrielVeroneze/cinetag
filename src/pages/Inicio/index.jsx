import Banner from "components/Banner"
import Cabecalho from "components/Cabecalho"
import Card from "components/Cards"
import Rodape from "components/Rodape"
import Titulo from "components/Titulo"

const Inicio = () => {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card
                id="1"
                titulo="O labirinto do Logcat"
                capa="https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png"
                link="https://www.youtube.com/embed/ypvGqZGJBls"
            />
            <Rodape />
        </>
    )
}

export default Inicio