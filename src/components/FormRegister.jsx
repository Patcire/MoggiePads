import {useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import {notValidForm, showModal, validateField,} from "../functions/Validations.js";
import {saveUserInLocalStorage} from "../functions/localStorage.js";

const FormRegister = () => {

    const inputRef = useRef(null)
    const {user, setUser} = useContext(UserContext)
    const [infoUser, setInfoUser] = useState({

        name:"",
        lastname:"",
        email:"",
        password:"",
        favs:[]
    })

    const [error, setError] = useState({
        nameError:"",
        lastnameError:"",
        emailError:"",
        passwordError: ""

    })

    const navigate = useNavigate()


    const register = (e) => {
        e.preventDefault()
        if (notValidForm(error, infoUser)) {
            showModal("error", "Ooops", "¡Hay algún error en el formulario!")
            return
        }

        if (saveUserInLocalStorage("users", infoUser)){
            navigate("/feed")
            showModal("success", "Now you are register!", "enjoy!")
            setUser({
                connected: true,
                email: infoUser.email
            })
            return
        }

        showModal("error", "User already exist", "You must register with another email!")



    }


    useEffect(() => {
        inputRef.current.focus()
    }, []);

    return (
        <form className={"form"}>

            <h1 className={"form__h1"}>Register</h1>

            <input
                type={"text"}
                placeholder={"Escriba su nombre"}
                name={"name"}
                className={"form__input"}
                ref={inputRef}
                onChange={(e)=> validateField(e, setInfoUser, infoUser, setError, error)}
                onBlur={(e)=> validateField(e, setInfoUser, infoUser, setError, error)}
            >
            </input>
            {error.nameError && <p className={"error__p"}>{error.nameError}</p>}

            <input
                type={"text"}
                placeholder={"Escriba sus apellidos"}
                name={"lastname"}
                className={"form__input"}
                onChange={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
                onBlur={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
            >
            </input>
            {error.lastnameError && <p className={"error__p"}>{error.lastnameError}</p>}

            <input
                type={"text"}
                placeholder={"Escriba su correo"}
                name={"email"}
                className={"form__input"}
                onChange={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
                onBlur={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
            >
            </input>
            {error.emailError && <p className={"error__p"}>{error.emailError}</p>}

            <input
                type={"text"}
                placeholder={" Escriba su contraseña"}
                name={"password"}
                className={"form__input--password"}
                autoComplete={"off"}
                onChange={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
                onBlur={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
            >
            </input>
            {error.passwordError && <p className={"error__p"}>{error.passwordError}</p>}

            <button className={"form__button"} onClick={register}>Registrarse</button>

        </form>
    )
}
export default FormRegister
