const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined || arr2 === undefined) {
    return false;
  } else if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }
  for (let n in arr1) {
    if (arr1[n] !== arr2[n])
      return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(arr) {
  let newArr = [];
  for (let n of arr) {
    if (Array.isArray(n) === true) {
      for (let m of n) {
        newArr.push(m);
      }
    } else {
      newArr.push(n);
    }
  }
  return newArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, []]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten(["eggs", ["sweets", "cheese"]]), ["eggs", "sweets", "cheese"]);
