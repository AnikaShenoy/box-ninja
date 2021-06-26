import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../App.css";

export default class Instructions extends Component {
   render() {
       return (
           <div>
               <ul>
                    <li><Link id="homeLink" to='/'> Home </Link></li>
               </ul>

               <h3 id="instructionsTitle">Instructions</h3>

               <p class="instructions">
                    <br></br><br></br>
                Hit the boxes as they approach to earn points! 
                    <br></br><br></br><br></br>
                You have the option of playing with your mouse or with gesture control.
                    <br></br><br></br><br></br><br></br> </p>

                <h5 id="instructionsMiniHeader">GESTURE CONTROL:</h5>

                <p class="instructions">    
                    <br></br>
                  With gesture control, hold your hand in view of your webcam with the palm facing your computer. 
                    <br></br><br></br>
                  Make sure your face is not included in the view. 
                    <br></br><br></br>
                  If gesture control seems laggy or is not working, try refreshing your page.
                    <br></br><br></br>
                  You can also try adjusting the distance of your hand from the webcam.
                </p>
           </div>
        );
   }
 }