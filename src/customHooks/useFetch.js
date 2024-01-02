import {useEffect, useState} from "react";

const useFetch = (urlParameters) => {

    const [page, setPage] = useState(0)
    let url = ` https://api.thecatapi.com/v1/images/${urlParameters}&page=${page}`

    // 9 es la longitud de los ids
    if (urlParameters.length === 9) url =  ` https://api.thecatapi.com/v1/images/${urlParameters}`
    const [info, setInfo] = useState([])

    const loadMoreInfo = () => {
         setPage(page+1)
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // todo --> implementar que no se repitan
                setInfo((oldInfo) =>  [...oldInfo, ...data])
            })
            .catch(error => console.log(error))
    }, [url, page]);

    return {info, loadMoreInfo}

}


export default useFetch