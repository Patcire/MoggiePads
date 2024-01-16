import useFreeCallAPI from "../06 - customHooks/useFreeCallAPI.js";
import Toast from "../04 - components/Toast.jsx";
import {useState} from "react";

const LandPage = () => {

    const {photo, loadOnePhoto} = useFreeCallAPI()
    const [showToast, setShowToast]  = useState(true)

    setTimeout(()=> {

    setShowToast(false)

    }, 10000)



    return(

        <section className={"landpage"}>

            <article className={"landpage__article"}>
                <h1 className={"landpage__article__h1"}> M o g g i e P a d s</h1>

                <h1 className={"landpage__article__h1--v2"}>La mejor web de gatos</h1>
                <p className={"landpage__article__p"}>
                    ¡Miles de fotos,
                    algunos pequeños datos y poco más!

                </p>

            </article>


            <article className={"landpage__article--v2"}>

                <img alt={"cat photo"} src={photo}
                     className={"landpage__article__img"} onClick={loadOnePhoto}></img>

            </article>

            {showToast && <Toast message={" ¡Registrate para más diversión :) !"}></Toast>}
            <img alt={"cat ears"}
                 src={"resources/jack-dong-yJozLVBxNA0-unsplash-mod-removebg-preview.jpg"}
                 className={"landpage__article__img--detail"}></img>


        </section>


    )
}

export default LandPage