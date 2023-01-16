const middle = function(array) {

  let result = [];

  let arrayStart;

  if (array.length % 2 === 0) {
    arrayStart = array.length / 2 - 1;
    result.push(array[arrayStart]);
    result.push(array[arrayStart + 1]);
  } else {
    arrayStart = Math.floor(array.length / 2);
    result.push(array[arrayStart]);
  }

  return result;
};

module.exports= middle;

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6,])); // => [3, 4]