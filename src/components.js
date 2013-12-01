Crafty.c('Map', {
  tileNorthOf: function(x, y) {
    if(this[x] && this[x][y-1]) return this[x][y-1]
    return '';
  },
  tileNorthEastOf: function(x, y) {
    if(this[x+1] && this[x+1][y-1]) return this[x+1][y-1]
    return '';
  },
  tileEastOf: function(x, y) {
    if(this[x+1] && this[x+1][y]) return this[x+1][y]
    return '';
  },
  tileSouthEastOf: function(x, y) {
    if(this[x+1] && this[x+1][y+1]) return this[x+1][y+1]
    return '';
  },
  tileSouthOf: function(x, y) {
    if(this[x] && this[x][y+1]) return this[x][y+1]
    return '';
  },
  tileSouthWestOf: function(x, y) {
    if(this[x-1] && this[x-1][y+1]) return this[x-1][y+1]
    return '';
  },
  tileWestOf: function(x, y) {
    if(this[x-1] && this[x-1][y]) return this[x-1][y]
    return '';
  },
  tileNorthWestOf: function(x, y) {
    if(this[x-1] && this[x-1][y-1]) return this[x-1][y-1]
    return '';
  },
})

Crafty.c('PlayerCharacter', {
  init: function() {
    var down_y  = 0,
        left_y  = 1,
        right_y = 2,
        up_y    = 3,
        y;
    this.requires('DOM, Actor, Fourway, Collision, spr_player, SpriteAnimation')
    .fourway(4)
    .animate('PlayerMovingDown',  1, down_y,  3)
    .animate('PlayerMovingLeft',  1, left_y,  3)
    .animate('PlayerMovingRight', 1, right_y, 3)
    .animate('PlayerMovingUp',    1, up_y,    3)

    var animation_speed = 8;
    this.bind('NewDirection', function(data) {
      if (data.x > 0) {
        this.animate('PlayerMovingRight', animation_speed, -1);
        y = right_y;
      } else if (data.x < 0) {
        this.animate('PlayerMovingLeft', animation_speed, -1);
        y = left_y;
      } else if (data.y > 0) {
        this.animate('PlayerMovingDown', animation_speed, -1);
        y = down_y;
      } else if (data.y < 0) {
        this.animate('PlayerMovingUp', animation_speed, -1);
        y = up_y;
      } else {
        this.stop();
        this.sprite(0, y);
      }
    });
    this.bind('Move', function(data) {
      Crafty.viewport.scroll('_x', -(this.x + (this.w / 2) - (Crafty.viewport.width / 2) ));
      Crafty.viewport.scroll('_y', -(this.y + (this.h / 2) - (Crafty.viewport.height / 2) ));
    });
  },
});

Crafty.c('Beach', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach')
  }
});

Crafty.c('BeachNWI', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_nwi')
  }
});

Crafty.c('BeachNEI', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_nei')
  }
});

Crafty.c('BeachSEI', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_sei')
  }
});

Crafty.c('BeachSWI', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_swi')
  }
});

Crafty.c('BeachNE', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_ne')
  }
});

Crafty.c('BeachN', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_n')
  }
});

Crafty.c('BeachNW', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_nw')
  }
});

Crafty.c('BeachW', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_w')
  }
});

Crafty.c('BeachSW', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_sw')
  }
});

Crafty.c('BeachS', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_s')
  }
});

Crafty.c('BeachSE', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_se')
  }
});

Crafty.c('BeachE', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_beach_e')
  }
});

Crafty.c('ShallowWater', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_shallow')
  }
});

Crafty.c('DeepWaterN', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_n')
  }
});

Crafty.c('DeepWaterNE', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_ne')
  }
});

Crafty.c('DeepWaterE', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_e')
  }
});

Crafty.c('DeepWaterSE', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_se')
  }
});

Crafty.c('DeepWaterS', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_s')
  }
});

Crafty.c('DeepWaterSW', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_sw')
  }
});

Crafty.c('DeepWaterW', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_w')
  }
});

Crafty.c('DeepWaterNW', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_nw')
  }
});

Crafty.c('DeepWater', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_water')
  }
});

Crafty.c('DeepWaterNWI', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_nwi')
  }
});

Crafty.c('DeepWaterNEI', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_nei')
  }
});

Crafty.c('DeepWaterSEI', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_sei')
  }
});

Crafty.c('DeepWaterSWI', {
  init: function() {
    this.requires('DOM, Actor, 2D, spr_deep_swi')
  }
});
