const eqArrays= require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;

// //Test Code
// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, (word) => word[0]);
// const results2 = map(words, (word) => word[word.length-1])
// const results3 = map(words, (word) => word.length)

// // => testing first letter of word
// console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"])); 
// // => testing last letter of word
// console.log(assertArraysEqual(results2, ["d", "l", "o", "r", "m"])); 
// // testing the length
// console.log(assertArraysEqual(results3, [6, 7, 2, 5, 3])); 

