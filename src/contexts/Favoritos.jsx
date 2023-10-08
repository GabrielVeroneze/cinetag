import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext()
FavoritosContext.displayName = "Favoritos"

export const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([])

    return (
        <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export const useFavoritoContext = () => {
    const { favoritos, setFavoritos } = useContext(FavoritosContext)

    const adicionarFavorito = (novoFavorito) => {
        const favoritoRepetido = favoritos.some(favorito => favorito.id === novoFavorito.id)

        if(!favoritoRepetido) {
            setFavoritos([
                ...favoritos,
                novoFavorito
            ])
            return
        }

        setFavoritos(favoritos.filter(favorito => favorito.id !== novoFavorito.id))
    }

    return {
        favoritos,
        adicionarFavorito
    }
}
