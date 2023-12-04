const divWindow = document.getElementById("window");
const h1 = document.getElementsByClassName("start__title")[0];
const h6 = document.getElementById("allTries");

let won = localStorage.getItem("won") || false;
let lose = localStorage.getItem("lose") || false;
let start = localStorage.getItem("start") || false;

divWindow.addEventListener("click", handelEvent);
h1.innerHTML = "Start";

function handelEvent() {
  localStorage.setItem("start", true);
  divWindow.classList.add("starting");
  h1.innerHTML = "";
  h1.classList.add("hide");
}

if (won) {
  h1.classList.remove("hide");
  console.log("won");
  divWindow.classList.add("won");
  h1.innerHTML = `You won <br /> 🎉 <br /> only ${10 - tries}`;
} else if (lose) {
  h1.classList.remove("hide");
  console.log("lose");
  divWindow.classList.add("lose");
  h1.innerHTML = `You lose <br /> 🙈 <br /> ${digit}`;
  //   h6.innerHTML = `Tries: ${guesses}`;
} else if (start) {
  console.log("started");

  divWindow.removeEventListener("click", handelEvent);
  divWindow.classList.remove("start");

  h1.innerHTML = "";
  h1.classList.add("hide");
}

function loseFun() {
  localStorage.setItem("lose", true);
  window.location.reload();
}

function wonFun() {
  localStorage.setItem("won", true);
  window.location.reload();
}
