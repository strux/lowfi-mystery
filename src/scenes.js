Crafty.scene('Loading', function(){

  Crafty.load(['assets/character-sprites.png', 'assets/terrain-sprites.png'], function(){

    Crafty.sprite(32, 'assets/character-sprites.png', {
      spr_player:  [0, 0],
    });

    Crafty.sprite(16, 'assets/terrain-sprites.png', {
      spr_shallow_water: [5, 2],
      spr_sand:          [3, 1],
      spr_beach_ne:      [2, 0],
      spr_beach_n:       [3, 0],
      spr_beach_nw:      [4, 0],
      spr_beach_w:       [4, 1],
      spr_beach_sw:      [4, 2],
      spr_beach_s:       [3, 2],
      spr_beach_se:      [2, 2],
      spr_beach_e:       [2, 1],
    });

    Crafty.scene('Game');
  })
});

Crafty.scene('Game', function() {
  for(var x=0; x<100; x++) {
    for(var y=0; y<50; y++) {
      var value = Math.abs(noise.simplex2(x / 100, y / 100));
          value *= 256;
      sprite = value > 100 ? 'Sand' : 'ShallowWater';
      Crafty.e(sprite).attr({x: x*16, y: y*16});
    }
  }

  this.player = Crafty.e('PlayerCharacter').attr({x: 40, y: 100});
});
