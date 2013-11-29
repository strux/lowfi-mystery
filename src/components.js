Crafty.c('PlayerCharacter', {
  init: function() {
    var down_y  = 0,
        left_y  = 1,
        right_y = 2,
        up_y    = 3,
        y;
    this.requires('Canvas, Actor, Fourway, Collision, spr_player, SpriteAnimation')
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
  },
});
