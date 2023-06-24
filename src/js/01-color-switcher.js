const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', e => {
    timerId = setInterval(() => {
    let color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, 1000);
  e.target.setAttribute('disabled', 'disabled');
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
});
