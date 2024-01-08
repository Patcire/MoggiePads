import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import {showModalError, validateEmails, validatePassword, validateStrings} from "../functions/Validations.js";

const FormRegister = () => {

    const {user, setUser} = useContext(UserContext)
    const [infoUser, setInfoUser] = useState({

        name:"",
        lastname:"",
        email:"",
        password:""
    })

    const [error, setError] = useState({
        nameError:"",
        lastnameError:"",
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

        if (e.target.name === "name") {
            setError({
                ...error,
                nameError: !validateStrings(e.target.value) ? "Este campo no puede tener menos de 4 caracteres" : ""
            })
        }

        if (e.target.name === "lastname") {
            setError({
                ...error,
                lastnameError: !validateStrings(e.target.value) ? "Este campo no puede tener menos de 4 caracteres" : ""
            })
        }


    }

    const notValidRegisterForm = () => {
        return (error.emailError || error.passwordError || error.nameError || error.lastnameError  || !infoUser.email || !infoUser.password ||
            !infoUser.name || !infoUser.password)
    }

    const register = (e) => {
        e.preventDefault()
        if (notValidRegisterForm()) {
            showModalError("error", "Ooops", "There is an error in the form, fix it!")
            return
        }
        setUser(true)
        navigate("/feed")

    }


    return (
        <form className={"form"}>

            <h1 className={"form__h1"}>Register</h1>

            <input
                type={"text"}
                placeholder={"Escriba su nombre"}
                name={"name"}
                className={"form__input"}
                onChange={validateField}
                onBlur={validateField}
            >
            </input>
            {error.nameError && <p className={"error__p"}>{error.nameError}</p>}

            <input
                type={"text"}
                placeholder={"Escriba sus apellidos"}
                name={"lastname"}
                className={"form__input"}
                onChange={validateField}
                onBlur={validateField}
            >
            </input>
            {error.lastnameError && <p className={"error__p"}>{error.lastnameError}</p>}

            <input
                type={"text"}
                placeholder={"Escriba su correo"}
                name={"email"}
                className={"form__input"}
                onChange={validateField}
                onBlur={validateField}
            >
            </input>
            {error.emailError && <p className={"error__p"}>{error.emailError}</p>}

            <input
                type={"text"}
                placeholder={" Escriba su contraseña"}
                name={"password"}
                className={"form__input--password"}
                autoComplete={"off"}
                onChange={validateField}
                onBlur={validateField}
            >
            </input>
            {error.passwordError && <p className={"error__p"}>{error.passwordError}</p>}

            <button className={"form__button"} onClick={register}>Registrarse</button>

        </form>
    )
}
export default FormRegister
