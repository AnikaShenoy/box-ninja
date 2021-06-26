/* Source: https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm */

const video = document.querySelector("#videoElement");
video.width = window.innerWidth / 10;
video.height = window.innerHeight / 10;

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log(err0r);
    });
} 
       






