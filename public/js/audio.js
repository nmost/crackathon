initializeAudio = function(){
  Q.audioFiles = {
    startGame:[
      'crack_cocaine.mp3',
      'meet_you.mp3'
    ],
    hitJournalist: [
      'best_father.mp3'
    ],
  };

  Q.audioAssetsToArray = function(){
    var arr = [];
    for(var key in (Q.audioFiles)){
      arr = arr.concat(Q.audioFiles[key]);
    }
    return arr;
  };

  Q.audioStartGame = function() {
    Q.audio.play(Q.selectRandomItemFromArray(Q.audioFiles.startGame));
  };

};
