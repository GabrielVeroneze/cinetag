import { useEffect, useState } from "react"

const useBuscarDadosVideos = (id) => {
    const [videos, setVideos] = useState([])
    let url = 'https://my-json-server.typicode.com/GabrielVeroneze/cinetag-api/videos'

    if (id) {
        url += `?id=${id}`
    }

    useEffect(() => {
        (async function() {
            try {
                const response = await fetch(url)
                const dados = await response.json()
                setVideos(dados)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [url])

    return {
        videos
    }
}

export { useBuscarDadosVideos }