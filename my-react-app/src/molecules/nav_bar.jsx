import React from "react";
import SignUpButton from "../atoms/SignupButton";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <ul style={{listStyleType : "none", display : "flex"}}>
                <li><Link to="/" style={{textDecoration : "none", width : "114.91px", height:"33.99px", top:"48.7px", 
                    left:"140.92px"}}>
                        <img src="https://raw.githubusercontent.com/Santheepgokul24/Jadoo/blob/main/my-react-app/public/images/Top Nav.png" alt="Jadoo"></img></Link></li>
                <li><Link to="/Destinations" style={{width:"100px",height:"22px",top:"56px",left:"478px",fontFamily:"sans-serif",
                    fontWeight:"400",fontSize:"17px",lineHeight:"100%",letterSpacing:"0%",textDecoration:"none"}}>
                        Destinations</Link></li>
                <li><Link to="/Hotels" style={{width:"51px",height:"22px",top:"56px",left:"633px",fontFamily:"sans-serif",
                    fontWeight:"400",fontSize:"17px",lineHeight:"100%",letterSpacing:"0%"}}>
                        Hotels</Link></li>
                <li><Link to="/Flights">Flights</Link></li>
                <li><Link to="/Bookings">Bookings</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><SignUpButton /></li>
            </ul>
        </nav>
    )
}

export default NavBar;