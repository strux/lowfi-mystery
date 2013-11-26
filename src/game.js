Game = {
  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
    Crafty.init(600, 200);
    Crafty.background('url(assets/mountain-rise.png)');

    // Simply start the "Loading" scene to get things going
    Crafty.scene('Loading');
  }
}
