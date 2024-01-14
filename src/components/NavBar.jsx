import {NavLink, useNavigate} from 'react-router-dom'
import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";


const Navbar = () => {

    const {user, setUser} = useContext(UserContext)


    const navigate = useNavigate()

    const logOut = () => {
        setUser(false)
        navigate("/")
    }


    return (

                user ?
                    (
                        <nav className={"header__navbar"}>
                            <NavLink to={"/"}>Inicio</NavLink>
                            <NavLink to={"/profile"}>MiPerfil</NavLink>
                            <NavLink to={"/feed"}>Feed</NavLink>
                            <NavLink to={"/contact"}>Contacto</NavLink>
                            <button className={"logout"} onClick={() => logOut()}>Logout</button>
                        </nav>

                    ) : (
                        <nav className={"header__navbar"}>
                            <NavLink to={"/"}>Inicio</NavLink>
                            <NavLink to={"/login"}>Login/Registro</NavLink>
                            <NavLink to={"/contact"}>Contacto</NavLink>

                        </nav>

                    )




    )
}

export default Navbar