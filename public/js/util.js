initializeUtil = function() {
  Q.selectRandomItemFromArray = function(array){
    var a=  array[Q.randomNumber(0, array.length-1)]; 
    return a;
  };

  Q.randomNumber = function(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
   
  };
};
