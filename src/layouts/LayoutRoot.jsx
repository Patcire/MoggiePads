
import { Outlet } from 'react-router-dom'
import Navbar from "../components/NavBar.jsx";


const LayoutRoot = () => {
    return (
        <>
            < Outlet />
            <Navbar></Navbar>
        </>
    )
}

export default LayoutRoot