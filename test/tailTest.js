const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const tail = require('../tail');


const test1 = tail([1, 2, 3]);
assertArraysEqual(test1, [2, 3]);

const test2 = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(test2, ["Lighthouse", "Labs"]);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertArraysEqual(result[1], "Labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!