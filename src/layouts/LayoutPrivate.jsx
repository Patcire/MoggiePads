import {Navigate, Outlet} from 'react-router-dom'
import {UserConnectedContext} from "../context/UserConnectedContext.jsx";
import {useContext} from "react";



const LayoutPrivate = () => {

    const {userConnected} = useContext(UserConnectedContext)

    return (
        <>{
            userConnected.connected ? <Outlet></Outlet> : <Navigate to={"/"}></Navigate>
        }
        </>
    )
}

export default LayoutPrivate