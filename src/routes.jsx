import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "pages/Inicio"
import Favoritos from "pages/Favoritos"
import Player from "pages/Player"
import NaoEncontrada from "pages/NaoEncontrada"
import Layout from "components/Layout"
import { FavoritosProvider } from "contexts/Favoritos"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    element={
                        <FavoritosProvider>
                            <Layout />
                        </FavoritosProvider>
                    }
                >
                    <Route path="/" element={<Inicio />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/:id" element={<Player />}/>
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes