var initializeCollectibles = function() {
  Q.Sprite.extend('Collectible', {
    init: function(p) {
      this._super(p, {
        sheet: 'crack',
        type: Q.SPRITE_DEFAULT,
        vx: 100
      });
      //this.add('2d')
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

  Q.Collectible.extend('Leaf', {
    hitPlayerEvent: function(collision) {
      this._super(collision);
      Q.addScore(3);
    }
  });

  Q.Collectible.extend('Booze', {
    hitPlayerEvent: function(collision) {
      this._super(collision);
      Q.addScore(10);
    }
  });
};
