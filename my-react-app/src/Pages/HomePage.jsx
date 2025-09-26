import React from "react";
import NavBar from "../molecules/nav_bar";
import FindOutMoreButton from "../atoms/FindOutMoreButton";
import PlayDemoButton from "../atoms/PlayDemoButton";

function HomePage (){
    return(
        <>  
            <div className="HomePage" style={{width:"1440px",height:"4774px", backgroundColor:"#FFFFFF"}}>
                <nav>
                    <NavBar />
                </nav>
                <div className="Page1" style={{display : "flex", width : "1200.87px", height : "764px", marginTop : "18px", marginLeft: "148px"}}>
                    <div style={{width: "630px", height : "535px", marginTop : "112px", marginLeft : "0px"}}>
                        <p style={{fontSize : "20px", fontWeight : "700" , fontFamily : "Poppins, sans-serif", lineHeight : "100%" , 
                        textTransform : "uppercase", color : "#DF6951", width : "410px", height : "30px", marginTop: "112px", 
                        marginLeft : "2px"}}>
                        Best Destinations around the world
                        </p>
                        <p style={{fontSize : "84px", fontWeight : "700", lineHeight : "89px", letterSpacing : "-4%", width : "545px",
                        height : "267px" , marginTop : "24px" , marginLeft : "2px" , color : "#181E4B",fontFamily : "Volkhov, sans-serif"
                        }}>
                        Travel,enjoy and live a new and full life
                        </p>
                        <p style={{fontWeight : "400", fontSize : "16px", lineHeight : "30px", letterSpacing : "0%", color : "#5E6282",
                        width : "477px", height : "90px" , marginTop : "30px" , marginLeft : "0px" , fontFamily : "Poppins, sans-serif",
                        }}>
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                        </p>
                        <nav style={{display:"flex", width:"379px", height:"60px", marginTop:"34px", marginLeft:"0px"}}>
                            <FindOutMoreButton />
                            <PlayDemoButton />
                        </nav>
                    </div>
                    <div style={{position : "relative"}}>
                        <div style={{position : "absolute",width :"766.31px", height:"872.58px", marginTop:"-149px", marginLeft:"-12px", backgroundColor:"#FFF1DA", zIndex:"0"}}>
                            <img src="https://raw.githubusercontent.com/Santheepgokul24/Jadoo/main/my-react-app/public/images/Page_1.png" alt="image" style={{width:"765px",height:"764px",marginTop:"105px",
                              marginLeft:"-213px", position:"absolute",zIndex:"2"
                            }}/>
                        </div>
                    </div>
                    </div>
                </div>
                        <p style={{width:"98px", height:"27px",marginTop:"8px", marginLeft:"652px", fontFamily:"Poppins, sans-serif", fontWeight:"600", fontSize:"18px",
                        <p style={{width:"98px", height:"27px",marginTop:"8px", left:"652px", fontFamily:"Poppins, sans-serif", fontWeight:"600", fontSize:"18px",
                            lineHeight:"100%",letterSpacing:"0%",textAlign : "center", color : "#5E6282", marginLeft : "652px"
                        }}>CATEGORY</p>
                        <p style={{width:"547px",height:"65px",marginLeft:"428px", marginTop : "10px", fontFamily:"Volkhov, sans-serif", fontWeight:"700",
                            fontSize:"50px",lineHeight:"100%",letterSpacing:"0%", alignItems:"center", color :"#14183E"
                        }}>We Offer Best Services</p>
                        <div className="flexbox" style={{display:"flex"}}>
                            <div className="box1" style={{width:"190px",height:"227px",marginLeft:"154px", marginTop:"175px", borderRadius :"19px 5px 10px 5px"}}>
                                <p>Calculated Weather</p>
                                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                            </div>
                            <div className="box2" style={{width:"302px", height:"348.91px", marginLeft:"38px", marginTop:"132px"}}>
                                <p>Best Flights</p>
                                <p>Engrossed listening. Park gate sell they west hard for the.</p>
                            </div>
                            <div className="box3" style={{width:"181px", height:"229px", marginLeft:"80px", marginTop:"108px"}}>
                                <p>Local Events</p>
                                <p>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                            </div>
                            <div className="box4" style={{width:"181px", height:"216px", marginLeft:"131px", marginTop:"108px"}}>
                                <p>Customization</p>
                                <p>We deliver outsourced aviation services for military customers</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;