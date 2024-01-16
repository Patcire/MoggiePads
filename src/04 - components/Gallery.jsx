import Card from "./Card.jsx";
import {goToTop, showRelativeToPosition} from "../07 - helpers/scroll.js";
import {abobUrl, abysUrl, baliUrl, bengUrl, birmUrl, persUrl, siamUrl, sphyUrl} from "../07 - helpers/breedInfo.js";
import {useEffect, useState} from "react";
import { IoMdSearch } from "react-icons/io";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";


const Gallery = ({info: infoFromAPI, alreadyFav, handleStatesWhenFilter,
                     handleInputOnSearchBar, handleClickOnSearch, goOutOfFilters}) => {


    const actualURL = window.location.href
    const [showButtons, setShowButtons] = useState({
        goTop:false})


    const handleScrollYPosition = () =>{
        showRelativeToPosition(setShowButtons)
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScrollYPosition)
    }, [])

    return (
        <section className={"gallery"}>

             {
             actualURL.includes("feed") &&
             <section className={"filters"}>
                 <form className={"filters__searchbar"}>
                     <h2>Busca por raza</h2>
                     <input
                         type={"text"}
                         placeholder={"Bengali, abisina..."}
                         className={"searchbar__input"}
                         name={"breed"}
                         onChange={handleInputOnSearchBar}
                     >
                     </input>

                     <button
                         type={"submit"}
                         className={"searchbar__button"}
                         onClick={handleClickOnSearch}
                     >
                         <IoMdSearch className={"button__img"}/>
                     </button>

                 </form>

                 <button className={"filters__button_random"}
                 onClick={goOutOfFilters}>
                     <GiPerspectiveDiceSixFacesRandom className={"button_random__icon"}></GiPerspectiveDiceSixFacesRandom>
                     Infinitos
                 </button>

                 <section className={"filters__a"}>
                     <article>
                         <h2 className={"a__title"}>Filtra por raza</h2>
                         <ul className={"a__list"}>
                             <li>
                                 <a onClick={() => handleStatesWhenFilter(bengUrl)}
                                    className={"li__a"}>Bengalí</a>
                             </li>
                             <li>
                                 <a onClick={() => handleStatesWhenFilter(abysUrl)}
                                    className={"li__a"}>Abisino</a>
                             </li>
                             <li>
                                 <a onClick={() => handleStatesWhenFilter(persUrl)}
                                    className={"li__a"}>Persa</a>
                             </li>
                             <li>
                             <a onClick={() => handleStatesWhenFilter(siamUrl)}
                                className={"li__a"}>Siamés</a>
                             </li>
                             <li>
                                 <a onClick={() => handleStatesWhenFilter(abobUrl)}
                                    className={"li__a"}>Americano</a>
                             </li>
                             <li>
                                 <a onClick={() => handleStatesWhenFilter(baliUrl)}
                                    className={"li__a"}>Balinés</a>
                             </li>
                             <li>
                                 <a onClick={() => handleStatesWhenFilter(birmUrl)}
                                    className={"li__a"}>Birmano</a>
                             </li>
                             <li>
                                 <a onClick={() => handleStatesWhenFilter(sphyUrl)}
                                    className={"li__a"}>Esfinge</a>
                             </li>
                     </ul>
                 </article>
                </section>
             </section>
            }

            <section className={"cards"}>

                {
                    infoFromAPI.map((cat) => (
                        <Card key={cat.id} cat={cat} loading="lazy" alreadyFav={alreadyFav}></Card>
                    ))
                }

            </section>

            {showButtons.goTop && (
                <button className={"scrollbut"} onClick={goToTop}>Volver</button>
            )}

        </section>
    )

}
export default Gallery
