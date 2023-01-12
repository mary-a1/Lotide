const eqObjects = function (object1, object2) {
  // we are checking if they have same number of keys
  if (Object.keys(object1).length == Object.keys(object2).length) {
    // we are looping each key for object 1
    for (let key in object1) {
      // if the same key exists (truthy)
      if (object2[key]) {
        // checking if the values in the key are equal
        if (object2[key] !== object1[key]) {
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

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    return `✅✅✅ Comparison Passed:  ${inspect(actual)} ===  ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑 Comparison Failed:  ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

console.log(assertObjectsEqual({a:1, b:2, c:3},{a:1, b:2, c:3}));
console.log(assertObjectsEqual({a:1, b:2, c:3},{a:1, b:1, c:3}));
