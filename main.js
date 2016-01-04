(function(){
  var running = false;
  
  // Game logic.
  var g_key = function (e) {
        console.log("Key Press Detected");
      },
      g_activate = function(e) {
        running = true;
      }
  
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
