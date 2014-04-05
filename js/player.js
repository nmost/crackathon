var initializePlayer = function() {
  $Q.Sprite.extend("Player", {
    init: function(p) {
      this._super(p, {
        sheet: "player",
        x: 410,
        y: 90
      });
      this.add('2d, platformerControls');
      this.on("hit.sprite",function(collision) {
        if(collision.obj.isA("Tower")) {
          Q.stageScene("endGame",1, { label: "You Won!" }); 
          this.destroy();
        }
      });
    } 
  });
};
