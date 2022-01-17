const takeUntil = (data, callback) => {
  let result = [];
  for (let item of data) {
    if (callback(item)) break;
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;
