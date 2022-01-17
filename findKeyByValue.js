const findKeyByValue = function (data, valToFind) {
  return Object.keys(data).find((key) => data[key] === valToFind);
};

module.exports = findKeyByValue;
