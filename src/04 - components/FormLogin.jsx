import {useContext, useEffect, useRef, useState} from "react";
import {UserConnectedContext} from "/src/05 - context/UserConnectedContext.jsx";
import {useNavigate} from "react-router-dom";
import {notValidForm, showModal, validateField} from "/src/07 - helpers/Validations.js"
import {checkUserCredentials} from "../07 - helpers/localStorage.js";

const FormLogin = () => {

    const {setUserConnected} = useContext(UserConnectedContext)

    const [infoForm, setInfoForm] = useState({
        email:"",
        password:""
    })

    const [error, setError] = useState({
        emailError:"",
        passwordError: ""
    })

    const navigate = useNavigate()
    const inputRef = useRef(null)

    const logIn = (e) => {
        e.preventDefault()

        if (notValidForm(error, infoForm)){
            showModal("error", "Ooops", "¡Hay algún error en el formulario!")
            return
        }

        else if(checkUserCredentials(infoForm)){

            setUserConnected({

                connected: true,
                email: infoForm.email

            })

            navigate("/feed")
            return
        }

        showModal("error", "Contraseña y correo no coinciden", "¡Vuelve a intentarlo!")

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
                value={infoForm.email}
                ref={inputRef}
                onChange={(e)=> validateField(e,setInfoForm, infoForm, setError, error)}
                onBlur={(e)=>validateField(e,setInfoForm, infoForm, setError, error)}
            >
            </input>
            {error.emailError && <p className={"error__p"}>{error.emailError}</p>}

            <input
                type={"email"}
                placeholder={" Escriba su contraseña"}
                name={"password"}
                className={"form__input--password"}
                autoComplete={"off"}
                value={infoForm.password}
                onChange={(e)=> validateField(e, setInfoForm, infoForm, setError, error)}
                onBlur={(e)=> validateField(e, setInfoForm, infoForm, setError, error)}
            >
            </input>
            {error.passwordError && <p className={"error__p"}>{error.passwordError}</p>}

            <button className={"form__button"} onClick={logIn}>Entrar</button>

        </form>
    )
}
export default FormLogin
