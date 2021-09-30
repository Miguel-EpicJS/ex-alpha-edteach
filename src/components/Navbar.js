
import { Link } from "react-router-dom";
import { router } from "../router";

import {
    NavMenuStyle,
    UlMenuStyle,
    LiMenuStyle,
    LinkMenuStyle,
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
                                <LiMenuStyle>
                                    <LinkMenuStyle>
                                        <Link
                                            className="nav-link active"
                                            aria-current="page"
                                            to={route.path}
                                        >
                                            {<route.icon color="#4B5C6B" />}
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