var initializeGame = function(){ 
  /*
   * First stage
   */
  Q.scene('level1', function(stage) {
    stage.insert(new Q.Repeater({ asset: "background.jpg", speedX: 0.5, speedY: 0.5 }));
    stage.collisionLayer(new Q.TileLayer({
      dataAsset: 'level.json',
      sheet: 'tiles',
      blockTileW: 10,  // Default pre-render size
      blockTileH: 10
    }));

    var player = stage.insert(new Q.Player()); 
    stage.insert(new Q.Journalist({ x: 700, y: 0 }));
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

    button.on('touch', function() {
      Q.clearStage(0);
      Q.stageScene("level1");
    });


    container.insert(button);
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

    var lives = stage.insert(new Q.UI.Text({ 
      label: "Lives x 3",
        color: "white",
        x: -300,
        y: 0
    }),statsContainer);

    var coins = stage.insert(new Q.UI.Text({ 
      label: "Coins x 0",
        color: "white",
        x: 300,
        y: 0
    }),statsContainer);
  });
  


};
