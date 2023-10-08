import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "pages/Inicio"
import Favoritos from "pages/Favoritos"
import Layout from "components/Layout"
import FavoritosProvider from "contexts/Favoritos"

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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes