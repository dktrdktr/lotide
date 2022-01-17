const assertEqual = function (actual, expected) {
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

module.exports = assertEqual;
