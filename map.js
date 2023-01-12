const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const eqArrays = function (firstArray, secondArray) {
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

const assertArraysEqual = function (firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    return `✅✅✅ Comparison Passed:  ${firstArray} ===  ${secondArray}`;
  } else {
    return `🛑🛑🛑 Comparison Failed:  ${firstArray} !== ${secondArray}`;
  }
};

const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word[word.length-1])
const results3 = map(words, (word) => word.length)

// => testing first letter of word
console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"])); 
// => testing last letter of word
console.log(assertArraysEqual(results2, ["d", "l", "o", "r", "m"])); 
// testing the length
console.log(assertArraysEqual(results3, [6, 7, 2, 5, 3])); 

