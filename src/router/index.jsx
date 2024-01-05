import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layouts/LayoutRoot.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import FeedPage from "../pages/FeedPage.jsx";
import AnecdotesPage from "../pages/AnecdotesPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import LandPage from "../pages/LandPage.jsx";
import LayoutPrivate from "../layouts/LayoutPrivate.jsx";

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
                path: "/anecdotes",
                element: < AnecdotesPage />,
            },
            {
                path: "/register",
                element: < RegisterPage />,
            },

        ],
    },
])