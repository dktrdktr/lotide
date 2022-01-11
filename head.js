const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F604)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F621)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");