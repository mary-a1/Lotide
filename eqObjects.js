const assertEqual = require('./assertEqual');


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  // we are checking if they have same number of keys
  if (Object.keys(object1).length == Object.keys(object2).length){
    // we are looping each key for object 1
    for (let key in object1){
      // if the same key exists (truthy)
      if (object2[key]){
        // checking if the values in the key are equal
        if (object2[key] !== object1[key]){
          return false;
        }
      } else { 
        // key is not the same (falsy)
        return false;
      }
    } 
    // if keys are the same and value
    return true;
  } else {
    return false;
  }

};
module.exports = eqObjects;

//TEST CODE
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false