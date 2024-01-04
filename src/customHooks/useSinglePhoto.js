import {useState} from "react";

const useSinglePhoto = () =>{

    const [photo, setPhoto] = useState("")

    const loadOnePhoto = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => {
                setPhoto(data[0].url)
            })

    }

    return {photo, loadOnePhoto}
}

export default useSinglePhoto