const eqObjects= require('./eqObjects');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    return `✅✅✅ Comparison Passed:  ${inspect(actual)} ===  ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑 Comparison Failed:  ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

//TEST CODE
// console.log(assertObjectsEqual({a:1, b:2, c:3},{a:1, b:2, c:3}));
// console.log(assertObjectsEqual({a:1, b:2, c:3},{a:1, b:1, c:3}));

module.exports= assertObjectsEqual;