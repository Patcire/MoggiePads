import {deleteFav, saveFav} from "../functions/localStorage.js";
import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";
import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const LikeButton = ({cat, alreadyFav}) => {

    const {user} = useContext(UserContext)

    const [icon, setIcon] = useState(!!alreadyFav)

    const handleClick = () => {
        if (!icon) {
            saveFav(cat, user.email)
            setIcon(!icon)
            return
        }

        deleteFav(cat, user.email)
        setIcon(!icon)
    }


    return (
        <button className={"like-button"} onClick={handleClick}>
            {
                icon ?  <IoMdHeart color="da376d" size={30}></IoMdHeart> : <CiHeart size={20}></CiHeart>
            }
        </button>
    )
}
export default LikeButton
