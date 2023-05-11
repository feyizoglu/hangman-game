const city = 'ankara';
const buttons = document.querySelectorAll('.alphabet');
const dis = document.querySelector('.display')
for(let i =0;i<buttons.length;i++) {
  buttons[i].addEventListener('click',print);
}

//split the word
let newWord = city.split('');
let display = [];
let guess = 6;
let count = 0
//print -----------------
for(let i =0;i<newWord.length;i++) {
  display[i] = '_ '; 
}
//take letter from user
function print(e) {
  let input = e.target.innerText;
  for(let i =0;i<newWord.length;i++) {
    
    if(newWord[i] === input) {
      display[i] = newWord[i];
    } else {
      count++;
    }
    
  }
  if(count == newWord.length) {
    guess--;
    count = 0;
  } else {
    count = 0;
  }
  dis.innerHTML = display.join('');
  console.log(guess); 
}

//compare it with word