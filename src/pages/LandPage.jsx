import useSinglePhoto from "../customHooks/useSinglePhoto.js";
import {useNavigate} from "react-router-dom";

const LandPage = () => {

    const {photo, loadOnePhoto} = useSinglePhoto()
    const navigate = useNavigate()

    return(
        <section className={"landpage"}>

            <article className={"landpage__article"}>
                <h1 className={"landpage__article__h1"}> M o g g i e P a d s</h1>

                <h1 className={"landpage__article__h1--v2"}>La mejor web de gatos</h1>
                <p className={"landpage__article__p"}>
                    ¡Miles de fotos,
                    anécdotas, curiosidades y poco más!

                </p>

            </article>


            <article className={"landpage__article--v2"}>

                <img alt={"cat photo"} src={photo}
                     className={"landpage__article__img"} onClick={loadOnePhoto}></img>
                <article className={"landpage__article__buttons-container"}>
                    <button className={"primary-button--v3"} onClick={() => navigate("/register")}>Register now!!!
                    </button>
                </article>

            </article>

            <img alt={"cat ears"}
                 src={"resources/jack-dong-yJozLVBxNA0-unsplash-mod-removebg-preview.png"}
                 className={"landpage__article__img--detail"}></img>

        </section>


    )
}

export default LandPage