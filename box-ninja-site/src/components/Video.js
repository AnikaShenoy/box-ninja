import React from "react";
import {Helmet} from "react-helmet";

export default class Video extends React.Component {
  render() {
    /* Source: https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm */
    const video = document.querySelector("#videoElement");
    video.width = window.innerWidth / 10;
    video.height = window.innerHeight / 10;
    
    return (
      <div className="application">
        <Helmet>
        <div style={{color: rgba(255,255,255,.75)}}>
          Hi
        </div>
        <script async="true">
          if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
              .then(function (stream) {
                video.srcObject = stream;
              })
              .catch(function (err0r) {
                console.log("Something went wrong!");
              });
          }
        </script>
      </Helmet>
      </div>
      
    )
  }

}





const Video = () => {
  
  return (
    
    
  )
}






