const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};


const string = `lighthouse in the house`;

const countLetters = function (str){

  const object = {};
  
  const removeSpace = str.split(" ").join("")
  
  for (letter of removeSpace){
    // if letter does not exist in the object, create it and set it to 1
    if (!object[letter]) {
      object[letter]= 0; 
    }
    // if it does exist, increment it by 1
    object[letter] ++; 
  }
  
  

  return object;

}

console.log(countLetters(string));