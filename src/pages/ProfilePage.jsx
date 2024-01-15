import {getUserInSession} from "../functions/localStorage.js";
import {useContext} from "react";
import {UserConnectedContext} from "../context/UserConnectedContext.jsx";
import Gallery from "../components/Gallery.jsx";

const ProfilePage = () => {

    const {userConnected} = useContext(UserConnectedContext)
    const infoUser = getUserInSession(userConnected.email)

    return(
        <section className={"profile"}>

            <section className={"profile__banner"}>
                <h3 className={"profile__h3"}> Mis favoritos</h3>
                <article className={"profile__card"}>

                    <img alt={"draw of cat"} src={"resources/cat-icon.png"}
                         className={"profile__card__img"}></img>

                    <article className={"profile__card__container"}>
                        <p className={"profile__card__p"}><strong>Nombre</strong>: {infoUser.name} </p>
                        <p className={"profile__card__p"}><strong>Apellidos</strong>: {infoUser.lastname} </p>
                        <p className={"profile__card__p"}><strong>Correo</strong>: {infoUser.email} </p>
                    </article>

                </article>

            </section>
            {
                (infoUser.favs.length) ?
                    <Gallery info={infoUser.favs} alreadyFav={true}></Gallery>
                    :
                    <article className={"profile__favs__nofavs"}>
                        <h1 className={"profile__favs__h1"}>Todavía no tienes favoritos :(</h1>
                    </article>

            }


        </section>
    )
}

export default ProfilePage
