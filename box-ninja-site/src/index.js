/* TO DO: I STILL HAVE TO FIX THIS CODE TO ANIMATE TITLE
// Source: https://greensock.com/forums/topic/20289-how-to-animate-every-word-in-sentence/

title = document.getElementById("title");
var split = new SplitText(title, { type: "words, chars" });
var vh = window.innerHeight;
var vw = window.innerWidth;
TweenMax.staggerFrom(
    split.words,
    1.25,
    {
        cycle: {
            x: [-(vw / 2) - 100, 0, vw / 2 + 100, 0],
            y: [0, -vh / 2 - 100, 0, vh / 2 + 100]
        },
        ease:Back.easeOut
    }, 
    0.1
);

GSDevTools.create();
 */