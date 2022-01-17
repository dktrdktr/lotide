const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Implements equality check for objects as values
// Not for functions as object values
const eqObjects = function (obj1, obj2) {
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

module.exports = eqObjects;
