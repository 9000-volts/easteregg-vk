// EasterEgg-VK by 9000 volts (9kv.cu.cc)
// Made for @ViktorKorolyuk on his site (http://viktorkorolyuk.cu.cc)
// A fun little easter egg triggered who-knows-how!
(function(){
  var running = false;
  var u_load = function (url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      cb(xhr.responseText);
    };
    xhr.open("get", url);
    xhr.send();
  };
  
  // Game logic.
  var g_key = function (e) {
        console.log("Key Press Detected");
      },
      g_activate = function(e) {
        running = true;
        // Load in our custom HTML to the body.
        u_load("https://rawgit.com/9000-volts/easteregg-vk/master/index.html", function (html) {
          document.body.innerHTML += html;
        });
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
