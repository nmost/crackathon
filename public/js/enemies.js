var initializeEnemies = function(){
  Q.Sprite.extend('Enemy', {
    init: function(p) {
      this._super(p, {
        sheet: 'enemy',
        vx: 100
      });
      this.add('2d, aiBounce');

      this.on("bump.left,bump.right,bump.bottom",function(collision) {
        if(collision.obj.isA("Player")) { 
          this.hitPlayerEvent(collision); 
        }
      });
     this.on("bump.top",function(collision) {
       if(collision.obj.isA("Player")) { 
         this.destroy();
         collision.obj.p.vy = -300;
       }
     });
    },
  
    hitPlayerEvent: function(collision) {
      collision.obj.p.vx = -300;
    } 
  });


  Q.Enemy.extend('Popo', {
    hitPlayerEvent: function(collision){
      this._super(collision);
      Q.decScore(1); 
    } 
  });

  Q.Enemy.extend('Journalist', {
    hitPlayerEvent: function(collision){
      this._super(collision);
      Q.state.dec('publicOpinion', 1);
    } 
  });

  Q.Enemy.extend('Councilman', {
    hitPlayerEvent: function(collision){
      this._super(collision);
      Q.endGame("Game over. You have been impeached");
    } 
  });
  
};
