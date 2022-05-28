import react from "react"
import facebook from "../Assets/Images/facebook.png"
import youtube from "../Assets/Images/youtube.png"
import instagram from "../Assets/Images/instagram.png"


import "./footer.css"

export const Footer=()=>{



    return <div className="footer__main">

        <div className="footer__content">
            <h1>Contact</h1>
            <p>rachel.green@gmail.com</p>
        <div className="social">
            <img src={instagram}/>
            <img src={youtube}/>
            <img src={facebook}/>

        </div>


     
        </div>
    
        <p className="tagline">All Rights Reserved</p>
    
    
    </div>
}