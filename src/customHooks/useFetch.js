import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setInfo(data)
            })
            .catch(error => console.log(error))
    }, []);

    return {info}

}


export default useFetch