import Card from "./Card.jsx";
import {goToTop} from "../functions/scroll.js";
import SearchBar from "./SearchBar.jsx";
import {useState} from "react";


const Gallery = ({info, alreadyFav, handleFilter}) => {

    const bengUrl = `&breed_ids=beng`
    const abysUrl = `&breed_ids=abys`
    const persUrl = `&breed_ids=pers`
    const siamUrl = `&breed_ids=siam`
    const abobUrl = `&breed_ids=abob`
    const baliUrl = `&breed_ids=bali`
    const birmUrl = `&breed_ids=birm`
    const sphyUrl = `&breed_ids=sphy`

    const [searchTerm, setSearchTerm] = useState("")
    const handleInput = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    return (
        <section className={"gallery"}>


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
                    onClick={() => handleFilter(`&breed_ids=${searchTerm}`)}
                >
                    Buscar
                </button>

            </form>

            <section className={"filters"}>
                <article>
                    <h3>Raza</h3>
                    <ul>
                        <li>
                            <button onClick={() => handleFilter(bengUrl)}>Bengalí</button>
                            <button onClick={() => handleFilter(abysUrl)}>Abisino</button>
                            <button onClick={() => handleFilter(persUrl)}>Persa</button>
                            <button onClick={() => handleFilter(siamUrl)}>Siamés</button>
                            <button onClick={() => handleFilter(abobUrl)}>Bobtail Americano</button>
                            <button onClick={() => handleFilter(baliUrl)}>Balinés</button>
                            <button onClick={() => handleFilter(birmUrl)}>Birmano</button>
                            <button onClick={() => handleFilter(sphyUrl)}>Esfinge</button>

                        </li>
                    </ul>
                </article>
            </section>

            <section className={"cards"}>

                {
                    info.map((cat) => (
                        <Card key={cat.id} cat={cat} loading="lazy" alreadyFav={alreadyFav}></Card>
                    ))
                }

            </section>
            {window.scrollY > 200 && (
                <button className={"scrollbut"} onClick={goToTop}>Volver</button>
            )}
        </section>
    )

}
export default Gallery
