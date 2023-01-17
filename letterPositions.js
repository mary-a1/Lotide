const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


// {
//   h: [0],
//   e: [1],
//   l: [2,3],
//   o: [4]
// }
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(i = 0; i < sentence.length; i++){
    if (results[sentence[i]]){ // if key exists
      // pushing index to existing key
      results[sentence[i]].push(i);
    } else {
      // create new key
      results[sentence[i]] = [i];
    }
  }
  console.log(results)
  return results;
};

module.exports = letterPositions;

//TEST CODE
// assertArraysEqual(letterPositions("hello").e, [1]);
