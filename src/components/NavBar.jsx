import {NavLink, useNavigate} from 'react-router-dom'
import {useContext} from "react";
import {UserConnectedContext} from "../context/UserConnectedContext.jsx";


const Navbar = () => {

    const {userConnected, setUserConnected} = useContext(UserConnectedContext)


    const navigate = useNavigate()

    const logOut = () => {
        setUserConnected({
            connected:false,
            email:""
        })
        navigate("/")
    }


    return (

                userConnected.connected ?
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