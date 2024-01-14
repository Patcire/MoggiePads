
import {useState} from "react"

const SearchBar = ({handleFilter}) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleInput = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        handleFilter(`&breed_ids=${searchTerm}`)
    }

    return (

        <form className={"searchbar"}>
            <input
                type={"text"}
                placeholder={"Busca por raza..."}
                className={"searchbar__input"}
                name={"breed"}
                onChange={handleInput}
            >
            </input>

            <button
                type={"submit"}
                className={"primary-button--v3"}
                onClick={()=> handleSubmit}
            >
                Buscar
            </button>

        </form>
    )
}
export default SearchBar
