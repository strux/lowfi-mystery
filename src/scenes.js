Crafty.scene('Loading', function(){

  Crafty.load(['assets/sprite-sheet.png', 'assets/mountain-rise.png'], function(){

    Crafty.sprite(32, 'assets/sprite-sheet.png', {
      spr_player:  [0, 0],
      spr_painting: [0, 1],
    });

    Crafty.scene('Game');
  })
});

Crafty.scene('Game', function() {
  this.player = Crafty.e('PlayerCharacter').attr({x: 10, y: 168});
  this.painting = Crafty.e('Painting').attr({x: 500, y: 130});
});
