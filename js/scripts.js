var isLetterVowel = function(letter) {
  var vowels = ["a", "e", "i", "o", "u"]
  var answer = vowels.indexOf(letter)
  if (answer > -1) {
    return true;
} else {
    return false;
 }
};

var translate = function(word) {
  var firstLetter = word[0]
  var secondLetter = word[1]
  var thirdLetter = word[2]
  var firstTranslate = isLetterVowel(firstLetter)
  var secondTranslate = isLetterVowel(secondLetter)
  var thirdTranslate = isLetterVowel(thirdLetter)
  if (firstLetter + secondLetter === "qu") {
    return word.slice(2) + (firstLetter + secondLetter) + "ay";
  } else if ((firstTranslate === false) && (secondTranslate === false) && (thirdTranslate === false)) {
    return word.slice(3) + (firstLetter + secondLetter + thirdLetter) + "ay";
  } else if ((firstTranslate === false) && (secondTranslate === false) && (thirdTranslate === true)) {
    return word.slice(2) + (firstLetter + secondLetter) + "ay";
  } else if ((firstTranslate === false) & (secondTranslate === true)) {
    return word.slice(1) + firstLetter + "ay";
  } else if (firstTranslate) {
     return word.slice(1) + firstLetter + "ay";
  } else {
  }
};

var translatePhrase = function(string) {
  var emptyArray = []
  var phraseDC = string.toLowerCase().split(" ")
  phraseDC.forEach(function(word) {
    emptyArray.push(translate(word))
  });
  return emptyArray.join(" ");
};

$(document).ready(function() {
  $("form#pig-latin").submit(function(event)  {
    var translate = ($("input#translate").val());
    var result = translatePhrase(translate);

    $("span.translated").text(result)
    $("#result").show();
    event.preventDefault();
  });
});
