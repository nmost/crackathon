init = function(){
  Q = Quintus({ development: false })      
    .include("Sprites, Scenes, Input, Anim,  2D, Touch, UI")
    .setup({
      maximize: true
    })
    .controls();
  initializeGame();
  initializeUtil();
  initializePlayer();
  initializeCollectibles();
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
    Q.stageGameStats = Q.stageScene('gameStats', 1);
  });

  Q.state.set({ score: 0, publicOpinion: 100 });
  Q.state.on('change.score', this,  function() {
    Q.stageGameStats.changeScore(Q.state.get('score'));
  });
  Q.state.on('change.publicOpinion', this,  function() {
    Q.stageGameStats.changePublicOpinion(Q.state.get('publicOpinion'));
  });

}; 

window.onload = function() {
  init();
};


var gameLoop = funciton() {

};
