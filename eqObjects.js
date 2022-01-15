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
// Does not implement equality check for objects as values
// Does not exclude null, arrays or functions
const eqObjects = function(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    Object.keys(obj1).length !== Object.keys(obj2).length
  ) {
    return false;
  }
  for (let key of Object.keys(obj1)) {
    switch (Array.isArray(obj1[key])) {
    case true:
      console.log("case true");
      if (!eqArrays(obj1[key], obj2[key])) return false;
      break;
    case false:
      console.log("case false");
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
