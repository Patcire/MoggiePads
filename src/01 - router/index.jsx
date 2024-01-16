import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../02 - layouts/LayoutRoot.jsx";
import LoginPage from "../03 - pages/LoginPage.jsx";
import RegisterPage from "../03 - pages/RegisterPage.jsx";
import ContactPage from "../03 - pages/ContactPage.jsx";
import FeedPage from "../03 - pages/FeedPage.jsx";
import ProfilePage from "../03 - pages/ProfilePage.jsx";
import LandPage from "../03 - pages/LandPage.jsx";
import LayoutPrivate from "../02 - layouts/LayoutPrivate.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot />,
        children: [
            {
                index:true,
                path: "/",
                element: < LandPage />,
            },
            {
                path: "/login",
                element: < LoginPage />,

            },

            {
                path: "/contact",
                element: < ContactPage />,
            },
            {
                path: "/feed",
                element: < LayoutPrivate />,
                children: [
                    {
                        index: true,
                        element: <FeedPage></FeedPage>
                    }
                ]
            },
            {
                path: "/profile",
                element: < LayoutPrivate />,
                children: [
                    {
                        index:true,
                        element: <ProfilePage></ProfilePage>
                    }
                ]
            },

            {
                path: "/register",
                element: < RegisterPage />,
            },

        ],
    },
])