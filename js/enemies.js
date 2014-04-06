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
          this.hitPlayerEvent(); 
        }
      });
     this.on("bump.top",function(collision) {
       if(collision.obj.isA("Player")) { 
         this.destroy();
         collision.obj.p.vy = -300;
       }
     });
    },
  
    hitPlayerEvent: function(p) {
    } 
  });


  Q.Enemy.extend('Cop', {
    hitPlayerEvent: function(p){
      this._super(p);
    } 
  });
};
