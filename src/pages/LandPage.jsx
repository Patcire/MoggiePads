import useSinglePhoto from "../customHooks/useSinglePhoto.js";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const LandPage = () => {

    const {photo, loadOnePhoto} = useSinglePhoto()
    const navigate = useNavigate()

    return(
        <section className={"section--landpage"}>

            <article className={"article-login"}>
                <h1 className={"section__h1--landpage"}> M o g g i e P a d s</h1>

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

                <img alt={"cat photo"} src={photo}
                     className={"img--landpage--v2"}></img>
                <button className={"primary-button--v2"} onClick={loadOnePhoto}>New cat</button>
                <button className={"primary-button--v3"}  onClick={() =>navigate("/register")}>REGISTER NOW!!!</button>

            </article>
        </section>


    )
}

export default LandPage