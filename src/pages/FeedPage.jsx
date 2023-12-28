import useFetch from "../customHooks/useFetch.js";
import {token} from "../../token.js";


const FeedPage = () => {

    const { info} = useFetch(`https://api.thecatapi.com/v1/images/search?limit=12`);


    return(
        <section className={"cards"}>
            {
                info?.map((cat) => (
                    <article key={cat.id} className={"cards__card"}>
                        <img alt={"cat-photo"} src={cat.url} className={"cards__card__photo"}></img>
                    </article>
                ))
            }
        </section>
    )
}

export default FeedPage