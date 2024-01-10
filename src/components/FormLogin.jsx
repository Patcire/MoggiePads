import {useContext, useState} from "react";
import {UserContext} from "/src/context/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import {showModalError, validateEmails, validatePassword} from "/src/functions/Validations.js"
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


    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInfoUser({
                ...infoUser,
                [name]: value
            }
        )
    }

    const validateField = (e) => {
        e.preventDefault()
        handleChange(e)

        if (e.target.name === "email") {
            setError({
                ...error,
                emailError: !validateEmails(e.target.value) ? "Introduzca un email válido" : ""
            })
        }

        if (e.target.name === "password") {
            setError({
                ...error,
                passwordError: !validatePassword(e.target.value) ? "La contraseña debe tener al menos 8 caracteres" : ""
            })
        }



    }

    const notValidLogInForm = () => {
        return (error.emailError || error.passwordError || !infoUser.email || !infoUser.password)

    }

    const logIn = (e) => {
        e.preventDefault()
        if (notValidLogInForm()) {
            showModalError("error", "Ooops", "There is an error in the form, fix it!")
            return
        }
        checkUser(infoUser) ?
            setUser({

                connected: true,
                email: infoUser.email

            })
            :
            showModalError("error", "User and Password doesn't match",
            "Check your data!")

        navigate("/feed")

    }


    return (
        <form className={"form"}>

            <h1 className={"form__h1"}>Login</h1>

            <input
                type={"text"}
                placeholder={"Escriba su correo"}
                name={"email"}
                className={"form__input"}
                value={infoUser.email}
                onChange={validateField}
                onBlur={validateField}>

            </input>
            {error.emailError && <p className={"error__p"}>{error.emailError}</p>}
            <input
                type={"email"}
                placeholder={" Escriba su contraseña"}
                name={"password"}
                className={"form__input--password"}
                autoComplete={"off"}
                value={infoUser.password}
                onChange={validateField}
                onBlur={validateField}>

            </input>
            {error.passwordError && <p className={"error__p"}>{error.passwordError}</p>}

            <button className={"form__button"} onClick={logIn}>Entrar</button>

        </form>
    )
}
export default FormLogin
