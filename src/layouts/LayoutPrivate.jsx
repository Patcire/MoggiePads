import {Navigate, Outlet} from 'react-router-dom'
import {UserContext} from "../context/UserContext.jsx";
import {useContext} from "react";



const LayoutPrivate = () => {

    const {user, setUser} = useContext(UserContext)

    return (
        <>{
            user ? <Outlet></Outlet> : <Navigate to={"/"}></Navigate>
        }
            <Outlet></Outlet>
        </>
    )
}

export default LayoutPrivate