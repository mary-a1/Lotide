const eqArrays = function(firstArray, secondArray) {

  if (firstArray.length !== secondArray.length) {
    return false;
  }
  //looping through array
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

//Test Code

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// console.log(assertEqual(eqArrays([4, 5, 6], [4, 5, 6]), true)); //=> should PASS
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));// => should PASS
