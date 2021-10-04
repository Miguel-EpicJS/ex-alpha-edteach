import {BsCardImage} from "react-icons/bs"
import {IoMdCart} from "react-icons/io"
import {FaUserCircle} from "react-icons/fa"

import {Movies} from "./components/Movies/Movies"
import {Checkout} from "./pages/Checkout"
import {MovieDetails} from "./pages/MovieDetails"
import LoginForm from "./pages/Login"
import {User} from "./pages/User"

export const router = [
    {
        path: "/",
        component: LoginForm,
        isVisible: false,
    },
    {
        path: "/movies/:id",
        component: MovieDetails,
        isVisible: false,
    },
    {
        path: "/movies",
        component: Movies,
        isVisible: true,
        icon: BsCardImage,
    },
    {
        path: "/checkout",
        component: Checkout,
        isVisible: true,
        icon: IoMdCart,
    },
    {
        path: "/user",
        component: User,
        isVisible: true,
        icon: FaUserCircle,
    },
];

export const LoginRouterComponent = router[0];