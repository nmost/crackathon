initializeEvent = function(){

  Q.endGame = function(){
    Q.stageScene("endGame",1, { label: "Game over.  You have been impeached." }); 
    //collision.obj.destroy(); 
    document.body.appendChild('<p>hi</p>');
  };

  Q.startCountDownScore = function(){
    Q.timer = setInterval(function(){
      Q.decPublicOpinion(1); 
    }, 1000);
  };

  Q.stopCountDownScore = function(){
    window.clearInterval(Q.timer);
  };

  Q.addScore = function(incr){
    Q.state.inc('score', incr);
  };

  Q.decScore = function(decr){
    if(Q.state.get('score') > 0){
      Q.state.dec('score', 1);
    }
  };

  Q.decPublicOpinion = function(decr){
    Q.state.dec('publicOpinion', decr);
  };

  Q.eventLoadCrack = function(stage, x, y){
    stage.insert(new Q.Crack({x:x, y:y})); 
    stage.insert(new Q.Crack({ x: 190, y: 2000 }));
  };

        
};
