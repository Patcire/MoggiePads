import {useState} from "react";

const useFetch = (urlParameters, page) => {


    let url = ` https://api.thecatapi.com/v1/images/${urlParameters}&page=${page}`
    // 9 is the length of the object ids from the API call
    if (urlParameters.length === 9) url =  ` https://api.thecatapi.com/v1/images/${urlParameters}`

    const [info, setInfo] = useState([])

    const loadInfo = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {

                const combinedInfo = [...info, ...data]
                const noRepeatedMap = new Map(combinedInfo.map(item => [item.id, item]))
                setInfo(Array.from((noRepeatedMap).values()))

            })
            .catch(error => console.log(error))
    }


    return {info, loadInfo}

}


export default useFetch