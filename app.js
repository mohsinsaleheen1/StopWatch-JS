let minuts = document.getElementById("minuts");
let seconds = document.getElementById("seconds");
let mseconds = document.getElementById("mseconds");
let startBtn = document.getElementById("startbtn");
let msec = 10;
let sec = 0;
let min = 0;
let interval;
const timer = () => {
  msec++;
  mseconds.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    seconds.innerHTML = sec;
    msec = 0;
  } else if (sec >= 60) {
    min++;
    minuts.innerHTML = min;
    sec = 0;
  }
};
const stop = () => {
  clearInterval(interval);
  startBtn.disabled = false;
};
const reset = () => {
  stop();
  min = 0;
  msec = 0;
  sec = 0;
  mseconds.innerHTML = msec;
  seconds.innerHTML = sec;
  minuts.innerHTML = min;
  startBtn.disabled = false;
};
const start = () => {
  interval = setInterval(timer, 10);
  startBtn.disabled = true;
};
