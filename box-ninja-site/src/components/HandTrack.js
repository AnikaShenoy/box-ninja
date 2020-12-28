import * as handTrack from 'handtrackjs'

function HandTrack(){
    const img = document.getElementById('img');
    return (
        // Load the model.
        handTrack.load().then(model => {
        // detect objects in the image.
        console.log("model loaded")
        model.detect(img).then(predictions => {
            console.log('Predictions: ', predictions); 
        });
    }));
}

export default HandTrack;
