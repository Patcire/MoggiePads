import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";

const FormLogin = () => {

    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const logIn = () => {
        setUser(true)
        navigate("/")

    }


    return (
        <form className={"form"}>
            <h1 className={"form__h1"}>Login</h1>
            <input type={"text"} placeholder={"Escriba su correo"} name={"email"}
                   className={"form__input"}></input>
            <input type={"email"} placeholder={" Escriba su contraseña"} name={"password"}
                   className={"form__input--password"} autoComplete={"off"} ></input>
            <button className={"form__button"} onClick={logIn}>Entrar</button>
        </form>
    )
}
export default FormLogin
