
import { Outlet } from 'react-router-dom'
import Navbar from "../components/NavBar.jsx";


const LayoutRoot = () => {
    return (
        <>
            <Navbar></Navbar>
            < Outlet />
        </>
    )
}

export default LayoutRoot