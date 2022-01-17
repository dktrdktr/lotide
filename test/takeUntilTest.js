const takeUntil = require("../takeUntil");
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertEqual(eqArrays(results1, [1, 2, 5, 7, 2]), true);
assertEqual(eqArrays(results2, ["I've", "been", "to", "Hollywood"]), true);
