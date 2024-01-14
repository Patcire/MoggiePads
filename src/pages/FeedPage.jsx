
import {useEffect, useRef, useState} from "react";
import SearchBar from "../components/SearchBar.jsx";

import Gallery from "../components/Gallery.jsx";
import {token} from "../../token.js";


const FeedPage = () => {

    let scrollPosition = window.scrollY
    const endPageRef = useRef(null)

    const [page, setPage] = useState(0)
    const [url, setUrl] = useState(`https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&page=${page}`)
    const [info, setInfo] = useState([])


    const handleScroll = () => {

        console.log(scrollPosition)
        if (endPageRef.current && endPageRef.current.getBoundingClientRect().bottom <= window.innerHeight+ 1500) {
            //setPage(prevState => prevState+1)

            setPage(prevPage => {
                const newPage = prevPage + 1;
                setUrl(`https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&page=${newPage}`);
                return newPage;
            })
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {

                const filteredData = data.filter(cat => cat !== null && cat !== undefined && cat.breeds && cat.breeds.length > 0)
                const combinedInfo = [...info, ...filteredData]
                const noRepeatedMap = new Map(combinedInfo.map(item => [item.id, item]))
                setInfo([...noRepeatedMap.values()])
                console.log(info)

            })
            .catch(error => console.log(error))
    }, [url, page]);


    if (!info || info.length===0) {
        return(
            <h3 className={"cargando"}>Cargando...</h3>
        )
    }

    const handleFilter = (newUrl) =>{
        console.log('clicl')
        setPage(0)
        setInfo([])
        setUrl(newUrl)

    }


    return(
        <>
        <SearchBar></SearchBar>
        <Gallery info={info} alreadyFav={false} handleFilter={handleFilter}></Gallery>
        <div className={"endPageRef"} ref={endPageRef}></div>
        </>
    )

}

export default FeedPage