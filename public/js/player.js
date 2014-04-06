var initializePlayer = function() {
  Q.Sprite.extend('Player', {
    init: function(p) {
      this._super(p, {
        sheet: 'player',
        w: 60,
        h: 60,
        x: 100,
        y: 2000,
        jumpSpeed: -500,
        speed: 300
      });
      this.add('2d, platformerControls');
      console.log(this);
      this.on('hit.sprite',function(collision) {
      });
    } 
  });
};
