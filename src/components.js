Crafty.c('PlayerCharacter', {
  init: function() {
    this.requires('Canvas, Actor, Fourway, Collision, spr_player, SpriteAnimation')
    .fourway(4)
    .animate('PlayerMovingRight', 7, 0, 8)
    .animate('PlayerMovingLeft', 7, 0, 8)
    .animate('PlayerMovingDown', 1, 0, 2)
    .animate('PlayerMovingUp', 4, 0, 5)

    var animation_speed = 8;
    this.bind('NewDirection', function(data) {
      if (data.x > 0) {
        this.animate('PlayerMovingRight', animation_speed, -1).unflip();
        stopX = 6;
      } else if (data.x < 0) {
        this.animate('PlayerMovingLeft', animation_speed, -1).flip();
        stopX = 6;
      } else if (data.y > 0) {
        this.animate('PlayerMovingDown', animation_speed, -1);
        stopX = 0;
      } else if (data.y < 0) {
        this.animate('PlayerMovingUp', animation_speed, -1);
        stopX = 3;
      } else {
        this.stop();
        this.sprite(stopX, 0);
      }
    });
  },
});

Crafty.c('Inspectable', {
  init: function() {
    this.requires('Canvas, Actor, Tint')
  }
});

Crafty.c('Painting', {
  init: function() {
    this.requires('Canvas, 2D, Inspectable, spr_painting')
  }
});
