import {useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "/src/context/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import {showModal, validateField} from "/src/functions/Validations.js"
import {checkUser} from "../functions/localStorage.js";

const FormLogin = () => {

    const {user, setUser} = useContext(UserContext)
    const [infoUser, setInfoUser] = useState({
        email:"",
        password:""
    })
    const [error, setError] = useState({
        emailError:"",
        passwordError: ""
    })

    const navigate = useNavigate()
    const inputRef = useRef(null)


    const notValidLogInForm = () => {
        return (error.emailError || error.passwordError || !infoUser.email || !infoUser.password)

    }

    const logIn = (e) => {
        e.preventDefault()
        if (notValidLogInForm()) {
            showModal("error", "Ooops", "There is an error in the form, fix it!")
            return
        }
        checkUser(infoUser) ?
            setUser({

                connected: true,
                email: infoUser.email

            })
            :
            showModal("error", "User and Password doesn't match",
            "Check your data!")

        navigate("/feed")

    }

    useEffect(() => {
        inputRef.current.focus()
    }, []);

    return (
        <form className={"form"}>

            <h1 className={"form__h1"}>Login</h1>

            <input
                type={"text"}
                placeholder={"Escriba su correo"}
                name={"email"}
                className={"form__input"}
                value={infoUser.email}
                ref={inputRef}
                onChange={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
                onBlur={(e)=>validateField(e,setInfoUser, infoUser, setError, error)}>

            </input>
            {error.emailError && <p className={"error__p"}>{error.emailError}</p>}
            <input
                type={"email"}
                placeholder={" Escriba su contraseña"}
                name={"password"}
                className={"form__input--password"}
                autoComplete={"off"}
                value={infoUser.password}
                onChange={(e)=> validateField(e, setInfoUser, infoUser, setError, error)}
                onBlur={(e)=> validateField(e, setInfoUser, infoUser, setError, error)}>

            </input>
            {error.passwordError && <p className={"error__p"}>{error.passwordError}</p>}

            <button className={"form__button"} onClick={logIn}>Entrar</button>

        </form>
    )
}
export default FormLogin
