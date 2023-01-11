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


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]