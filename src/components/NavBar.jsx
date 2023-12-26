import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {


    const navigate = useNavigate()



    return (
        <nav>
            <button onClick={()=> navigate("/login")}>Login</button>
            <button onClick={()=> navigate("/register")}>Registrarse</button>
            <button onClick={()=> navigate("/feed")}>Feed</button>
            <button onClick={()=> navigate("/profile")}>Mi Perfil</button>
            <button onClick={()=> navigate("/anecdotes")}>Anecdotas</button>
            <button onClick={()=> navigate("/contact")}>Contacto</button>
        </nav>

    )
}

export default Navbar