initializeAudio = function(){
  Q.audioFiles = {
    startGame:['crack_cocaine.mp3'] 
  };

  Q.audioStartGame = function() {
    Q.audio.play(Q.audioFiles.startGame[0]); 
  };

};
