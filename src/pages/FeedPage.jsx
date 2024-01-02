import useFetch from "../customHooks/useFetch.js";
import {token} from "../../token.js";
import Card from "../components/Card.jsx";
import {useEffect, useRef} from "react";


const FeedPage = () => {

    const endPageRef = useRef(null)
    const { info, loadMoreInfo} = useFetch(`search?limit=10${token}&has_breeds=1`)
    console.log(info)


    const handleScroll = () => {

        if (endPageRef.current && endPageRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
            loadMoreInfo()
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [info, handleScroll])

    if (!info || info.length===0) {
        return(
            <h3 className={"cargando"}>Cargando...</h3>
        )
    }

    return(
        <>
        <section className={"cards"}>
            {
                info?.map((cat) => (
                   <Card key={cat.id} cat={cat} loading="lazy"></Card>
                ))
            }
        </section>
        <div className={"endPageRef"} ref={endPageRef}></div>
        </>
    )

}

export default FeedPage