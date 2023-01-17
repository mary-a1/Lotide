const assertEqual = require('./assertEqual');


const findKeyByValue = function (shows, value){
  
  for (let item of Object.keys(shows)){
    if (shows[item] === value){
      return item;
    } 
  }
  
  return undefined;
  
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;

//TEST CODE
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);