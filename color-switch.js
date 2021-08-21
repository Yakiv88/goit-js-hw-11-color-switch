

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);
let intervalId = null;

//----- start-----
function onStart () {
    intervalId = setInterval(() => {
        refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length)]
    }, 1000);
    refs.startBtn.disabled = true;
}



//----- stop-----
function onStop () {
clearInterval(intervalId);
refs.startBtn.disabled = false;
}
