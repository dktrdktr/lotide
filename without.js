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

const without = function(source, itemsToRemove) {
  let result = [];
  for (let n of source) {
    if (!itemsToRemove.includes(n)) {
      result.push(n);
    }
  }
  return result;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without(["dog", "cow", "fox"], ["dog", "fox"]), ["cow"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
