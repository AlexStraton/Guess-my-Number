'use strict';

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const msg = document.querySelector('.message');
const numberDisplay = document.querySelector('.number');
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');
const input = document.querySelector('.guess');

let score = 20;
let highscore = 0;

//generate random numer tehn display it

const randomNum = Math.trunc(Math.random() * 20) + 1;
console.log(randomNum);
numberDisplay.textContent = '?';

checkBtn.addEventListener('click', function () {
  if (!input) {
    msg.textContent = 'Please write an integer';
  } else if (Number(input.value) === randomNum) {
    msg.textContent = 'Correct guess!!!';
    highscore = score;
    highscoreDisplay.textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '70rem';
  } else if (Number(input.value) > randomNum) {
    if (score > 1) {
      msg.textContent = 'Too high';
      score--;
      scoreDisplay.textContent = score;
    } else {
      msg.textContent = 'You have lost the Game!';
      scoreDisplay.textContent = 0;
      document.querySelector('body').style.backgroundColor = '#DC143C';
    }
  } else if (Number(input.value) < randomNum) {
    if (score > 1) {
      msg.textContent = 'Too low';
      score--;
      scoreDisplay.textContent = score;
    } else {
      msg.textContent = 'You have lost the Game!';
      scoreDisplay.textContent = 0;
      document.querySelector('body').style.backgroundColor = '#DC143C';
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  scoreDisplay.textContent = 20;
  input.value = '';
  msg.textContent = 'Start guessing...';
  numberDisplay.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
