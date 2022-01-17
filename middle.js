const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function (arr) {
  if (arr.length < 3) {
    return [];
  }
  let middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
  return arr.slice(middleIndex, middleIndex + 1);
};

module.exports = middle;
