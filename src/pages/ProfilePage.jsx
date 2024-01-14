import {getUserInSession} from "../functions/localStorage.js";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
import Card from "../components/Card.jsx";
import Gallery from "../components/Gallery.jsx";

const ProfilePage = () => {

    const {user} = useContext(UserContext)
    const infoUser = getUserInSession(user.email)

    return(
       <section className={"profile"}>
           <article className={"profile__card"}>

               <img alt={"draw of cat"} src={"resources/cat-icon.png"}
                    className={"profile__card__img"}></img>

               <article className={"profile__card__container"}>
                   <p className={"profile__card__p"}> <strong>Nombre</strong>: {infoUser.name} </p>
                   <p className={"profile__card__p"}> <strong>Apellidos</strong>: {infoUser.lastname} </p>
                   <p className={"profile__card__p"}> <strong>Correo</strong>: {infoUser.email} </p>
               </article>
           </article>

           {
               (infoUser.favs.length) ?
                   <Gallery info={infoUser.favs} alreadyFav={true}></Gallery>
                   //infoUser.favs.map(cat => <Card key={cat.id} cat={cat} loading="lazy" alreadyFav={true}></Card>)
                   :
                   <article className={"profile__favs__nofavs"}>
                       <h1 className={"profile__favs__h1"}>Todavía no tienes favoritos :(</h1>
                   </article>

           }


       </section>
    )
}

export default ProfilePage
