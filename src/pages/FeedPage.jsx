import {useEffect, useRef, useState} from "react"
import SearchBar from "../components/SearchBar.jsx"

import Gallery from "../components/Gallery.jsx"
import {token} from "../../token.js"


const FeedPage = () => {

    const endPageRef = useRef(null)

    const [page, setPage] = useState(0)
    const [breed, setBreed] = useState("")
    const [info, setInfo] = useState([])



    const handleScroll = () => {

        if (endPageRef.current && endPageRef.current.getBoundingClientRect().bottom <= window.innerHeight+ 2500) {
            setPage(page+1)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    useEffect(() => {
        const url = `https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&page=${page}${breed}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(url)
                const filteredData = data.filter(cat => cat !== null && cat !== undefined && cat.breeds && cat.breeds.length > 0)
                const combinedInfo = [...info, ...filteredData]
                const noRepeatedMap = new Map(combinedInfo.map(item => [item.id, item]))
                setInfo([...noRepeatedMap.values()])
                console.log(info)

            })
            .catch(error => console.log(error))
    }, [page, breed])


    if (!info || info.length===0) {
        return(
            <h3 className={"cargando"}>Cargando...</h3>
        )
    }

    const handleFilter = (breedInfo) =>{

        setPage(0)
        setInfo([])
        setBreed(breedInfo)

    }


    return(
        <>

        <Gallery info={info} alreadyFav={false} handleFilter={handleFilter}></Gallery>
        <div className={"endPageRef"} ref={endPageRef}></div>
        </>
    )

}

export default FeedPage