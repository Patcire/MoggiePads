import Card from "./Card.jsx";
import {goToTop} from "../functions/scroll.js";
import {abobUrl, abysUrl, baliUrl, bengUrl, birmUrl, persUrl, siamUrl, sphyUrl} from "../functions/breedInfo.js";


const Gallery = ({info, alreadyFav, handleFilter, handleInput, handleClick}) => {


    const userIsHere = window.location.href

    return (
        <section className={"gallery"}>

             {
                 userIsHere.includes("feed") &&
             <>
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
                        onClick={handleClick}
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
                                <button onClick={() => handleFilter(abobUrl)}>Americano</button>
                                <button onClick={() => handleFilter(baliUrl)}>Balinés</button>
                                <button onClick={() => handleFilter(birmUrl)}>Birmano</button>
                                <button onClick={() => handleFilter(sphyUrl)}>Esfinge</button>

                            </li>
                        </ul>
                    </article>
            </section>
             </>
            }
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
