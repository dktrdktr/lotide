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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let letterIndex in sentence) {
    if (sentence[letterIndex] !== " ") {
      if (!Object.keys(results).includes(sentence[letterIndex])) {
        results[sentence[letterIndex]] = [Number(letterIndex)];
      } else {
        results[sentence[letterIndex]].push(Number(letterIndex));
      }
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house")["l"], [0]);
assertArraysEqual(letterPositions("lighthouse in the house")["i"], [1, 11]);
assertArraysEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);
