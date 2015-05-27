describe('isLetterVowel', function() {
  it("checks to see if the letter is a vowel", function() {
    expect(isLetterVowel("a")).to.equal(true);
  });
});

describe('translate', function() {
  it("adds 'ay' and the first letter to the end of a word that starts with a vowel", function() {
    expect(translate("apple")).to.equal("ppleaay");
  });

  it("adds 'ay' and 'qu' to the end of a word that starts with 'qu' and removes 'qu'", function() {
    expect(translate("quiet")).to.equal("ietquay");
  });

  it("takes the first two letters and adds them to the end and adds 'ay' when the first two letters are consonants", function() {
    expect(translate("trash")).to.equal("ashtray");
  });

  it("takes the first letter and adds it to the end with 'ay' when the first letter is a consonant and the second is a vowel.", function() {
    expect(translate("vowel")).to.equal("owelvay");
  });
  it("takes the first three letters and adds them to the end and adds 'ay' when the first three letters are consonants", function() {
    expect(translate("schism")).to.equal("ismschay");
  });
});

describe('translatePhrase', function() {
  it('translates all words of a sentence', function() {
    expect(translatePhrase("hello world")).to.equal("ellohay orldway");
  });
});
