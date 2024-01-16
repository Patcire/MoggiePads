import {useNavigate} from "react-router-dom";
import FormLogin from "../04 - components/FormLogin.jsx";

const LoginPage = () => {

    const navigate = useNavigate()

    return(
        <>
            <FormLogin></FormLogin>
            <article className={"article-login"}>
                <h3 className={"h3-custom"}>¿No estás registrado?</h3>
                <button onClick={() => navigate("/register")} className={"primary-button"}>Registrarse</button>
            </article>

        </>
    )
}

export default LoginPage