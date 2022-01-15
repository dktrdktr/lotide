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

// Returns true if both objects have identical keys with identical values.
// Implements equality check for objects as values
// Excludes arrays
// Not yet tested on null or functions as values
const eqObjects = function(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    Array.isArray(obj1) ||
    Array.isArray(obj2) ||
    Object.keys(obj1).length !== Object.keys(obj2).length
  ) {
    return false;
  }
  const eqObjectsShallow = () => {
    for (let key of Object.keys(obj1)) {
      switch (Array.isArray(obj1[key])) {
      case true:
        if (!eqArrays(obj1[key], obj2[key])) return false;
        break;
      case false:
        if (obj1[key] !== obj2[key]) return false;
      }
    }
    return true;
  };
  // base case
  const containsObjects =
    Object.values(obj1).find((val) => typeof val === "object") !== undefined;
  if (!containsObjects) {
    return eqObjectsShallow();
  }
  //recursive case
  for (let key of Object.keys(obj1)) {
    if (typeof obj1[key] === "object") {
      return eqObjects(obj1[key], obj2[key]);
    }
    return eqObjectsShallow();
  }
};

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

// objects as values
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// => true
assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
