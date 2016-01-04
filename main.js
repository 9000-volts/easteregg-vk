// EasterEgg-VK by 9000 volts (9kv.cu.cc)
// Made for @ViktorKorolyuk on his site (http://viktorkorolyuk.cu.cc)
// A fun little easter egg triggered who-knows-how!
(function(){
  var running = false;
  
  // Game logic.
  var g_key = function (e) {
        console.log("Key Press Detected");
      },
      g_activate = function(e) {
        running = true;
        // Make everything position absolute.
        var cn = document.body.childNodes;
        for (var i = 0; i < cn.length; i++) {
          var p = cn[i].getBoundingClientRect();
          if (window.getComputedStyle(cn[i]).position !== "fixed")
            cn[i].style.position = "absolute";
          cn[i].style.top = p.top;
          cn[i].style.left = p.left;
        }
      };
  
  // Code-based activation.
  var combo_keycodes = [38,38,40,40,37,39,37,39,66,65],
      combo_index = 0,
      combo_logic = function (e) {
        if (e.keyCode === combo_keycodes[combo_index]) combo_index++;
        else combo_index = 0;
        if (combo_index == combo_keycodes.length) g_activate();
      };
  
  // Key press behavior.
  window.onkeydown = function (e) {
    if (running) g_key(e);
    else combo_logic(e);
  };
})();
