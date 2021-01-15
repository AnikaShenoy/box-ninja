import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../App.css";

export default class Home extends Component {
    
    componentDidMount() {

        const script = document.createElement("script");
        script.type = "module"
        script.src = "js/MenuCubes.js";
        script.async = true;

        document.body.appendChild(script);

        const mouse = document.createElement("script");
        mouse.type = "module"
        mouse.src = "js/hand_mouse.js";
        mouse.async = true;
    
        document.body.appendChild(mouse);
    }

    render() {
        return (
            <div>
                 <h1 id="title">Box Ninja</h1>
                 <h3 id="points"></h3>

                 <Link id="mouseLink" to='/game-mouse'> Click here</Link>
                 <Link id="gestureLink" to='/game-gesture'> Click here</Link>
     
                 <div className="outer">
                     <canvas id="flex-container"></canvas>
                 </div>
            </div>
         );
    }    
}

//<img id="hand" src="images/hand.png" alt=""/>     (goes between last two <div> tags)
