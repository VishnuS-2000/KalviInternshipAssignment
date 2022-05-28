

import "./navbar.css"

import { Fade } from "react-reveal";

import {Link} from "react-scroll"

export const NavBar=()=>{





    return <div className="navbar__main">
        <ul className="navbar__options">
        
        <Fade top>
        <Link activeClass="active" to="home" spy={true} smooth={true}  duration={500} >
        <li className="nav__item" type="none">HOME</li>
        </Link>
        </Fade>

        <Fade top>
        <Link activeClass="active" to="education" spy={true} smooth={true}  duration={500} >
        <li className="nav__item" type="none">EDUCATION</li>
        </Link>
        </Fade>

        <Fade top>
        <Link activeClass="active" to="achievements" spy={true} smooth={true}  duration={500} >
        <li className="nav__item" type="none">ACHIEVEMENTS</li>
        </Link>
        </Fade>

        <Fade top>
        <Link activeClass="active" to="hobbies" spy={true} smooth={true}  duration={500}>
        <li className="nav__item" type="none">HOBBIES</li></Link>
        </Fade>

        <Fade top>
        <Link activeClass="active" to="contact" spy={true} smooth={true}  duration={500} >
        <li className="nav__item" type="none">CONTACT</li>
        </Link>
        </Fade>
        
        </ul>

    
    
    </div>


}