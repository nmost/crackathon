init = function(){
  Q = Quintus({ development: false })      
    .include("Sprites, Scenes, Input, Anim,  2D, Touch, UI")
    .setup({
      maximize: true
    })
    .controls();
  initializeGame();
  initializePlayer();
  initializeEnemies();
  var assets = [
    'sprites.png', 
    'sprites.json', 
    'level.json', 
    'tilesSmall.png', 
    'background.jpg'
  ];
  Q.load(assets, function() {
    Q.compileSheets("sprites.png","sprites.json" ); 
    Q.sheet("tiles","tilesSmall.png", { tilew: 10, tileh: 10 });
    Q.stageScene('level1');
    Q.stageScene('gameStats', 1);
  });

  Q.reset({ score: 0, lives: 2 });
  Q.state.on('change.score',this,  function() {
  });
}; 

window.onload = function() {
  init();
};
