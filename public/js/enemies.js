var initializeEnemies = function(){
  Q.Sprite.extend('Enemy', {
    init: function(p, options) {
      options.vx = 100;
      this._super(p, options);
      this.add('2d, aiBounce, animation');
      this.canHit = true;
      this.on("bump.left,bump.right,bump.bottom",function(collision) {
        if(collision.obj.isA("Player") && this.canHit) { 
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
      this.canHit = false;
      var that = this;
      window.setTimeout(function(){
        that.canHit = true;
      },500);
    } 
  });


  Q.Enemy.extend('Popo', {
    init: function(p){
      var options = {
        sprite : 'popo',
        sheet : 'popo' 
      }
      this._super(p, options); 
      
    },

    hitPlayerEvent: function(collision){
      this._super(collision);
      Q.decScore(1); 
      Q.audioHitPopo();
    } 
  });

  Q.Enemy.extend('Journalist', {
    init: function(p){
      var options = {
        sprite : 'journalist',
        sheet : 'journalist' 
      }       
      this._super(p, options);
    },
    hitPlayerEvent: function(collision){
      this._super(collision);
      Q.decPublicOpinion(1);
      Q.publicOpinionColorFlash = "red";
      Q.audioHitJournalist();
    } 
  });


  
};
