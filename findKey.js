const findKey = (obj, callback) => {
  return Object.keys(obj).find((item) => callback(obj[item]));
};

module.exports = findKey;
