import {useContext} from "react";
import {UserContext} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import FormRegister from "../components/FormRegister.jsx";


const RegisterPage = () => {



    return(
       <FormRegister></FormRegister>
    )
}

export default RegisterPage