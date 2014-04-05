var initializeGame = function(){ 
  Q.scene('level1', function(stage) {
    stage.collisionLayer(new Q.TileLayer({
      dataAsset: 'level.json',
      sheet: 'tiles'
    }));

    stage.insert(new Q.Player()); 
  });
};
