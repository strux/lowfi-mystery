Game = {
  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
    //Crafty.init(640, 320);
    Crafty.init(75 * 16, 30 * 16);
    Crafty.background('#506a4b');

    // Simply start the "Loading" scene to get things going
    Crafty.scene('Loading');
  }
}
