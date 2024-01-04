import useSinglePhoto from "../customHooks/useSinglePhoto.js";
import {useEffect} from "react";

const LandPage = () => {

    const {photo, loadOnePhoto} = useSinglePhoto()

    useEffect(() => {
        loadOnePhoto()
    }, [])

    return(
        <section className={"section--landpage"}>

            <article className={"article-login"}>
                <h1 className={"section__h1--landpage"}> M o o g i e P a d s</h1>

                <h1 className={"section__h1--landpage--v2"}>La mejor web de gatos</h1>
                <p className={"section__p--landpage2"}>
                    ¡Miles de fotos,
                    anécdotas, curiosidades y poco más!

                </p>

                <img alt={"cat with sport clothes"}
                     src={"resources/jack-dong-yJozLVBxNA0-unsplash-mod-removebg-preview.png"}
                     className={"img--landpage"}></img>
            </article>


            <article className={"article--login2"}>

                <img alt={"cat photo"} src={"https://cdn2.thecatapi.com/images/dkh.jpg"}
                     className={"img--landpage--v2"}></img>
                <button className={"primary-button--v2"}>New cat</button>
                <button className={"primary-button--v3"}>REGISTER NOW!!!</button>

            </article>
        </section>


    )
}

export default LandPage