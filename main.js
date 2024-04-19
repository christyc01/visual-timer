import './style.css';
import { setupCounter } from './counter.js';
// import startCountingDown from './counter.js';

const handleClick = () => {
  console.log('event listener clicked');
  setupCounter.startCountingDown();
};

const setupUI = () => {
  document.querySelector('#app').innerHTML = `
  <div class="page-contents">
    <div class="timer-container">
      <div class="timer"></div>
      <div class="time-remaining"></div>
    </div>
    <div class="button-container">
      <p>Start</p>
      <button id="button" type="button"></button>
    </div>
  </div>

`;

  const timeRemainingElement = document.querySelector('.time-remaining');

  const timerElement = document.querySelector('.timer');
  const startCountingDown = setupCounter(timerElement, timeRemainingElement);

  const button = document.querySelector('.button-container');
  if (button) {
    button.addEventListener('click', startCountingDown);
  } else {
    console.log('Button not found');
  }

  setupCounter(document.querySelector('.timer'));
};

document.addEventListener('DOMContentLoaded', setupUI);
