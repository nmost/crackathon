initializeAudio = function(){
  Q.audioFiles = {
    startGame:[
      'crack_cocaine.mp3',
      'meet_you.mp3',
      'drunken_stupours.mp3'
    ],
    hitJournalist: [
      'best_father.mp3',
      'enough.mp3'
    ],
    hitPopo: [
      'oriental_flavour.mp3' 
    ],
    endGame: [
      'yes_smoked_crack.mp3',
      'billion.mp3',
      'disaster.mp3'
    ],
    jumpSound: [
      'jump_sound.mp3'   
    ],
    getLeaf: [
         
    ],
    getBooze: [
      
    ],
    destroyJournalist:[],
    destroyPopo:[]
  };

  Q.audioAssetsToArray = function(){
    var arr = [];
    for(var key in (Q.audioFiles)){
      arr = arr.concat(Q.audioFiles[key]);
    }
    return arr;
  };

  Q.audioStartGame = function() {
    Q.playAudio(Q.selectRandomItemFromArray(Q.audioFiles.startGame));
  };

  Q.audioHitJournalist = function() {
    Q.playAudio(Q.selectRandomItemFromArray(Q.audioFiles.hitJournalist));
  };
  Q.audioHitPopo = function() {
    Q.playAudio(Q.selectRandomItemFromArray(Q.audioFiles.hitPopo));
  };

  Q.audioPlayerJump = function() {
    Q.playAudio(Q.selectRandomItemFromArray(Q.audioFiles.jumpSound));
  };
  Q.audioEndGame = function() {
    Q.playAudio(Q.selectRandomItemFromArray(Q.audioFiles.endGame));
  };

  Q.audioDestroyPopo = function(){};
  Q.audioDestroyJournalist = function(){};
  Q.audioGetLeaf = function(){
    Q.playAudio(Q.selectRandomItemFromArray(Q.audioFiles.getLeaf));
  };
  Q.audioGetBooze = function(){
    Q.playAudio(Q.selectRandomItemFromArray(Q.audioFiles.getBooze));
  };

  Q.playAudio = function(mp3File){
    try{
      Q.audio.stop(); 
      Q.audio.play(mp3File, 1);
    }catch(e){
    };
  };

};
