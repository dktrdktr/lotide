// Shallow array equality check, not checking for nested arrays or arrays of objects that are identical.
const eqArrays = function(arr1, arr2) {
  if (
    !Array.isArray(arr1) ||
    !Array.isArray(arr2) ||
    arr1.length !== arr2.length
  )
    return false;
  for (let n in arr1) {
    if (arr1[n] !== arr2[n]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([3, 4, 5], [3, 4, 5]);
assertArraysEqual([3, 4, 5], [3, 4, 6]);
