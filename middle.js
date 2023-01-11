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

const assertArraysEqual = function(firstArray, secondArray){
  if (eqArrays(firstArray, secondArray) === true){
    return(`✅✅✅ Comparison Passed:  ${firstArray} ===  ${secondArray}`);
  } else {
    return(`🛑🛑🛑 Comparison Failed:  ${firstArray} !== ${secondArray}`);
  }
  
}

const middle = function(array){

let result = [];

let arrayStart;

if (array.length % 2 === 0){
  arrayStart = array.length/2 - 1;
  result.push(array[arrayStart]);
  result.push(array[arrayStart + 1]);
} else {
  arrayStart = Math.floor(array.length/2);
  result.push(array[arrayStart]);
}

return result;
}

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6,])) // => [3, 4]