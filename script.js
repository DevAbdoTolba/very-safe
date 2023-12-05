// vars

const input = document.getElementById("input");
const triesTag = document.getElementById("tries");

console.log(guesses);

triesTag.innerText = tries > 0 ? tries : "you lost";

const handleInput = (e) => {
  e.value = e.value.replace(/[^0-9]/g, "");
  guess = e.value;
};

// checking if the number is correct

const checkNumber = () => {
  const input = document.querySelector("#input").value;
  if (input === digit) {
    // document.querySelector("#tries").innerText = "Correct!";
    wonFun();
  } else {
    let digitFound = 0;
    let correctPosition = 0;

    let dubHandling = Array(10).fill(0);

    for (let i = 0; i < 4; i++) {
      if (digit.includes(input[i])) {
        digitFound++;
        dubHandling[input[i]]++;
      }
    }

    for (let i = 0; i < 4; i++) {
      if (digit[i] === input[i]) {
        correctPosition++;
      }
    }

    for (let i = 0; i < 10; i++) {
      if (dubHandling[i] > 1) {
        digitFound -= dubHandling[i] - 1;
      }
    }

    document.querySelector(
      "#resultDigits"
    ).innerHTML = `${digitFound} digit found`;
    document.querySelector(
      "#resultLocation"
    ).innerHTML = `${correctPosition} digit in correct position`;
  }
};

const handleClick = () => {
  // store at local storage the random digit and the tries
  if (guess === undefined || guess.length < 4) {
    return;
  }

  if (guesses.includes(guess)) {
    alert("You already tried this number");
    tries++;
  }
  guesses.push(guess);
  localStorage.setItem("guesses", guesses);
  tries--;
  if (tries > 0) {
    checkNumber();
    triesTag.innerText = tries;
  } else {
    triesTag.innerText = "you lost";
    loseFun();
  }
  localStorage.setItem("digit", digit);
  localStorage.setItem("tries", tries);
};

// Event listeners
handleFormSubmit = (e) => {
  e.preventDefault();
};

// Handel incognito
document.addEventListener("DOMContentLoaded", function () {
  if (isIncognito()) {
    alert("Please disable incognito mode to access this website.");
  }
});

function isIncognito() {
  try {
    const fs = window.RequestFileSystem || window.webkitRequestFileSystem;
    if (!fs) return false; // Not available in all browsers
    fs(
      window.TEMPORARY,
      1,
      function () {},
      function () {
        alert(
          "Incognito mode detected. Please disable incognito mode to access this website."
        );
      }
    );
    return true;
  } catch (e) {
    return false;
  }
}
