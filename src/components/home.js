import react from "react"
import "./home.css"
import profileImage from "../Assets/Images/profile-pic.png"

export const Home=()=>{
return <div className="main">


<div className="background__box">
<img class="profile-image" src={profileImage}/>
</div>


<div className="content">

<h1>Rachel Green</h1>
<p>Born and brought up in San Francisco, California, I am an aquarian
who just turned 13 years old. Just so you know, I am the crazy
acquarian everyone warned you about. On one side, I love exploring
different things. On the other side, I do have a serious goal of
becoming an entreprenuer. </p>
<p>Fun and super cool with a contagious disease called AWESOME -
<br/>
That’s who I am.</p>


<button className="btn-home">Let's Talk!</button>
</div>



</div>

}