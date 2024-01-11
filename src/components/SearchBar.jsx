import useFetch from "../customHooks/useFetch.js";
import {token} from "../../token.js";
import {useState} from "react";

const SearchBar = ({page}) => {


    const [breed, setBreed] = useState("")
    const handleChange = (e) => {
        e.preventDefault()
        setBreed(e.target.value)
    }


    const { info, loadInfo} = useFetch(`search?limit=16${token}?breed_ids=${breed}`, page)


    return (

        <article className={"searchbar"}>
            <input
                type={"text"}
                placeholder={"Busca por país..."}
                className={"searchbar__input"}
                name={"breed"}
                onChange={handleChange}
            >
            </input>

            <button
                type={"submit"}
                className={"primary-button--v3"}
                onClick={loadInfo}
            >
              Buscar
            </button>

        </article>
    )
}
export default SearchBar
