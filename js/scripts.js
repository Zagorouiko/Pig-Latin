var isLetterVowel = function(letter) {
  if ((letter === "a") || (letter === "e") || (letter === "i") || (letter === "o") || (letter === "u")) {
    return true;
} else {
  return false;
 }
};

var translate = function(word) {
  var firstLetter = word[0]
  var secondLetter = word[1]
  if (firstLetter + secondLetter === "qu") {
    return word.slice(2) + (firstLetter + secondLetter) + "ay";
  } else if ((isLetterVowel(firstLetter) === false) && (isLetterVowel(secondLetter) === false)) {
    return word.slice(2) + (firstLetter + secondLetter) + "ay";
  } else if ((isLetterVowel(firstLetter) === false) & (isLetterVowel(secondLetter) === true)) {
    return word.slice(1) + firstLetter + "ay";
  } else if (isLetterVowel(firstLetter)) {
     return word.slice(1) + firstLetter + "ay";
  } else {
  }
};
