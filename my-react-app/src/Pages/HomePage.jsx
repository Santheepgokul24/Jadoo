import React from "react";
import NavBar from "../molecules/nav_bar";
import FindOutMoreButton from "../atoms/FindOutMoreButton";
import PlayDemoButton from "../atoms/PlayDemoButton";

function HomePage (){
    return(
        <>
            <NavBar />
            <div style={{display : "flex"}}>
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
            <div style={{width :"766.31px", height:"872.58px", top:"-149px", left:"736px", backgroundColor:"#FFF1DA"}}>
            <img src="https://raw.githubusercontent.com/Santheepgokul24/Jadoo/main/my-react-app/public/images/Page_1.png" alt="image" />
            </div>
            </div>
        </>
    );
};

export default HomePage;