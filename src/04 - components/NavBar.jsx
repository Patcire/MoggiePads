import {NavLink, useNavigate} from 'react-router-dom'
import {useContext} from "react";
import {UserConnectedContext} from "../05 - context/UserConnectedContext.jsx";


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
                        <NavLink to={"/feed"}>Fotos</NavLink>
                        <NavLink to={"/contact"}>Contacto</NavLink>
                        <button className={"logout"} onClick={() => logOut()}>Salir</button>
                    </nav>

                ) : (
                    <nav className={"header__navbar"}>
                        <NavLink to={"/"}>Inicio</NavLink>
                        <NavLink to={"/login"}>Entrar/Registrarse</NavLink>
                        <NavLink to={"/contact"}>Contacto</NavLink>

                    </nav>

                )




    )
}

export default Navbar