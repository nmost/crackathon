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
    stage.add("viewport").follow(player);
    stage.insert(new Q.Cop({x: 700, y: 0}))
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


};
