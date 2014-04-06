initializeUtil = function(){

  Q.random = function(min,max) {
    return min + Math.random() * (max - min);
  };

  Q.endGame = function(){
    Q.stageScene("endGame",1, { label: "Game over.  You have been impeached." }); 
    collision.obj.destroy(); 
  };


  Q.addScore = function(incr){
    Q.state.inc('score', incr);
  };

  Q.decScore = function(decr){
    if(Q.state.get('score') > 0){
      Q.state.dec('score', 1);
    }

  };
        
};
