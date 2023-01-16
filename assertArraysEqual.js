
const assertArraysEqual = function(firstArray, secondArray){
  if (eqArrays(firstArray, secondArray) === true){
    console.log(`✅✅✅ Comparison Passed:  ${firstArray} ===  ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Comparison Failed:  ${firstArray} !== ${secondArray}`);
  }
}
module.exports = assertArraysEqual;


// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3])), true); // => should PASS
