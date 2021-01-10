import React, {Component} from 'react';
import "../App.css";

 
export default class Game extends Component {
   componentDidMount() {

      const script = document.createElement("script");
      script.type = "module"
      script.src = "js/Game.js";
      script.async = true;
  
      document.body.appendChild(script);


      const hand = document.createElement("hand");
      hand.src = "js/hand_mouse.js";
      hand.async = true;
      document.body.appendChild(hand);
  }

  render() {
      return (
          <div>
               <h1 id="title">High Score:</h1>
               {/* <video autoplay="false" id="videoElement"></video> */}
   
               <img id="hand" src="images/hand.png" alt=""/>
   
               <div className="outer">
                   <canvas id="flex-container"></canvas>
               </div>
   
          </div>
       );

  }
}

