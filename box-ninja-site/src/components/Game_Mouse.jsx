import React, {Component} from 'react';
import "../App.css";


export default class Game_Mouse extends Component {
   componentDidMount() {

    const script = document.createElement("script");
    script.type = "module";
    script.src = "js/game.js";
    script.async = true;
    document.body.appendChild(script);

    // Mouse control
    const mouse = document.createElement("script");
    mouse.type = "module";
    mouse.src = "js/hand_mouse.js";
    mouse.async = true;
    document.body.appendChild(mouse);

  }

  render() {
      return (
          <div>
               <h3 id="points"></h3>

               <h5 id="mouse"></h5>

               <img id="hand" src="images/hand.png" alt=""/>
   
               <div className="outer">
                   <canvas id="flex-container"></canvas>
               </div>
   
          </div>
       );

  }
}

