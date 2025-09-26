import React from "react";
import SignUpButton from "../atoms/SignupButton";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav style={{position:"absolute", zIndex: "1", marginTop : "47px",width:"1160.58px",height:"40px",marginLeft:"140.92px",border:"1px", color:"#212832"}}>
            <ul style={{listStyleType : "none", display : "flex" }}>
                <li><Link to="/" style={{textDecoration : "none", width : "114.91px", height:"33.99px", marginTop:"48.7px",fontSize : "18px",fontFamily:"Roboto, sans serif",
                    marginLeft:"0px", fontWeight : "900"}}>
                        Jadoo</Link></li>
                <li><Link to="/Destinations" className="nav-link" style={{width:"100px",height:"22px",marginTop:"56px",marginLeft:"222.17px"}}>
                        Destinations</Link></li>
                <li><Link to="/Hotels" className="nav-link" style={{width:"51px",height:"22px",marginTop:"56px",marginLeft:"55px"}}>
                        Hotels</Link></li>
                <li><Link to="/Flights" className="nav-link" style={{width:"53px",height:"22px",marginTop:"56px",marginLeft:"64px"}}>
                        Flights</Link></li>
                <li><Link to="/Bookings" className="nav-link" style={{width:"74px",height:"22px",marginTop:"56px",marginLeft:"62px"}}>Bookings</Link></li>
                <li><Link to="/Login" className="nav-link" style={{width:"44px",height:"22px",marginTop:"56px",marginLeft:"86px"}}>
                        Login</Link></li>
                <li><SignUpButton /></li>
                <li>EN</li>
            </ul>
        </nav>
    )
}

export default NavBar;