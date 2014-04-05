var initializePlayer = function() {
  Q.Sprite.extend('Player', {
    init: function(p) {
      this._super(p, {
        sheet: 'player',
        x: 410,
        y: 90
      });
      this.add('2d, platformerControls');
      this.on('hit.sprite',function(collision) {
      });
    } 
  });
};
