const divWindow = document.getElementById("window");
const h1 = document.getElementsByClassName("start__title")[0];
const h6 = document.getElementById("allTries");

// store url param ?game
let url = new URL(window.location.href);
let game = url.searchParams.get("game");

let won;
let lose;
let start;

won = localStorage.getItem("won") || false;
lose = localStorage.getItem("lose") || false;
start = localStorage.getItem("start") || false;

// games logic

let games = [
  "rft5t6y7uhjbgyut67ihkjbgyu7iujoknbhgyuhijkn", // 1
  "ihuiy8oi9jlhukyigi7i8uhjgvfcrdtfyrdtges4tde", // 2
  "98765rer4tsdfrcgvhtyuhijoklmjnjbhvgcfdrtfyi", // 3
  "98u9y7t6ur5ye43w2esrdtfygu787u9i0opkljnbhvg", // 4
  "kio9jklnhuiy7hbjgyutgfvhhftrfgcdrte4dfrs34w", // 5
];

let playedGames = localStorage.getItem("playedGames") || [];

let gameFail =
  game === null ||
  !(
    games.filter((e, i) => {
      if (e === game) {
        if (localStorage.getItem(game) === null) {
          localStorage.setItem(game, i + 1);
          localStorage.removeItem("won");
          localStorage.removeItem("lose");
          localStorage.removeItem("start");
          localStorage.removeItem("tries");
          localStorage.removeItem("guesses");
          localStorage.removeItem("digit");
          window.location.reload();
        }
        return true;
      }
    }).length > 0
  ) ||
  false;

divWindow.addEventListener("click", handelEvent);
h1.innerHTML = "Start";

function handelEvent() {
  localStorage.setItem("start", true);
  divWindow.classList.add("starting");
  h1.innerHTML = "";
  h1.classList.add("hide");
}
if (won || lose || start || gameFail) {
  divWindow.removeEventListener("click", handelEvent);
  divWindow.classList.remove("start");

  h1.innerHTML = "";

  if (gameFail) {
    h1.innerHTML = "Game not found";
    h1.classList.remove("hide");
    divWindow.classList.add("lose");
  } else if (won || localStorage.getItem(game).split(",")[1] === "w") {
    h1.classList.remove("hide");
    console.log("won");
    divWindow.classList.add("won");
    h1.innerHTML = `You won <br /> 🎉 `;
    h6.innerHTML =
      "only " + (10 - localStorage.getItem(game).split(",")[2]) + " tries";
    // set h1 after content to localStorage.getItem(game)
    h1.classList.add("after");
    h1.style.setProperty(
      "--after-content",
      '"Game ' + localStorage.getItem(game).split(",")[0] + ' "'
    );
  } else if (lose || localStorage.getItem(game).split(",")[1] === "l") {
    h1.classList.add("after");
    h1.style.setProperty(
      "--after-content",
      '"Game ' + localStorage.getItem(game).split(",")[0] + ' "'
    );
    h1.classList.remove("hide");
    console.log("lose");
    divWindow.classList.add("lose");
    h1.innerHTML = `You lose <br /> 🙈 <br /> ${
      localStorage.getItem(game).split(",")[2]
    }`;
    //   h6.innerHTML = `Tries: ${guesses}`;
  } else if (start) {
    console.log("started");

    divWindow.removeEventListener("click", handelEvent);
    divWindow.classList.remove("start");

    h1.innerHTML = "";
    h1.classList.add("hide");
  } else {
    h1.innerHTML = "There was an error please refresh";
    h1.classList.remove("hide");
    divWindow.classList.add("lose");
  }
}

function loseFun() {
  localStorage.setItem("lose", true);
  localStorage.setItem(game, [localStorage.getItem(game), "l", digit]);
  window.location.reload();
}

function wonFun() {
  localStorage.setItem("won", true);
  localStorage.setItem(game, [localStorage.getItem(game), "w", tries]);
  window.location.reload();
}
