// Shallow array equality check, not checking for nested arrays or arrays of objects that are identical.
const eqArrays = function (arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
  for (let n in arr1) {
    if (arr1[n] !== arr2[n]) return false;
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
