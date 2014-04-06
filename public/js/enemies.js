var initializeEnemies = function(){
  Q.Sprite.extend('Enemy', {
    init: function(p) {
      this._super(p, {
        sheet: 'journalist',
        sprite: 'journalist',
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
         this.deathAnimation();
         collision.obj.p.vy = -300;
       }
     });
    },
    deathAnimation: function() {
      this.play("die", 10);
      var b = this;
      window.setTimeout(function() {
        b.destroy();
      }, 200);
    },
  
    step: function(dt) {
      if (this.p.vx > 0) {
        this.play("run_right", 0);
      } else if (this.p.vx < 0) {
        this.play("run_left", 0);
      } else {
        this.play("stand_" + this.p.direction, 0);
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
