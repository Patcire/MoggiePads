import {useEffect, useRef, useState} from "react";
import {showModal, validateField} from "../functions/Validations.js";

const FormContact = () => {

    const inputRef = useRef(null)
    const [infoUser, setInfoUser] = useState({

        date:"",
        number:"",
        message:""
    })

    const [error, setError] = useState({
        dateError:"",
        numberError:"",
        messageError:"",
        checkboxError:""

    })



    const notValidContactForm = () =>{
        return (error.dateError || error.numberError || error.messageError || error.checkboxError ||
            !infoUser.date || !infoUser.number ||
            !infoUser.message)


    }

    const cleanForm = () => {
        setInfoUser({
            date:"",
            number:"",
            message:""
        })
        console.log('cleaned')
    }

    const handleClick = (e) =>{
       e.preventDefault()
        if (notValidContactForm()){
            showModal("error", "Ooops", "There is an error in the form, fix it!")
            return
        }
        showModal("success", "All correct!", "We'll read your message as soon as possible")
        cleanForm()

    }

    useEffect(() => {
        inputRef.current.focus()
    }, []);


    return (
        <form className={"form"}>

            <h1 className={"form__h1"}>Contacto</h1>

            <label>
                Fecha de nacimiento
            </label>
            <input
                type={"date"}
                name={"date"}
                className={"form__input--date"}
                value={infoUser.date}
                ref={inputRef}
                onChange={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
                onBlur={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}>
            </input>
            {error.dateError && <p className={"error__p"}>{error.dateError}</p>}

            <label>
                Seleccione su grado de satisfacción (1-5)
            </label>
            <input
                type={"number"}
                name={"number"}
                className={"form__input--number"}
                min={"1"}
                max={"5"}
                value = {infoUser.number}
                onChange={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
                onBlur={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}>
            </input>
            {error.numberError && <p className={"error__p"}>{error.numberError}</p>}


            <textarea
                id="message" name="message" rows="4" cols="50"
                minLength="10" maxLength="100"
                placeholder={"Escriba aquí su mensaje"}
                value = {infoUser.message}
                onChange={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
                onBlur={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
            >
            </textarea>
            {error.messageError && <p className={"error__p"}>{error.messageError}</p>}


            <article className={"laber-checkbox--container"}>
                <label className={"label--checkbox"}>
                    Aceptar política de datos
                </label>
                <input
                    type={"checkbox"}
                    name={"checkbox"}
                    className={"form__input"}
                    onBlur={(e)=> validateField(e,setInfoUser, infoUser, setError, error)}
                >
                </input>
            </article>
            {error.checkboxError && <p className={"error__p"}>{error.checkboxError}</p>}


            <button className={"form__button"} onClick={handleClick}>Enviar</button>

        </form>
    )
}
export default FormContact
