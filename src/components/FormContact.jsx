import {useEffect, useRef, useState} from "react";
import {showModalError, validateDate} from "../functions/Validations.js";

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

        if (e.target.name === "date") {
            setError({
                ...error,
                dateError: !validateDate(e.target.value) ? "Su edad debe estar entre los 10-100 años" : ""
            })
        }

        if (e.target.name === "number") {
            setError({
                ...error,
                numberError: e.target.value>5 || e.target.value<1 ? "Mín 1 - Máx 5" : ""
            })
        }

        if (e.target.name === "message"){
            setError({
                ...error,
                messageError: e.target.value.trim().length<1 ? "Escriba su mensaje" : ""
            })
        }

        if (e.target.name === "checkbox"){
            setError({
                ...error,
                checkboxError: !e.target.checked ? "Acepte la política de datos" : ""
            })
        }





    }

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
            showModalError("error", "Ooops", "There is an error in the form, fix it!")
            return
        }
        showModalError("success", "All correct!", "We'll read your message as soon as possible")
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
                onChange={validateField}
                onBlur={validateField}>
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
                onChange={validateField}
                onBlur={validateField}>
            </input>
            {error.numberError && <p className={"error__p"}>{error.numberError}</p>}


            <textarea
                id="message" name="message" rows="4" cols="50"
                minLength="10" maxLength="100"
                placeholder={"Escriba aquí su mensaje"}
                value = {infoUser.message}
                onChange={validateField}
                onBlur={validateField}
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
                    onBlur={validateField}
                >
                </input>
            </article>
            {error.checkboxError && <p className={"error__p"}>{error.checkboxError}</p>}


            <button className={"form__button"} onClick={handleClick}>Enviar</button>

        </form>
    )
}
export default FormContact
