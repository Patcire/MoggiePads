import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [info, setInfo] = useState([])

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

    }, [url])

    return {info, setInfo}

}


export default useFetch