init = function(){
  Q = Quintus({ 
      development: false,
      audioSupported: ['mp3']
    })      
    .include("Sprites, Scenes, Input, Anim,  2D, Touch, UI, Audio")
    .enableSound()
    .setup({
      maximize: true
    })
    .controls();
  initializeGame();
  initializeEvent();
  initializeAudio();
  initializePlayer();
  initializeCollectibles();
  initializeEnemies();
  
  load();
  initializeStates();
}; 


var load = function(){
  var assets = [
    'sprites.png', 
    'sprites.json', 
    'level.json', 
    'tiles.png', 
    'background.jpg'
    'crack_cocaine.mp3'
  ];

  Q.load(assets, function() {
    Q.compileSheets("sprites.png","sprites.json" ); 
    Q.sheet("tiles","tiles.png", { tilew: 20, tileh: 20 });
    Q.stageScene('level1');
    Q.stageGameStats = Q.stageScene('gameStats', 1);
    Q.audioStartGame();
    Q.startCountDownScore();
  });

  Q.animations('player', {
    stand_left: { frames: [0], rate: 1/5 },
    stand_right: { frames: [3], rate: 1/5 },
    run_left: { frames: [1,0,2], rate: 1/5 },
    run_right: { frames: [4,3,5], rate: 1/5 }
  });
  Q.animations('popo', {
    stand_left: { frames: [0], rate: 1/2 },
    stand_right: { frames: [3], rate: 1/2 },
    run_left: { frames: [1,0,2], rate: 1/2 },
    run_right: { frames: [4,3,5], rate: 1/2 },
    die: {frames: [6], loop: false, rate: 1 }
  });
}; 

var initializeStates = function(){
  Q.state.set({ score: 0, publicOpinion: 100 });
  Q.state.on('change.score', this,  function() {
    Q.stageGameStats.changeScore(Q.state.get('score'));

  });
  Q.state.on('change.publicOpinion', this,  function() {
    Q.stageGameStats.changePublicOpinion(Q.state.get('publicOpinion'));
    if (Q.state.get('publicOpinion') == 0){
      Q.endGame(); 
    }
  });


}

window.onload = function() {
  init();
};

