// Source photo of hand taken by: https://unsplash.com/@andriklangfield (Is this pic necessary?)
// TO FIX


const hand = document.getElementById("hand")
const hand_robot = document.getElementById("hand_robot")

let isVideo = false;
let model = null;

function startVideo() {
    handTrack.startVideo(video).then(function (status) {
        console.log("video started", status);
        if (status) {
            console.log("Now tracking");
            isVideo = true;
            runDetection();
        } else {
            alert("Please enable video");
        }
    });
}

function toggleVideo() {
    if (!isVideo) {
        alert("Starting video")
        startVideo();
    } else {
        alert("Stopping video")
        handTrack.stopVideo(video)
        isVideo = false;
        alert("Video stopped")
    }
}

const modelParams = {
    flipHorizontal: true, // flip e.g for video  
    maxNumBoxes: 1, // maximum number of boxes to detect
    iouThreshold: 0.5, // ioU threshold for non-max suppression
    scoreThreshold: 0.6, // confidence threshold for predictions.
}

handTrack.load(modelParams).then(lmodel => {
    // detect objects in the image.
    model = lmodel;
    console.log("loaded model")
    model.detect(hand).then(predictions => {
      console.log('Predictions: ', predictions); 
    });
  });



