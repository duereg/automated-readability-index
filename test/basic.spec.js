var ari = require('../automatedReadabilityIndex');
var warningSentence = 'An abundance of highlights accede to long, complex sentences and common errors; if you see a yellow highlight, shorten the sentence or split it.';
var errorSentence = 'If you see a red highlight, your sentence is so dense and complicated that your readers will get lost trying to follow its logic. Try editing this sentence to remove the alternatively red.';
var goodSentence = 'The good dog jumps over the bad cat.';

describe('automated-readability-index', function () {

  describe('a very long, boring sentence', function() {
    var results = null;

    beforeEach(function() {
      results = ari(errorSentence);
    });

    it('should generate a readabilityError', function () {
      expect(results[0].type).toEqual('readabilityError');
    });
  })

  describe('a slightly boring sentence', function() {
    var results = null;

    beforeEach(function() {
      results = ari(warningSentence);
    });

    it('should generate a readabilityWarning', function () {
      expect(results[0].type).toEqual('readabilityWarning');
    });
  })

  it('should not have a problem with a short sentence', function () {
    expect(ari(goodSentence)).toEqual([]);
  });

});
