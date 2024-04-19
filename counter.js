export function setupCounter(timerElement, timeRemainingElement) {
  let initialCount = 60;
  let counter = initialCount; // Set the countdown starting from 60 seconds
  let timerId = null;

  const updateDisplay = () => {
    timeRemainingElement.innerHTML = `${counter}`;
    timerElement.style.width = `${(counter / initialCount) * 100}%`;
    if (counter <= 60) {
      timeRemainingElement.style.color = '#ec12a0';
    } else if (counter <= 120) {
      timeRemainingElement.style.color = 'yellow';
    } else {
      timeRemainingElement.style.color = 'green';
    }
  };

  const countdown = () => {
    if (counter > 0) {
      updateDisplay();
      counter -= 1;
      timerId = setTimeout(countdown, 1000);
    } else {
      clearTimeout(timerId);
      timeRemainingElement.innerHTML = 'Time is up!';
    }
  };

  const startCountingDown = () => {
    if (timerId) {
      clearTimeout(timerId);
      counter = 60; // Reset the counter back to 60 seconds
    }
    countdown();
  };
  // element.addEventListener('click', startCountingDown);

  // Initialize display
  updateDisplay();

  return startCountingDown;
}
