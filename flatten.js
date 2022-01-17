const flatten = function (arr) {
  let newArr = [];
  for (let n of arr) {
    if (Array.isArray(n) === true) {
      for (let m of n) {
        newArr.push(m);
      }
    } else {
      newArr.push(n);
    }
  }
  return newArr;
};

module.exports = flatten;
