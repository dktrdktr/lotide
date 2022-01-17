const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let letterIndex in sentence) {
    if (sentence[letterIndex] !== " ") {
      if (!Object.keys(results).includes(sentence[letterIndex])) {
        results[sentence[letterIndex]] = [Number(letterIndex)];
      } else {
        results[sentence[letterIndex]].push(Number(letterIndex));
      }
    }
  }
  return results;
};

module.exports = letterPositions;
