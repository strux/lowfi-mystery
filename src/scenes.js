Crafty.scene('Loading', function(){

  Crafty.load(['assets/character-sprites.png', 'assets/terrain-sprites.png'], function(){

    Crafty.sprite(32, 'assets/character-sprites.png', {
      spr_player:  [0, 0],
    });

    Crafty.sprite(16, 'assets/terrain-sprites.png', {
      spr_shallow:       [5, 2],
      spr_deep_water:    [3, 5],
      spr_deep_nwi:      [0, 4],
      spr_deep_nei:      [1, 4],
      spr_deep_sei:      [1, 5],
      spr_deep_swi:      [0, 5],
      spr_deep_n:        [3, 4],
      spr_deep_ne:       [4, 4],
      spr_deep_e:        [4, 5],
      spr_deep_se:       [4, 6],
      spr_deep_s:        [3, 6],
      spr_deep_sw:       [2, 6],
      spr_deep_w:        [2, 5],
      spr_deep_nw:       [2, 4],
      spr_beach:         [3, 1],
      spr_beach_nwi:     [0, 0],
      spr_beach_nei:     [1, 0],
      spr_beach_sei:     [1, 1],
      spr_beach_swi:     [0, 1],
      spr_beach_ne:      [4, 0],
      spr_beach_n:       [3, 0],
      spr_beach_nw:      [2, 0],
      spr_beach_w:       [2, 1],
      spr_beach_sw:      [2, 2],
      spr_beach_s:       [3, 2],
      spr_beach_se:      [4, 2],
      spr_beach_e:       [4, 1],
    });

    Crafty.scene('Game');
  })
});

Crafty.scene('Game', function() {
  noise.seed(2); //Math.random());
  var map = Crafty.e('Map'),
      map_width  = 100,
      map_height = 50;
  for(var x=0; x<map_width; x++) {
    map[x] = [];
    for(var y=0; y<map_height; y++) {
      var value = Math.abs(noise.simplex2(x / 100, y / 100));
          value *= 100;
      var sprite;
      if(value <= 30) sprite = 'DeepWater'
      else if(value > 30 && value < 45) sprite = 'ShallowWater'
      else sprite = 'Beach'
      map[x][y] = sprite
    }
  }

  var applyTransitions = function(x, y, tile, transitionTile) {
      if(map[x][y] == tile) {
        if(map.tileNorthEastOf(x, y) == transitionTile) map[x][y] = transitionTile + 'SW'
        if(map.tileNorthWestOf(x, y) == transitionTile) map[x][y] = transitionTile + 'SE'
        if(map.tileSouthEastOf(x, y) == transitionTile) map[x][y] = transitionTile + 'NW'
        if(map.tileSouthWestOf(x, y) == transitionTile) map[x][y] = transitionTile + 'NE'

        if(map.tileNorthOf(x, y) == transitionTile) map[x][y] = transitionTile + 'S'
        if(map.tileEastOf(x, y)  == transitionTile) map[x][y] = transitionTile + 'W'
        if(map.tileSouthOf(x, y) == transitionTile) map[x][y] = transitionTile + 'N'
        if(map.tileWestOf(x, y)  == transitionTile) map[x][y] = transitionTile + 'E'

        if(map.tileNorthOf(x, y) == transitionTile && map.tileWestOf(x, y)  == transitionTile) map[x][y] = transitionTile + 'NWI'
        if(map.tileNorthOf(x, y) == transitionTile && map.tileEastOf(x, y)  == transitionTile) map[x][y] = transitionTile + 'NEI'
        if(map.tileSouthOf(x, y) == transitionTile && map.tileEastOf(x, y)  == transitionTile) map[x][y] = transitionTile + 'SEI'
        if(map.tileSouthOf(x, y) == transitionTile && map.tileWestOf(x, y)  == transitionTile) map[x][y] = transitionTile + 'SWI'
      }
  }

  // applyTransitions
  for(var x=0; x<map_width; x++) {
    for(var y=0; y<map_height; y++) {
      applyTransitions(x, y, 'ShallowWater', 'Beach');
      applyTransitions(x, y, 'ShallowWater', 'DeepWater');
    }
  }

  // Render
  for(var x=0; x<map_width; x++) {
    for(var y=0; y<map_height; y++) {
      Crafty.e(map[x][y]).attr({x: x*16, y: y*16});
    }
  }

  this.player = Crafty.e('PlayerCharacter').attr({x: map_width / 2 * 16, y: map_height / 2 * 16});
});
