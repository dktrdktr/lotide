// Shallow array equality check, not checking for nested arrays or arrays of objects that are identical.
const eqArrays = function(arr1, arr2) {
  if (
    !Array.isArray(arr1) ||
    !Array.isArray(arr2) ||
    arr1.length !== arr2.length
  ) {
    return false;
  }
  for (let n in arr1) {
    if (Array.isArray(arr1[n])) {
      if (!eqArrays(arr1[n], arr2[n])) {
        return false;
      }
    } else if (arr1[n] !== arr2[n]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
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

assertEqual(eqArrays(
  [[2, 3], [4]],
  [[2, 3], [4]]
), true);
assertEqual(eqArrays(
  [[2, 3], [4]],
  [[2, 3], [4, 5]]), false);
assertEqual(eqArrays(
  [[2, 3], [4]],
  [[2, 3], 4]), false);
assertEqual(eqArrays(
  [[1, 2, [[3], 4]], 5, []],
  [[1, 2, [[3], 4]], 5, []]), true);
assertEqual(eqArrays(
  [[1, 2, [[], 4]], 5, []],
  [[1, 2, [[3], 4]], 5, []]), false);
assertEqual(eqArrays(
  [[[[[[[[[[[[[1]]]]]]]]]]]]],
  [[[[[[[[[[[[[1]]]]]]]]]]]]]), true);
assertEqual(eqArrays(
  [[[[[[[[[[[[[1]]]]]]]]]]]]],
  [[[[[[[[[[[[[2]]]]]]]]]]]]]), false);