// REPLACE WITH HANDTRACK

// Source: https://stackoverflow.com/questions/7143806/make-an-image-follow-mouse-pointer 
// (this will be unnecessary in final product)

function getMouseCoords(e) {
    var e = e || window.event;
    document.getElementById('hand_robot').innerHTML = e.clientX + ', ' + e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
  }
  
  
  var followCursor = (function() {
    var hand = document.getElementById('hand_robot');
    hand.style.position = "absolute";
  
    return {
      init: function() {
        document.body.appendChild(hand);
      },
  
      run: function(e) {
        var e = e || window.event;
        hand.style.left  = e.clientX + 'px';
        hand.style.top = e.clientY + 'px';
        getMouseCoords(e);
      }
    };
  }());
  
  window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
  }
  