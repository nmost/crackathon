var initializeCollectibles = function() {
  Q.Sprite.extend('Collectible', {
    init: function(p) {
      this._super(p, {
        sheet: 'tower',
        vx: 100
      });
      this.add('2d')
      this.on('hit.sprite',function(collision) {
        if(collision.obj.isA('Player')){
          this.hitPlayerEvent(collision);
        }
      });
    },
    
    hitPlayerEvent: function(collision) {
      this.destroy();                 
    }

  });

  Q.Collectible.extend('Crack', {
    hitPlayerEvent: function(collision) {
      this._super(collision);
      Q.addScore(1);
    }
  });
};
