
import { Outlet } from 'react-router-dom'
import Header from "../04 - components-multi/Header.jsx";


const LayoutRoot = () => {
    return (
        <>
            <Header></Header>
            < Outlet />
        </>
    )
}

export default LayoutRoot