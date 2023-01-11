const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray){

  if (firstArray.length !== secondArray.length){
    return false
  } 
    //looping through array
    for (let i=0; i < firstArray.length; i++){ 
      if(firstArray[i] !== secondArray[i]){
        return false; 
      } 
    }
    return true;
}



console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false