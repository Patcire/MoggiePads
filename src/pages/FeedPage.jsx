import useFetch from "../customHooks/useFetch.js";
import {token} from "../../token.js";
import Card from "../components/Card.jsx";


const FeedPage = () => {

    const { info} = useFetch(`https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1&${token}`);

    return(
        <section className={"cards"}>
            {
                info?.map((cat) => (
                   <Card key={cat.id} cat={cat}></Card>
                ))
            }
        </section>
    )
}

export default FeedPage