import React from "react";
import NavBar from "../molecules/nav_bar";
import FindOutMoreButton from "../atoms/FindOutMoreButton";
import PlayDemoButton from "../atoms/PlayDemoButton";

function HomePage (){
    return(
        <>
            <NavBar />
            <div style={{width: "1200.87px", height : "764px", top : "105px", left : "148px"}}>
                <p style={{fontSize : "20px", fontWeight : "700" , fontFamily : "sans-serif", lineHeight : "100%" , 
                    textTransform : "uppercase", color : "#DF6951", width : "410px", height : "30px", top : "217px", 
                    left : "150px"}}>
                    Best Destinations around the world
                </p>
                <p style={{fontSize : "84px", fontWeight : "700", lineHeight : "89px", letterSpacing : "-4%", width : "545px",
                    height : "267px" , top : "271px" , left : "150px" , color : "#181E4B"
                }}>
                    Travel,enjoy and live a new and full life
                </p>
                <p style={{fontWeight : "400", fontSize : "16px", lineHeight : "30px", letterSpacing : "0%", color : "#5E6282",
                    width : "477px", height : "90px" , top : "568px" , left : "148px"
                }}>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </p>
                <FindOutMoreButton />
                <PlayDemoButton />
            </div>
        </>
    );
};

export default HomePage;