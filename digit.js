// Handling safe number
let digit = "";
let guess;

let tries;
tries = localStorage.getItem("tries") || 10;

let guesses;
try {
  guesses = localStorage.getItem("guesses").split(",");
} catch (error) {
  guesses = [];
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function replaceRepeatedDigits(digit) {
  let digitStr = digit.toString();
  let uniqueDigits = new Set();
  let result = "";

  for (let i = 0; i < digitStr.length; i++) {
    if (!uniqueDigits.has(digitStr[i])) {
      uniqueDigits.add(digitStr[i]);
      result += digitStr[i];
    } else {
      let newDigit;
      do {
        newDigit = Math.floor(getRandomArbitrary(0, 10));
      } while (uniqueDigits.has(newDigit.toString()));
      uniqueDigits.add(newDigit.toString());
      result += newDigit;
    }
  }

  return String(result);
}

digit =
  localStorage.getItem("digit") ||
  replaceRepeatedDigits(Math.floor(getRandomArbitrary(2500, 9200))); // Yes it is random :)

console.log(digit);
