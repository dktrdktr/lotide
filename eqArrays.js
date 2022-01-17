const eqArrays = function (arr1, arr2) {
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

module.exports = eqArrays;
