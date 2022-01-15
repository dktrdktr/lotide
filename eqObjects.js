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

// Returns true if both objects have identical keys with identical values.
// Implements equality check for objects as values
// Not for functions as object values
const eqObjects = function(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    Object.keys(obj1).length !== Object.keys(obj2).length
  ) {
    return false;
  }
  for (let key of Object.keys(obj1)) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else if (typeof obj1[key] === "object") {
      if (!eqObjects(obj1[key], obj2[key])) return false;
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};

// TEST CASES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// => true
assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { y: {k: 1}, z: 1 }, b: 2 }, { a: { y: {k: 1}, z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: {k: 2}, z: 1 }, b: 2 }, { a: { y: {k: 1}, z: 1 }, b: 2 }), false);
assertEqual(eqObjects(
  { a: { y: {}, z: 1 }, b: 2 },
  { a: { y: {}, z: 1 }, b: 2 }),
true);
assertEqual(eqObjects(
  { y: {}, z: 1 },
  { y: {}, z: {} }
),
false);

assertEqual(eqObjects(
  {a: [[2, 3], [4, 5]]},
  {a: [[2, 3], [4, 5]]}), true);

assertEqual(eqObjects(
  {a: [[2, 3], [4, 5]]},
  {a: [[2, 3], [4]]}), false);