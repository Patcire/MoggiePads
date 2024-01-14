import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Toast = ({message}) => {

    const navigate = useNavigate()

    return (

        <article className={"toast"}>
            <a className={"toast__p"} onClick={() => navigate("/register")}>{message}</a>
        </article>

    )
}

export default Toast
