async function getSecret() {
  const res = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const data = await res.json();
  return data[0];
}
const buttons = document.querySelectorAll(".alphabet");
const lives = document.querySelector(".lives");
const dis = document.querySelector(".display");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
let display;
let guess = 10;
let count = 0;
let newWord;
let secretWord;

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
context.strokeStyle = "black";
context.strokeRect(220, 100, 300, 300);
// Clear the canvas
context.clearRect(0, 0, canvas.width, canvas.height);

//Starting the game
start.addEventListener("click", print);
function print() {
  getSecret().then((word) => {
    // console.log(word);
    secretWord = word;
    display = [];
    dis.innerHTML = "";
    lives.innerHTML = ``;
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
      buttons[i].classList = "alphabet";
      guess = 10;
    }
    //split the word
    newWord = secretWord.split("");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
    lives.innerHTML = `Your lives: ${guess}`;
    for (let i = 0; i < newWord.length; i++) {
      display[i] = "_ ";
    }
    dis.innerHTML = display.join("");
    context.strokeStyle = "black";
    context.strokeRect(220, 100, 300, 300);
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
  });
}

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
      lives.innerHTML = `Game Over! the word was "${secretWord}"`;
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  }

  //Canvas Part

  if (guess == 9) {
    //   //Bottom Line
    context.beginPath();
    context.moveTo(250, 350);
    context.lineTo(490, 350);
    context.stroke();
  }

  if (guess == 8) {
    context.moveTo(300, 350);
    context.lineTo(300, 150);
    context.stroke();
  }
  if (guess == 7) {
    context.moveTo(380, 150);
    context.lineTo(300, 150);
    context.stroke();
  }
  if (guess == 6) {
    context.moveTo(380, 150);
    context.lineTo(380, 180);
    context.stroke();
  }
  if (guess == 5) {
    // Head;
    context.beginPath();
    context.arc(380, 200, 20, 0, 2 * Math.PI);
    context.stroke();
    context.moveTo(380, 280);
    context.lineTo(380, 220);
    context.stroke();
  }
  if (guess == 4) {
    // Left leg
    context.beginPath();
    context.moveTo(380, 280);
    context.lineTo(360, 330);
    context.stroke();
  }
  if (guess == 3) {
    // Right leg
    context.beginPath();
    context.moveTo(380, 280);
    context.lineTo(400, 330);
    context.stroke();
  }
  if (guess == 2) {
    //   // Left arm
    context.beginPath();
    context.moveTo(380, 240);
    context.lineTo(360, 280);
    context.stroke();
  }
  if (guess <= 1) {
    // Right arm
    context.beginPath();
    context.moveTo(380, 240);
    context.lineTo(400, 280);
    context.stroke();
  }
}
