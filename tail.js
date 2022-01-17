const tail = function (arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  }
  let arrCopy = [...arr];
  arrCopy.shift();
  return arrCopy;
};

module.exports = tail;
