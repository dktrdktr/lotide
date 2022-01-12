const countLetters = function(str) {
  str = str.replace(/\s/g, '');
  return str.split("").reduce((result, item) => {
    if (!result.hasOwnProperty(item)) {
      result[item] = 1;
    } else {
      result[item] += 1;
    }
    return result;
  }, {});
};
