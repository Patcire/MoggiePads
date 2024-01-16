
import { Outlet } from 'react-router-dom'
import Header from "../04 - components/Header.jsx";


const LayoutRoot = () => {
    return (
        <section>
            <Header></Header>
            < Outlet />
        </section>
    )
}

export default LayoutRoot