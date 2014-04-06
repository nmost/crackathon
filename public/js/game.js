var initializeGame = function(){ 
  /*
   * First stage
   */
  Q.scene('level1', function(stage) {
    stage.add('world');
    stage.insert(new Q.Repeater({ asset: "background.jpg", speedX: 0.5, speedY: 0.5 }));
    stage.collisionLayer(new Q.TileLayer({
      dataAsset: 'level.json',
      sheet: 'tiles',
      tileW: 10,
      tileH: 10,
      blockTileW: 10,  // Default pre-render size
      blockTileH: 10
    }));

    var player = stage.insert(new Q.Player()); 
    //stage.insert(new Q.Popo({ x:700, y: 0 }));
    stage.insert(new Q.Journalist({ x: 300, y: 0 }));
    stage.insert(new Q.Councilman({ x: 200, y: 0 }));
    stage.insert(new Q.Crack({ x: 25, y: -100 }));
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
    var container = stage.insert(new Q.UI.Container({
      x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0.5)"
    }));

    var button = container.insert(new Q.UI.Button({ 
      x: 0, 
      y: 0, 
      fill: "#CCCCCC",
      label: "Play Again" 
    }));
    var label = container.insert(new Q.UI.Text({
      x:10, 
        y: -10 - button.p.h, 
      label: stage.options.label 
    }));
    button.on("click",function() {
      Q.clearStages();
      Q.stageScene('level1');
    });

    container.fit(20);
  });

  Q.scene("gameStats", function(stage) {
    var statsContainer = stage.insert(new Q.UI.Container({
        fill: "gray",
        x: 960/2,
        y: 620,
        border: 1,
        shadow: 3,
        shadowColor: "rgba(0,0,0,0.5)",
        w: 960,
        h: 40
      })
    );

    stage.changeScore = function(score){
      stage.lives.p.label = "Party Score:" + score;
    };
    stage.changePublicOpinion = function(po){
      stage.publicOpinion.p.label = "Public Opinion:" + po;
    };

    stage.lives = stage.insert(new Q.UI.Text({ 
        label: "Party Score:0",
        color: "white",
        x: -300,
        y: 0
    }),statsContainer);

    stage.publicOpinion = stage.insert(new Q.UI.Text({ 
      label: "Public Opinion:" + Q.state.get('publicOpinion'),
        color: "white",
        x: 300,
        y: 0
    }),statsContainer);
  });
  


};
