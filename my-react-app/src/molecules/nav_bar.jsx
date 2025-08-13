import React from "react";
import SignUpButton from "../atoms/SignupButton";

function NavBar(){
    return(
        <nav>
            <ul>
                <li><SignUpButton /></li>
            </ul>
        </nav>
    )
}

export default NavBar;