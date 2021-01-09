import React from 'react';
/* import threeEntryPoint from "./threejs/threeEntryPoint"; */
import "../App.css"
import ScriptTag from "react-script-tag";


/* 
SO CONFUSED... HOW DO WE ADD ANYTHING IN JAVASCRIPT :(((
FEEL FREE TO DELETE THIS COMMENTED PART - IT WAS AN ATTEMPT TO ADD THREE.JS STUFF
export default class home extends Component {

    componentDidMount() {
        threeEntryPoint(this.threeRootElement)
    }
    render () {
        return (
            <div ref={element => this.threeRootElement = element} />
        );
    }
} */


 
const home = () => {
    return (
       <div>
            <h1 id="title">Box Ninja</h1>
            {/* <video autoplay="false" id="videoElement"></video> */}

            <img id="hand" src="images/hand.png" alt=""/>

            <div className="outer">
                <canvas id="flex-container"></canvas>
            </div>
            <ScriptTag type="text/javascript" src=".\MenuCubes.js"></ScriptTag>

       </div>
    );
}
  
export default home;