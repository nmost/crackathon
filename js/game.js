var initializeGame = function(){ 
      'best_father.mp3',
  /*
   * First stage
   */
  Q.scene('level1', function(stage) {
    stage.add('world');
    stage.insert(new Q.Repeater({ 
      asset: "background.jpg", 
      speedX: 0.0, 
      speedY: 0.0,
      x: -500,
      repeatX: true
    }));
    stage.collisionLayer(new Q.TileLayer({
      dataAsset: 'level.json',
      sheet: 'tiles',
      tileW: 20,
      tileH: 20,
      blockTileW: 10,  // Default pre-render size
      blockTileH: 10
    }));
  //ACTUAL START
    var player = stage.insert(new Q.Player({x:100, y:0})); 
    //var player = stage.insert(new Q.Player({x:2500, y:0})); 
    //stage.insert(new Q.Popo({ x:700, y: 0 }));
    stage.add("viewport").follow(player);
  });

  

  Q.scene('startGame', function(stage) {
    container = stage.insert(new Q.UI.Container({
      x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0.5)"
    }));   

    var button = new Q.UI.Button({ 
      x: 0, 
      y: 0, 
      fill: "#CCCCCC",
      label: "Play Again" 
    });

    button.on('click', function() {
      Q.clearStage(0);
      Q.stageScene("level1");
    });


    container.insert(button);
    container.fit(20);
    
  });



  Q.scene('endGame',function(stage) {
    document.getElementById("tweetLink").href = "https://twitter.com/share/?url=http%3A%2F%2Fwww.robfordthegame.com&text=I%20just%20partied%20to%20" + Q.stageGameStats.score + "%20in%20Rob%20Ford%3A%20The%20Game!"
    document.getElementById("gameOver").style.display="block";
    Q.pauseGame();
    document.getElementById("score").innerHTML = Q.stageGameStats.score;
    window.setTimeout( function() { location.reload(); }, 5000);
    Q.clearStages();
  });

  Q.scene("gameStats", function(stage) {
    var statsContainer = stage.insert(new Q.UI.Container({
        fill: "black",
       /* x: 960/2,
        y: 620,*/
        x:Q.width/2,
        y:20,
        border: 1,
        w: 960,
        h: 40
      })
    );

    this.score = 0;
    stage.changeScore = function(score, color){
      stage.lives.p.label = "Party Score:" + score;
      this.score = score;
      if (color != null){
        stage.lives.p.color = color;
        setTimeout(function(){
          stage.lives.p.color = "white"; 
        }, 200);
      }
      
    };
    stage.changePublicOpinion = function(po, color){
      stage.publicOpinion.p.label = "Public Opinion:" + po;
      if (color != null){
        stage.publicOpinion.p.color = color;
        setTimeout(function(){
          stage.publicOpinion.p.color = "white"; 
          Q.publicOpinionColorFlash = "white";
        }, 200);
      }
    };

    stage.lives = stage.insert(new Q.UI.Text({ 
        label: "Party Level:0",
        color: "white",
        x: -300,
        y: 0
    }),statsContainer);

    stage.publicOpinion = stage.insert(new Q.UI.Text({ 
      label: "Public Approval:" + Q.state.get('publicOpinion'),
        color: "white",
        x: 300,
        y: 0
    }),statsContainer);
  });
  


};
