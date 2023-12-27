import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";


const RegisterPage = () => {

    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const register = () => {
        setUser(true)
        navigate("/")

    }

    return(
        <button onClick={register}>Registrarse</button>
    )
}

export default RegisterPage