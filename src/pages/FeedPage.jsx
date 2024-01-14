
import {useEffect, useRef, useState} from "react"
import Gallery from "../components/Gallery.jsx"
import {token} from "../../token.js"
import {findBreed} from "../functions/breedInfo.js";
import {showModalError} from "../functions/Validations.js";

const FeedPage = () => {

    const endPageRef = useRef(null)

    const [page, setPage] = useState(0)
    const [breed, setBreed] = useState("")
    const [info, setInfo] = useState([])
    const [searchTerm, setSearchTerm] = useState("")


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

                const filteredData = data.filter(cat => cat !== null && cat !== undefined && cat.breeds && cat.breeds.length > 0)
                const combinedInfo = [...info, ...filteredData]
                const noRepeatedMap = new Map(combinedInfo.map(item => [item.id, item]))
                setInfo([...noRepeatedMap.values()])


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

    const handleInput = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log("searchTerm:", searchTerm)
        console.log("findBreed result:", findBreed(searchTerm))

        const correspondentBreedId = findBreed(searchTerm)
        console.log(correspondentBreedId)
        correspondentBreedId !== null ?
            handleFilter(correspondentBreedId)
            :
            showModalError("error", "Raza no encontrada :(", "Prueba con alguna de las mostradas en los filtros\n (no uses acentos)")
    }



    return(
        <>

        <Gallery
            info={info}
            alreadyFav={false}
            handleFilter={handleFilter}
            handleInput={handleInput}
            handleClick={handleClick}>
        </Gallery>

        <div className={"endPageRef"} ref={endPageRef}></div>
        </>
    )

}

export default FeedPage