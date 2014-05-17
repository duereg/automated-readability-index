var getAutomatedReadabilityIndex = function(numOfWords, numOfCharacters) {
  return Math.round(4.75 * (numOfCharacters / numOfWords) + 0.5 * numOfWords - 21.43);
};

var getBadReadingLevels = function(text) {
  var sentences = text.split('\n');
  var currentIndex = 0;
  var results = [];
  var readabilityType = null;

  sentences.forEach(function(sentence){
    if(sentence.length) {

      var words = sentence.replace(/['";:,.?¿\-\—!¡]+/g, '').match(/\S+/g);
      var numOfWords = 0;
      if (words) {
        numOfWords = words.length;
      };
      var numOfCharacters = sentence.replace(/\s/g, '').length;
      var readability = getAutomatedReadabilityIndex(numOfWords, numOfCharacters);

      if (readability > 12 && readability <= 16 && numOfWords > 14) {
        readabilityType = "Warning"
      } else if (readability > 16 && numOfWords > 14) {
        readabilityType = "Error"
      }

      if(readabilityType) {
        results.push({type: "readability" + readabilityType, match: sentence, index: currentIndex, offset: sentence.length - 1, end: currentIndex + sentence.length - 1})
      }

      currentIndex += sentence.length + 1;
    } else {
      currentIndex++;
    }
    readabilityType = null;
  });

  return results;
};

module.exports = getBadReadingLevels;
