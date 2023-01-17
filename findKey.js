const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  const keys = Object.keys(object);
  //console.log(keys)// returns an array of the keys
  //loops through the array of keys
  for (let key of keys) {
    // if the stars call back is true (equal to 2) 
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey; 

//TEST CODE
// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2)); // => "noma"
