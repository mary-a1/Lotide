const eqArrays= require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

const without = function (items, itemsToRemove){
  let array = []


  for (const item of items){
    if (!itemsToRemove.includes(item)){
      // to copy array
      array.push(item);
    }
   
  }
  return array;

}

module.exports = without;

//TEST CODE
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]