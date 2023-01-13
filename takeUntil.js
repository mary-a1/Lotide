const takeUntil = function(array, callback) {
  const result = []

  for (let item of array){
    // if callback function is true
    if (callback(item)){
      return result  //stops and returns existing array
    } else {
      result.push(item) // otherwise continues pushing
    }
  }
}

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])); 
console.log(assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])); 
