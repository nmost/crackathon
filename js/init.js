init = function(){
  var $Q = Quintus()      
    .include("Sprites, Scenes, Input, 2D, Touch, UI")
    .setup()
    .controls();
  initializeGame();
  initializePlayer();
}; 
