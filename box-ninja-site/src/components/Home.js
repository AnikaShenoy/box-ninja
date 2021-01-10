import React, {Component} from 'react';
import "../App.css";
 
export default class Home extends Component {

    componentDidMount() {

        const script = document.createElement("script");
        script.type = "module"
        script.src = "js/MenuCubes.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                 <h1 id="title">Box Ninja</h1>
                 {/* <video autoplay="false" id="videoElement"></video> */}
     
                 <img id="hand" src="images/hand.png" alt=""/>
     
                 <div className="outer">
                     <canvas id="flex-container"></canvas>
                 </div>
     
            </div>
         );

    }
    
    
    
}
