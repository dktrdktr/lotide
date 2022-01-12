const countLetters = function (str) {
  let strArr = str.replace(/\s/g, "").split("");
  let result = {};
  for (let char of strArr) {
    if (!Object.keys(result).includes(char)) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }
  }
  return result;
};
