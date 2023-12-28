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
                        <nav className={"navbar"}>
                            <NavLink to={"/"}>Inicio</NavLink>
                            <NavLink to={"/profile"}>Mi Perfil</NavLink>
                            <NavLink to={"/feed"}>Feed</NavLink>
                            <NavLink to={"/anecdotes"}>Anecdotas</NavLink>
                            <NavLink to={"/contact"}>Contacto</NavLink>
                            <button onClick={() => logOut()}>Logout</button>
                        </nav>

                    ) : (
                        <nav className={"navbar"}>
                            <NavLink to={"/"}>Inicio</NavLink>
                            <NavLink to={"/login"}>Login/Registro</NavLink>
                            <NavLink to={"/feed"}>Feed</NavLink>
                            <NavLink to={"/anecdotes"}>Anecdotas</NavLink>
                            <NavLink to={"/contact"}>Contacto</NavLink>

                        </nav>

                    )




    )
}

export default Navbar