// async function getSecret() {
//   const res = await fetch(
//     "https://random-word-api.herokuapp.com/word?number=1"
//   );
//   const data = await res.json();
//   secretWord = data[0];
// }

let secretWord = "ankara";
const buttons = document.querySelectorAll(".alphabet");
const lives = document.querySelector(".lives");
const dis = document.querySelector(".display");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

//split the word
let newWord = secretWord.split("");
let display = [];
let guess = 10;
let count = 0;

//Starting the game
start.addEventListener("click", print);
function print() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  lives.innerHTML = `Your lives: ${guess}`;
  for (let i = 0; i < newWord.length; i++) {
    display[i] = "_ ";
  }
  if (!dis.innerHTML) {
    dis.innerHTML = display.join("");
  }
}
reset.addEventListener("click", () => {
  dis.innerHTML = "";
  lives.innerHTML = ``;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList = "alphabet";
    guess = 10;
  }
});

//take letter from user
for (let i = 0; i < buttons.length; i++) {
  buttons[i].disabled = true;
  buttons[i].addEventListener("click", letterGuess);
  buttons[i].addEventListener("click", () => {
    buttons[i].disabled = true;
    buttons[i].classList = "disable";
  });
}
function letterGuess(e) {
  if (dis.innerHTML) {
    let input = e.target.innerText;
    for (let i = 0; i < newWord.length; i++) {
      if (newWord[i] === input) {
        display[i] = newWord[i];
      } else {
        count++;
      }
    }
    if (count == newWord.length) {
      guess--;
      count = 0;
    } else {
      count = 0;
    }
    dis.innerHTML = display.join("");
    lives.innerHTML = `Your lives: ${guess}`;
    if (guess == 0) {
      lives.innerHTML = `Game Over!`;
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
    console.log(guess);
  }
}
