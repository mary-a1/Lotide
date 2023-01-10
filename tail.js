const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  let newArray = [];

  for (let i = 1; i < array.length; i++) {
    newArray.push[i];
  }
  return newArray;
};

const test1 = tail([1, 2, 3]);
assertEqual(test1, [1, 2, 3]);
console.log(test1);

const test2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(test2, ["Lighthouse", "Labs"]);
console.log(test2);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!