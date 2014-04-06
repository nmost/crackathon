var initializePlayer = function() {
  Q.Sprite.extend('Player', {
    init: function(p) {
      this._super(p, {
        sheet: 'player',
        sprite: 'player',
        x: 100,
        y: 2000,
        jumpSpeed: -500,
        speed: 300
      });
      this.add('2d, platformerControls, animation');
      this.on('hit.sprite',function(collision) {
      });
    },
    step: function(dt) {
      if (this.p.vx > 0) {
        this.play("run_right");
      } else if (this.p.vx < 0) {
        this.play("run_left");
      } else {
        console.log(this.p.direction);
        this.play("stand_" + this.p.direction);
      }
    }
  });
};
