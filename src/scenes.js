Crafty.scene('Loading', function(){

  Crafty.load(['assets/character-sprites.png', 'assets/terrain-sprites.png'], function(){

    Crafty.sprite(32, 'assets/character-sprites.png', {
      spr_player:  [0, 0],
    });

    Crafty.scene('Game');
  })
});

Crafty.scene('Game', function() {
  this.player = Crafty.e('PlayerCharacter').attr({x: 10, y: 168});
  this.painting = Crafty.e('Painting').attr({x: 500, y: 130});
});
