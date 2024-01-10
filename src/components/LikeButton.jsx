import {getUserInSession, saveFav} from "../functions/localStorage.js";
import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";

const LikeButton = ({cat}) => {

    const {user, setUser} = useContext(UserContext)
    const handleClick = () => {
        saveFav(cat, user.email)
    }

    return (
        <button className={"like-button"} onClick={handleClick}>
            <span className={"heart"}></span>
        </button>
    )
}
export default LikeButton
