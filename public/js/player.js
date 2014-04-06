var initializePlayer = function() {
  Q.Sprite.extend('Player', {
    init: function(p) {
      this._super(p, {
        sheet: 'player',
        w: 64,
        h: 64,
        x: 220,
        y: 2900
      });
      this.add('2d, platformerControls');
      this.on('hit.sprite',function(collision) {
      });
    } 
  });
};
