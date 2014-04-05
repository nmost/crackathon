init = function(){
  Q = Quintus({ development: true })      
    .include("Sprites, Scenes, Input, 2D, Touch, UI")
    .setup({
      maximize: true
    })
    .controls();
  initializeGame();
  initializePlayer();
  Q.load('sprites.png, sprites.json, level.json, tiles.png', function() {
    Q.compileSheets("sprites.png","sprites.json" ); 
    Q.sheet("tiles","tiles.png", { tilew: 32, tileh: 32 });
    Q.stageScene('level1');
  });
}; 

window.onload = function() {
  init();
};
