import {useEffect, useRef, useState} from "react";
import {cleanForm, notValidForm, showModal, validateField} from "../functions/Validations.js";

const FormContact = () => {

    const inputRef = useRef(null)
    const [infoForm, setInfoForm] = useState({

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


    const handleClick = (e) =>{
       e.preventDefault()
        if (notValidForm(error, infoForm)){
            showModal("error", "Ooops", "¡Hay algún error en el formulario!")
            return
        }
        showModal("success", "Gracias por contactar", "Le contestaremos lo antes posible")
        cleanForm(setInfoForm)

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
                value={infoForm.date}
                ref={inputRef}
                onChange={(e)=> validateField(e,setInfoForm, infoForm, setError, error)}
                onBlur={(e)=> validateField(e,setInfoForm, infoForm, setError, error)}>
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
                value = {infoForm.number}
                onChange={(e)=> validateField(e,setInfoForm, infoForm, setError, error)}
                onBlur={(e)=> validateField(e,setInfoForm, infoForm, setError, error)}>
            </input>
            {error.numberError && <p className={"error__p"}>{error.numberError}</p>}


            <textarea
                id="message" name="message" rows="4" cols="50"
                minLength="10" maxLength="100"
                placeholder={"Escriba aquí su mensaje"}
                value = {infoForm.message}
                onChange={(e)=> validateField(e,setInfoForm, infoForm, setError, error)}
                onBlur={(e)=> validateField(e,setInfoForm, infoForm, setError, error)}
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
                    onBlur={(e)=> validateField(e,setInfoForm, infoForm, setError, error)}
                >
                </input>
            </article>
            {error.checkboxError && <p className={"error__p"}>{error.checkboxError}</p>}


            <button className={"form__button"} onClick={handleClick}>Enviar</button>

        </form>
    )
}
export default FormContact
