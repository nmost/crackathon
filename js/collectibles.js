var initializeCollectibles = function() {
  Q.Sprite.extend('Collectible', {
    init: function(p, option) {
      option.vx = 100;
      this._super(p, option);
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
    init: function(p){
      var option = {
        sprite: 'crack',
        sheet: 'crack' 
      };      
      this._super(p, option);
    },
    hitPlayerEvent: function(collision) {
      this._super(collision);
      Q.addScore(1);
    }
  });

  Q.Collectible.extend('Leaf', {
    init: function(p){
      var option = {
        sprite: 'leaf',
        sheet: 'leaf' 
      };      
      this._super(p, option);
    },

    hitPlayerEvent: function(collision) {
      this._super(collision);
      Q.addScore(3);
      Q.audioGetLeaf();
    }
  });

  Q.Collectible.extend('Booze', {
    init: function(p){
      var option = {
        sprite: 'booze',
        sheet: 'booze' 
      };      
      this._super(p, option);
    },


    hitPlayerEvent: function(collision) {
      this._super(collision);
      Q.addScore(10);
      Q.audioGetBooze();
    }
  });
};
