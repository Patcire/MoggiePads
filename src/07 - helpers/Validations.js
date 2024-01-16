import Swal from "sweetalert2";

export const validateStrings = (string) => {

     let resultOfValidation = true

    if (string.trim().length<4) {
        resultOfValidation = false
    }

    else if (!string.match('^[a-zA-Z]+$')){
        resultOfValidation = false
    }

    return resultOfValidation

}

export const validateEmails = (email) => {

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return email.match(regexEmail)

}

export const validatePassword = (pwd) => {

    return pwd.trim().length >= 8;

}


export const validateDate = (date) => {

    const year = date.split("-")[0]

    return year<2014 && year>1914

}

export const handleChange = (e, setInfoUser, infoUser) => {

    e.preventDefault()
    const {name, value} = e.target

    setInfoUser({
            ...infoUser,
            [name]: value
    })

}

export const validateField = (e, setInfoUser, infoUser, setError, error) => {

    e.preventDefault()
    handleChange(e, setInfoUser, infoUser)

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

    if (e.target.name === "date") {
        setError({
            ...error,
            dateError: !validateDate(e.target.value) ? "Su edad debe estar entre los 10-100 años" : ""
        })
    }

    if (e.target.name === "number") {
        setError({
            ...error,
            numberError: e.target.value > 5 || e.target.value < 1 ? "Mín 1 - Máx 5" : ""
        })
    }

    if (e.target.name === "message") {
        setError({
            ...error,
            messageError: e.target.value.trim().length < 1 ? "Escriba su mensaje" : ""
        })
    }

    if (e.target.name === "checkbox") {
        setError({
            ...error,
            checkboxError: !e.target.checked ? "Acepte la política de datos" : ""
        })
    }

    if (e.target.name === "name") {
        setError({
            ...error,
            nameError: !validateStrings(e.target.value) ? "Este campo no puede tener menos de 4 caracteres ni numeros" : ""
        })
    }

    if (e.target.name === "lastname") {
        setError({
            ...error,
            lastnameError: !validateStrings(e.target.value) ? "Este campo no puede tener menos de 4 caracteres" : ""
        })
    }

}

export const notValidForm = (error, infoUser) => {

    return  Object.values(error).some((value) => value.length>0) ||
        Object.values(infoUser).some((value) => !value)

}

export const cleanForm = (setInfoUser) => {
    setInfoUser({
        date:"",
        number:"",
        message:""
    })
}


export const showModal = (icon, title, text) =>{
    Swal.fire({
        icon: icon,
        title: title,
        text: text
    })
}










