const assertArraysEqual = function(firstArray, secondArray){
  if (eqArrays(firstArray, secondArray) === true){
    return(`✅✅✅ Comparison Passed:  ${firstArray} ===  ${secondArray}`);
  } else {
    return(`🛑🛑🛑 Comparison Failed:  ${firstArray} !== ${secondArray}`);
  }
  
}

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
assertArraysEqual(letterPositions("hello").e, [1]);
