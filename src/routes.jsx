import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "pages/Inicio"
import Favoritos from "pages/Favoritos"
import Layout from "components/Layout"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes