import react from "react"
import { Home } from './home';

import "./navbar.css"

import { Fade } from "react-reveal";

export const NavBar=()=>{





    return <div className="navbar__main">
        <ul className="navbar__options">
        
        <Fade top>
        <li className="nav__item" type="none">HOME</li>
        </Fade>

        <Fade top>
        <li className="nav__item" type="none">EDUCATION</li>
        </Fade>

        <Fade top>
        <li className="nav__item" type="none">ACHIEVEMENTS</li>
        </Fade>

        <Fade top>
        <li className="nav__item" type="none">HOBBIES</li>
        </Fade>

        <Fade top>
        <li className="nav__item" type="none">CONTACT</li>
        </Fade>
        
        </ul>

    
    
    </div>


}