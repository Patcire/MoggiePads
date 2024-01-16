import {useState} from "react";

const useFreeCallAPI = () =>{

    const [photo, setPhoto] = useState("https://cdn2.thecatapi.com/images/dkh.jpg")

    const loadOnePhoto = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => {
                setPhoto(data[0].url)
            })

    }

    return {photo, loadOnePhoto}
}

export default useFreeCallAPI