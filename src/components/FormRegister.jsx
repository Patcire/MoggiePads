import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";

const FormRegister = () => {

    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const register = () => {
        setUser(true)
        navigate("/feed")

    }

    return (
        <form className={"form"}>

            <h1 className={"form__h1"}>Register</h1>

            <input type={"text"} placeholder={"Escriba su nombre"} name={"name"}
                   className={"form__input"} id={"name-login"}></input>

            <input type={"text"} placeholder={"Escriba sus apellidos"} name={"lastname"}
                   className={"form__input"}></input>

            <input type={"text"} placeholder={"Escriba su correo"} name={"email"}
                   className={"form__input"}></input>

            <input type={"text"} placeholder={" Escriba su contraseña"} name={"password"}
                   className={"form__input--password"} autoComplete={"off"}></input>

            <input type={"text"} placeholder={" Repita su contraseña"} name={"password2"}
                   className={"form__input--password"} autoComplete={"off"}></input>

            <button className={"form__button"} onClick={register}>Registrarse</button>

        </form>
    )
}
export default FormRegister
