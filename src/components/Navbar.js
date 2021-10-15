
import { Link } from "react-router-dom";
import { router } from "../router";

import {
    NavMenuStyle,
    UlMenuStyle,
    LiMenuStyle,
    LinkMenuStyle,
    SupValue,
} from "../styles/navbar.component.style";

export default function Navbar() {
    
    return (
        <NavMenuStyle>
            <div>
                <UlMenuStyle>
                    {router
                        .filter((route) => route.isVisible)
                        .map((route) => {
                            return (
                                <LiMenuStyle key={route.path}>
                                    <LinkMenuStyle>
                                        <Link
                                            aria-current="page"
                                            style={{ textDecoration: "none" }}
                                            to={route.path}
                                        >
                                            {<route.icon color="#4B5C6B" />}
                                            {route.showCart === true ? <SupValue>{JSON.parse(localStorage.getItem("cartMovies")).length}</SupValue> : "" }
                                        </Link>
                                    </LinkMenuStyle>
                                </LiMenuStyle>
                            );
                        })}
                </UlMenuStyle>
            </div>
        </NavMenuStyle>
    );
}