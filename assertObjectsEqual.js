const eqObjects = require("./eqObjects");

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

module.exports = assertObjectsEqual;
