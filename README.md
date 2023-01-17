# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mary-a1/lotide`

**Require it:**

`const _ = require('@mary-a1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual():`: a function which will take in two arrays and console.log an appropriate message to the console.
* `assertEqual`: a function that compares two values it takes in and print out a message telling us if they match or not.
* `eqArrays`: a function which takes in two arrays and returns true or false, based on a perfect match.
* `head`: a function which returns the first item in the array.
* `middle`: a function which will take in an array and return the middle-most element(s) of the given array.
* `tail`: a function which returns the "tail" of an array: everything except for the first item (head) of the provided array.