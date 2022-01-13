// Shallow array equality check, not checking for nested arrays or arrays of objects that are identical.
const eqArrays = function (arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
  for (let n in arr1) {
    if (arr1[n] !== arr2[n]) return false;
  }
  return true;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      `${String.fromCodePoint(
        0x1f604
      )} Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(
      `${String.fromCodePoint(
        0x1f621
      )} Assertion Failed: ${actual} !== ${expected}`
    );
  }
};

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
