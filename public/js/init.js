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
    'tiles.png', 
    'background.jpg'
  ];
  Q.load(assets, function() {
    Q.compileSheets("sprites.png","sprites.json" ); 
    Q.sheet("tiles","tiles.png", { tilew: 32, tileh: 32 });
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
