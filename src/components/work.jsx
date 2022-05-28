import react from "react"

import recipeImage from "../Assets/Images/recipe.png"
import emojiImage from "../Assets/Images/emoji.png"
import guessImage from "../Assets/Images/guess-the-number.png"
import rockImage from "../Assets/Images/rock-paper-scissors.png"
import pokemonImage from "../Assets/Images/pokemon.png"
import eBirthdayImage from "../Assets/Images/e-birthday-card.png"

import "./work.css"

export const Work=()=>{




    return <div className="work__main">
        <div className="work__header">
        <h1>My Work</h1>
        <p>“I love coding & ever since I took up ProGrad Junior, I’ve built some cool projects. I’ve also
        picked up HTML, CSS & JavaScript”</p>

        </div>
    
        <div className="project__gallery">

        <div className="project__card">
        <img src={recipeImage} />
        <div className="marker"></div>
        <h3>Recipe Web Page</h3>
        <p>I built a Dalgona Coffee Recipe
        page using HTML & CSS.</p>
        <h3 className="project-link">SEE PROJECT</h3>
        </div>


        <div className="project__card">
        <img src={emojiImage} />
        <div className="marker"></div>
        <h3>My Fav Emojis</h3>
        <p>I created my favorite emojis &
        cartoons using CSS only.</p>
        <h3 className="project-link">SEE PROJECT</h3>
        </div>


        <div className="project__card">
        <img src={guessImage} />
        <div className="marker"></div>
        <h3>Guess the Number</h3>
        <p>I built guess the number game
        using JavaScript.</p>
        <h3 className="project-link"
        >SEE PROJECT</h3>
        </div>
        
        <div className="project__card">
        <img src={rockImage} />
        <div className="marker"></div>
        <h3>Rock Paper Scissors</h3>
        <p>I made a virtual rock paper
        scissors game using JS.</p>
        <h3 className="project-link">SEE PROJECT</h3>
        </div>


        <div className="project__card">
        <img src={pokemonImage} />
        <div className="marker"></div>
        <h3>Pokemon Game</h3>
        <p>I built the Pokemon based
        game using HTML, CSS & JS.</p>
        <h3 className="project-link">SEE PROJECT</h3>
        </div>

        <div className="project__card">
        <img src={eBirthdayImage} />
        <div className="marker"></div>
        <h3>E-birthday Card</h3>
        <p>I’ve built my own e-birthday
        card using JS.</p>
        <h3 className="project-link">SEE PROJECT</h3>
        </div>



        </div>
    
    </div>


}