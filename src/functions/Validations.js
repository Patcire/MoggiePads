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

export const showModalError = (icon, title, text) =>{
    Swal.fire({
        icon: icon,
        title: title,
        text: text
    })
}










