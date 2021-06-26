// Mouse Control Source: https://stackoverflow.com/questions/7143806/make-an-image-follow-mouse-pointer 

function getMouseCoords(e) {
    var e = e || window.event;
    document.getElementById('hand').innerHTML = e.clientX + ', ' + e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
  }
  
  // WE CAN'T USE IF WE'RE USING LINKS TO CLICK

  
  var followCursor = (function() {
    var hand = document.getElementById('hand');
    hand.style.position = "absolute";
  
    return {
      init: function() {
        document.body.appendChild(hand);
      },
  
      run: function(e) {
        var e = e || window.event;
        hand.style.left = (e.clientX - (hand.clientWidth/2))+ 'px';
        hand.style.top = (e.clientY - (hand.clientHeight/2)) + 'px';
        getMouseCoords(e);
      }
    };
  }());
  
  window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
  }
  