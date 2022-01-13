// Shallow array equality check, not checking for nested arrays or arrays of objects that are identical.
const eqArrays = function (arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
  for (let n in arr1) {
    if (arr1[n] !== arr2[n]) return false;
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Example label: ${inspect(actual)}`);
    console.log(
      `${String.fromCodePoint(0x1f604)} Assertion Passed: ${inspect(
        actual
      )} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `${String.fromCodePoint(0x1f621)} Assertion Failed: ${inspect(
        actual
      )} === ${inspect(expected)}`
    );
  }
};
assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });
