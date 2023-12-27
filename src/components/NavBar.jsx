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
        <nav>
            {
                user ?
                    (
                        <>
                            <button onClick={() => navigate("/")}>Inicio</button>
                            <button onClick={() => navigate("/profile")}>Mi Perfil</button>
                            <button onClick={() => navigate("/feed")}>Feed</button>
                            <button onClick={() => navigate("/anecdotes")}>Anecdotas</button>
                            <button onClick={() => navigate("/contact")}>Contacto</button>
                            <button onClick={() => logOut()}>Logout</button>
                        </>

                    ) : (
                        <>
                            <button onClick={() => navigate("/")}>Inicio</button>
                            <button onClick={() => navigate("/login")}>Login/Registro</button>
                            <button onClick={() => navigate("/feed")}>Feed</button>
                            <button onClick={() => navigate("/anecdotes")}>Anecdotas</button>
                            <button onClick={() => navigate("/contact")}>Contacto</button>

                        </>

                    )
            }

        </nav>

    )
}

export default Navbar