const without = function (source, itemsToRemove) {
  let result = [];
  for (let n of source) {
    if (!itemsToRemove.includes(n)) {
      result.push(n);
    }
  }
  return result;
};

module.exports = without;
