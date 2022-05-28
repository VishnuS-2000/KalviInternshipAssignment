import react from "react"


import guitar from "../Assets/Images/guitar.png"
import friends from "../Assets/Images/friends.png"
import badminton from "../Assets/Images/badminton.png"
import painting from "../Assets/Images/painting.png"
import reading from "../Assets/Images/reading.png"

import "./hobbies.css"

export const Hobbies=()=>{





    return <div className="hobbies__main">

    <div className="hobbies__header">
    
        <h1>My <br/>Side <br/>Hustle</h1>
        <p>When I’m free, you’ll find me doing one of these.
        Honestly, I hate to laze around!</p>

    </div>

    <div className="hobbies__content">
        <div className="hobbies__upper">
        
        <div className="hobbies-upper-left">
        
        <img src={guitar}/>
        
        </div>
        
        <div className="hobbies-upper-right">
            <img src={friends}/>
            <img src={badminton}/>
        
        </div>

        </div>
        
        <div className="hobbies__lower">
            <img src={painting}/>
            <img src={reading}/>

        </div>
    </div>

    
    </div>
}