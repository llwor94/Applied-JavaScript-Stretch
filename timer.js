const breakLen = document.getElementById('break-length');
// breakLen.textContent = 5;
const sessLen = document.getElementById('session-length');
// sessLen.textContent = 25;
const sessTime = document.getElementById('session-time');
// // sessTime.textContent = sessLen.textContent;

const timer = {
    timeRem: 25 * 60000,
    sessionLen: 25,
    breakLen: 5,
    isRunning: false,
    timeOut: null,
    study: true,
    break: false,
    counter: 0,
}
function updateTime() {
    const sec = Math.floor(timer.timeRem/1000) % 60;
    const min = Math.floor((timer.timeRem/1000) / 60);
    sessTime.textContent = (min < 10 ? '0':'')+min+':'+(sec< 10 ? '0':'')+sec;
}

const addSession = function() {
    if(!timer.isRunning) {
        if (timer.sessionLen < 59) {
            timer.sessionLen += 1;
            sessLen.textContent = parseInt(sessLen.textContent) +1;
            timer.timeRem = timer.sessionLen * 60000;
            updateTime(); 
        } else {alert('Not enough time!')}
    }
}

const subSession = function() {
    if (!timer.isRunning) {
        if (timer.sessionLen >1) {
            timer.sessionLen -= 1;
            sessLen.textContent = parseInt(sessLen.textContent) -1;
            timer.timeRem = timer.sessionLen * 60000;
            updateTime();
        } else {alert("you can't do that")}
    }
}

const addBreak = function() {
    if (!timer.isRunning) {
        if (timer.breakLen < 59) {
            timer.breakLen += 1;
            breakLen.textContent = parseInt(breakLen.textContent) + 1;
            updateTime();
        }
    }
}

const subBreak = function() {
    if (!timer.isRunning) {
        if (timer.breakLen > 1) {
            timer.breakLen -= 1;
            breakLen.textContent = parseInt(breakLen.textContent) - 1;
            updateTime();
        }
    }
}

const bTiming = function() {
    timer.timeRem -= 1000;
    if (timer.break = true) {
        timer.timeRem = 60000 * breakLen;

    }
}

const timing = function() {
    timer.timeRem -= 1000;
    if (timer.timeRem <= 0) {
        clearInterval(timer.timeOut);
        timer.isRunning = false;
        timer.timeRem = 60000 * timer.breakLen;
        timer.study = false;
        timer.break = true;
        timer.counter++;
    } 
    updateTime()
}

const startTime = function() {
    timer.timeOut = setInterval(timing, 1000);
    timer.isRunning = true;
}

const pauseTime = function() {
    clearInterval(timer.timeOut);
    timer.isRunning = false;
}

const resetTime = function() {
    timer.timeRem = 25 * 60000;
    timer.isRunning = false;
    breakLen.textContent = 5;
    sessLen.textContent = 25;
    timer.counter = 0;
    updateTime();
}

const start = document.querySelector('.start');
start.addEventListener('click', startTime);

const pause = document.querySelector('.pause');
pause.addEventListener('click', pauseTime);

const addSess = document.querySelector('#add-session');
addSess.addEventListener('click', addSession);

const subSess = document.querySelector('#subtract-session');
subSess.addEventListener('click', subSession);

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetTime);


const plusBreak = document.querySelector('#add-break');
plusBreak.addEventListener('click', addBreak);

const lessBreak = document.querySelector('#subtract-break');
lessBreak.addEventListener('click', subBreak);




