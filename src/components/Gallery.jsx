import Card from "./Card.jsx";
import {goToTop, showRelativeToPosition} from "../functions/scroll.js";
import {abobUrl, abysUrl, baliUrl, bengUrl, birmUrl, persUrl, siamUrl, sphyUrl} from "../functions/breedInfo.js";
import {useEffect, useState} from "react";
import { IoMdSearch } from "react-icons/io";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const Gallery = ({info, alreadyFav, handleFilter, handleInput, handleClick, handleDeleteFiltersParameters}) => {


    const userIsHere = window.location.href
    const [showButton, setShowButton] = useState(false)

    const handleScrollYPosition = () =>{
        showRelativeToPosition(setShowButton)
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScrollYPosition)
    }, [])

    return (
        <section className={"gallery"}>

             {
             userIsHere.includes("feed") &&
             <section className={"filters"}>
                 <form className={"filters__searchbar"}>
                     <h2>Busca por raza</h2>
                     <input
                         type={"text"}
                         placeholder={"Bengali, abisina..."}
                         className={"searchbar__input"}
                         name={"breed"}
                         onChange={handleInput}
                     >
                     </input>

                     <button
                         type={"submit"}
                         className={"searchbar__button"}
                         onClick={handleClick}
                     >
                         <IoMdSearch className={"button__img"}/>
                     </button>

                 </form>
                 <button className={"filters__button_random"}
                 onClick={handleDeleteFiltersParameters}>
                     <GiPerspectiveDiceSixFacesRandom className={"button_random__icon"}></GiPerspectiveDiceSixFacesRandom>
                     Gatos mezclados e infinitos
                 </button>

                 <section className={"filters__a"}>
                     <article>
                         <h2 className={"a__title"}>Filtra por raza</h2>
                         <ul className={"a__list"}>
                             <li>
                                 <a onClick={() => handleFilter(bengUrl)}
                                    className={"li__a"}>Bengalí</a>
                             </li>
                             <li>
                                 <a onClick={() => handleFilter(abysUrl)}
                                    className={"li__a"}>Abisino</a>
                             </li>
                             <li>
                                 <a onClick={() => handleFilter(persUrl)}
                                    className={"li__a"}>Persa</a>
                             </li>
                             <li>
                             <a onClick={() => handleFilter(siamUrl)}
                                className={"li__a"}>Siamés</a>
                             </li>
                             <li>
                                 <a onClick={() => handleFilter(abobUrl)}
                                    className={"li__a"}>Americano</a>
                             </li>
                             <li>
                                 <a onClick={() => handleFilter(baliUrl)}
                                    className={"li__a"}>Balinés</a>
                             </li>
                             <li>
                                 <a onClick={() => handleFilter(birmUrl)}
                                    className={"li__a"}>Birmano</a>
                             </li>
                             <li>
                                 <a onClick={() => handleFilter(sphyUrl)}
                                    className={"li__a"}>Esfinge</a>
                             </li>
                     </ul>
                 </article>
                </section>
             </section>
            }
            <section className={"cards"}>

                {
                    info.map((cat) => (
                        <Card key={cat.id} cat={cat} loading="lazy" alreadyFav={alreadyFav}></Card>
                    ))
                }

            </section>
            {showButton && (
                <button className={"scrollbut"} onClick={goToTop}>Volver</button>
            )}
        </section>
    )

}
export default Gallery
