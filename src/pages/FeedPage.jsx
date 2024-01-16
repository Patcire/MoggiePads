
import {useEffect, useRef, useState} from "react"
import Gallery from "../components/Gallery.jsx"
import {token} from "../../token.js"
import {findBreed} from "../functions/breedInfo.js";
import {showModal} from "../functions/Validations.js";
import { throttle } from 'lodash';


const FeedPage = () => {

    const endPageRef = useRef(null)

    const [page, setPage] = useState(0)
    const [breed, setBreed] = useState("")
    const [infoFromAPI, setInfoFromAPI] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(true)


    const handleScroll = () => {

        if (endPageRef.current && endPageRef.current.getBoundingClientRect().bottom <= window.innerHeight+ 2500 && !loading) {
            setLoading(true)
            setPage(prevState => prevState+1)
        }

    }

    const throttleHandleScroll = throttle(handleScroll, 500)

    useEffect(() => {
        window.addEventListener('scroll', throttleHandleScroll)
        return () => {
            window.removeEventListener('scroll', throttleHandleScroll)
        }
    }, [throttleHandleScroll])

    useEffect(() => {
        const url = `https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&page=${page}${breed}`
        console.log(url)
        loading && fetch(url)
            .then(response => response.json())
            .then(data => {

                const filteredData = data.filter(cat => cat !== null && cat !== undefined && cat.breeds && cat.breeds.length > 0)
                const combinedInfo = [...infoFromAPI, ...filteredData]
                const noRepeatedMap = new Map(combinedInfo.map(item => [item.id, item]))
                setInfoFromAPI([...noRepeatedMap.values()])
                setLoading(false)

            })
            .catch(error => console.log(error))



    }, [page, breed])


    if (!infoFromAPI || infoFromAPI.length===0) {
        return(
            <article className={"container__loader"}>
                <div className={"loader"}></div>
            </article>
        )
    }

    const handleStatesWhenFilter = (breedInfo) =>{

        setPage(0)
        setInfoFromAPI([])
        setLoading(true)
        setBreed(breedInfo)

    }

    const handleInputOnSearchBar = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }

    const handleClickOnSearch = (e) => {
        e.preventDefault()
        console.log("searchTerm:", searchTerm)
        console.log("findBreed result:", findBreed(searchTerm))

        const correspondentBreedId = findBreed(searchTerm)
        console.log(correspondentBreedId)
        correspondentBreedId !== null ?
            handleStatesWhenFilter(correspondentBreedId)
            :
            showModal("error", "Raza no encontrada :(", "Prueba con alguna de las mostradas en los filtros\n (no uses acentos)")
    }


    const goOutOfFilters = (e) =>{
        e.preventDefault()
        setInfoFromAPI([])
        setLoading(true)
        setBreed("")
    }

    return(
        <>
        <Gallery
            info={infoFromAPI}
            alreadyFav={false}
            handleStatesWhenFilter={handleStatesWhenFilter}
            handleInputOnSearchBar={handleInputOnSearchBar}
            handleClickOnSearch={handleClickOnSearch}
            goOutOfFilters={goOutOfFilters}
        >
        </Gallery>

        <div className={"endPageRef"} ref={endPageRef}></div>
        </>
    )

}

export default FeedPage