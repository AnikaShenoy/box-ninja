import "https://cdn.jsdelivr.net/npm/handtrackjs/dist/handtrack.min.js";

const myVideo = document.getElementById("videoElement");
const hand = document.getElementById("hand")
hand.style.position = "absolute";
document.body.appendChild(hand);
let isVideo = false;
let model;

const modelParams = {
    flipHorizontal: true,   // flip e.g for video  
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.9,    // confidence threshold for predictions.
}

function startVideo() {
    handTrack.startVideo(myVideo).then(function (status) {
        console.log("video started", status);
        if (status) {
            isVideo = true
            runDetection()
        } else {
            console.log("Please enable video")
        }
    });
}

function runDetection() {
    model.detect(myVideo).then(predictions => {
        if (predictions[0]){
            hand.style.left = String((10 * predictions[0].bbox[0]) - 30) + "px";
            hand.style.top = String((10 * predictions[0].bbox[1]) - 20) + "px";
        }
        if (isVideo) {
            requestAnimationFrame(runDetection);
        }
    });
}

// Load the model.
handTrack.load(modelParams).then(lmodel => {
    // detect objects in the image.
    model = lmodel
});

window.onload = function(){
    startVideo(myVideo);
    runDetection();
}
