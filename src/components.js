Crafty.c('PlayerCharacter', {
  init: function() {
    this.requires('Canvas, Actor, Fourway, Collision, spr_player, SpriteAnimation')
    .fourway(4)
    .animate('PlayerMovingRight', 0, 0, 1)
    .animate('PlayerMovingLeft', 0, 0, 1)

    var animation_speed = 8;
    this.bind('NewDirection', function(data) {
      if (data.x > 0) {
        this.animate('PlayerMovingRight', animation_speed, -1).unflip();
      } else if (data.x < 0) {
        this.animate('PlayerMovingLeft', animation_speed, -1).flip();
      } else if (data.y > 0) {
        this.animate('PlayerMovingDown', animation_speed, -1);
      } else if (data.y < 0) {
        this.animate('PlayerMovingUp', animation_speed, -1);
      } else {
        this.stop();
      }
    });
  },
});

Crafty.c('Painting', {
  init: function() {
    this.requires('Canvas, Actor, Collision, spr_painting')
  }
});
