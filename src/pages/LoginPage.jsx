import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const logIn = () => {
        setUser(true)
        navigate("/")

    }

    return(
        <>
            <h1>Login</h1>
            <button onClick={logIn}>Entrar</button>
            <h3>¿No estás registrado?</h3>
            <button onClick={()=>navigate("/register")}>Registrarse</button>
        </>
    )
}

export default LoginPage