import Card from "./Card.jsx";
import {goToTop} from "../functions/scroll.js";
import {token} from "../../token.js";

const Gallery = ({info, alreadyFav, handleFilter}) => {

    const bengUrl = `https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&breed_ids=beng`
    const abysUrl = `https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&breed_ids=abys`
    const persUrl = `https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&breed_ids=pers`
    const siamUrl = `https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&breed_ids=siam`
    const abobUrl = `https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&breed_ids=abob`;
    const baliUrl = `https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&breed_ids=bali`;
    const birmUrl = `https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&breed_ids=birm`;
    const sphyUrl = `https://api.thecatapi.com/v1/images/search?limit=16${token}&has_breeds=1&breed_ids=sphy`;


    return (
        <section className={"gallery"}>

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
