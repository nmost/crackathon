var initializePlayer = function() {
  Q.Sprite.extend('Player', {
    init: function(p) {
      this._super(p, {
        sheet: 'player',
        w: 32,
        h: 32,
        x: 100,
        y: 0,
        jumpSpeed: -350,
        speed: 250
      });
      this.add('2d, platformerControls');
      console.log(this);
      this.on('hit.sprite',function(collision) {
      });
    } 
  });
};
