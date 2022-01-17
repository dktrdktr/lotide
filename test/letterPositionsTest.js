const letterPositions = require("../letterPositions");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(letterPositions("lighthouse in the house")["l"], [0]);
assertArraysEqual(letterPositions("lighthouse in the house")["i"], [1, 11]);
assertArraysEqual(
  letterPositions("lighthouse in the house")["h"],
  [3, 5, 15, 18]
);
