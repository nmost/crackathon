var initializePlayer = function() {
  Q.Sprite.extend('Player', {
    init: function(p) {
      this._super(p, {
        sheet: 'player',
        sprite: 'player',
        
        jumpSpeed: -500,
        speed: 300
      });
      this.add('2d, platformerControls, animation');
      this.on('hit.sprite',function(collision) {
      });

      Q.input.on('up', this, function(){
        Q.audioPlayerJump();
      });
    },
    step: function(dt) {
      if (this.p.vx > 0) {
        this.play("run_right");
      } else if (this.p.vx < 0) {
        this.play("run_left");
      } else {
        this.play("stand_" + this.p.direction);
      }
    }
  });
};
