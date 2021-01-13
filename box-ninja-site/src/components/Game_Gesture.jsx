import React, {Component} from 'react';
import "../App.css";

 
export default class Game_Gesture extends Component {
   componentDidMount() {

    const script = document.createElement("script");
    script.type = "module";
    script.src = "js/game.js";
    script.async = true;
    document.body.appendChild(script);

    // Mouse control
    /* const mouse = document.createElement("script");
    mouse.type = "module";
    mouse.src = "js/hand_mouse.js";
    mouse.async = true;
    document.body.appendChild(mouse);
 */

    const model = document.createElement("script");
    model.type = "module";
    model.src = "https://cdn.jsdelivr.net/npm/handtrackjs/dist/handtrack.min.js"
    model.async = true;
    document.body.appendChild(model);

    /* Gesture Control */
    const handtrack = document.createElement("script");
    handtrack.type = "module";
    handtrack.src = "js/hand.js"
    handtrack.async = true;
    document.body.appendChild(handtrack);

    
      
      const video = document.createElement("script");
      video.type = "module"
      video.src = "js/Video.js";
      video.async = true;
      document.body.appendChild(video);

  }

  render() {
      return (
          <div>
               <h1 id="title">High Score:</h1>
               <video autoplay="false" id="videoElement"></video>
   
               <img id="hand" src="images/hand.png" alt=""/>
   
               <div className="outer">
                   <canvas id="flex-container"></canvas>
               </div>
   
          </div>
       );

  }
}

