import useFetch from "../customHooks/useFetch.js";
import Card from "../components/Card.jsx";
import {useEffect, useRef, useState} from "react";
import SearchBar from "../components/SearchBar.jsx";
import Filters from "../components/Filters.jsx";

import {token} from "../../token.js";


const FeedPage = () => {

    const [page, setPage] = useState(0)
    const endPageRef = useRef(null)
    const { info} = useFetch(`https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&page=${page}`)
    let scrollPosition = window.scrollY

    const handleScroll = () => {

        console.log(scrollPosition)
        if (endPageRef.current && endPageRef.current.getBoundingClientRect().bottom <= window.innerHeight+ 1500) {
            setPage(page+1)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })



    if (!info || info.length===0) {
        return(
            <h3 className={"cargando"}>Cargando...</h3>
        )
    }

    const goToTop = () => {
        window.scroll({
            top:0,
            behavior:"smooth"
        })

    }


    return(
        <>
        <SearchBar></SearchBar>
        <Filters></Filters>
        <section className={"cards"}>
            {
                info?.map((cat) => (

                   <Card key={cat.id} cat={cat} loading="lazy" alreadyFav={false}></Card>
                ))
            }
        </section>
        {window.scrollY > 200 && (
            <button className={"scrollbut"} onClick={goToTop} >Volver</button>
        )}
        <div className={"endPageRef"} ref={endPageRef}></div>
        </>
    )

}

export default FeedPage