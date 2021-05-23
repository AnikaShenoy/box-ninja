import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../App.css";

const mouseLinkStyle = {
    //padding: "0.5em",
    position: "relative",
    left: "350px",
    top: "00px",
    //color: rgba(255, 255, 255, 0.75),
    opacity: 1,
    //font-family: "Bungee", Bungee Shade
};

const gestureLinkStyle = {
    //padding: "0.5em",
    position: "relative",
    left: "800px",
    top: "00px",
    //color: rgba(255, 255, 255, 0.75),
    opacity: 1,
    //font-family: "Bungee", Bungee Shade
};

export default class Home extends Component {
    
    componentDidMount() {

        const script = document.createElement("script");
        script.type = "module"
        script.src = "js/MenuCubes.js";
        script.async = true;
        script.setAttribute("id", "boxes");

        document.body.appendChild(script);

        
        const mouse = document.createElement("script");
        mouse.type = "module"
        mouse.src = "js/hand_mouse.js";
        mouse.async = true;
    
        //document.body.appendChild(mouse);
        
    }


    render() {
        return (
            
            <div>
                <h1 id="title">Box Ninja</h1>
                <h3 id="points"></h3>

                {/* <Link id="mouseLink" to='/game-mouse'> Mouse Control </Link>
                <Link id="gestureLink" to='/game-gesture'> Hand Control </Link> */}

                {/* <Link id="mouseLink" to='/game-mouse'> Mouse Control </Link>
                <button id="gestureLink" to='/game-gesture'> Hand Control </button> */}

                {/* <ul>
                    <li><Link to='/game-mouse' style={mouseLinkStyle}> Mouse Control </Link></li>
                    <li><Link to='/game-gesture' style={gestureLinkStyle}> Hand Control </Link></li>
                </ul> */}

                <ul>
                    <li><Link id="mouseLink" to='/game-mouse'> Mouse Control </Link></li>
                    <li><Link id="gestureLink" to='/game-gesture'> Hand Control </Link></li>
                </ul>

                <canvas id="flex-container"></canvas>

            </div>
         );
    }    
}

//<img id="hand" src="images/hand.png" alt=""/>     (goes between last two <div> tags)
//<div className="outer">
