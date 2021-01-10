// Mouse Control Source: https://stackoverflow.com/questions/7143806/make-an-image-follow-mouse-pointer 
// (this will be unnecessary in final product)

function getMouseCoords(e) {
    var e = e || window.event;
    document.getElementById('hand').innerHTML = e.clientX + ', ' + e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
  }
  
  
  var followCursor = (function() {
    var hand = document.getElementById('hand');
    hand.style.position = "absolute";
  
    return {
      init: function() {
        document.body.appendChild(hand);
      },
  
      run: function(e) {
        var e = e || window.event;
        hand.style.left  = (e.clientX - 95)+ 'px';
        hand.style.top = (e.clientY - 90) + 'px';
        getMouseCoords(e);
      }
    };
  }());
  
  window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
  }
  