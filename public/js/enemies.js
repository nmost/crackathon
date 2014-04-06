var initializeEnemies = function(){
  Q.Sprite.extend('Enemy', {
    init: function(p) {
      this._super(p, {
        sheet: 'popo',
        sprite: 'popo',
        vx: 100
      });
      this.add('2d, aiBounce, animation');

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
  
    step: function(dt) {
      if (this.p.vx > 0) {
        this.play("run_right");
      } else if (this.p.vx < 0) {
        this.play("run_left");
      } else {
        this.play("stand_" + this.p.direction);
      }
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
      Q.decPublicOpinion(1);
    } 
  });

  Q.Enemy.extend('Councilman', {
    hitPlayerEvent: function(collision){
      this._super(collision);
      Q.endGame("Game over. You have been impeached");
    } 
  });
  
};
