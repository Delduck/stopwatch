const minutesE = document.querySelector("#minutes")
const secondsE = document.querySelector("#seconds")
const millisecondsE = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const continueBtn = document.querySelector("#continueBtn")
const resetBtn = document.querySelector("#resetBtn")


let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

// The events
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
continueBtn.addEventListener("click", continueTimer);
resetBtn.addEventListener("click", resetTimer)

// The functions 
function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesE.textContent = formatTime(minutes);
            secondsE.textContent = formatTime(seconds);
            millisecondsE.textContent = formatMilliseconds(milliseconds);
        }

    }, 10);

    // Hidde the button Start
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true
    pauseBtn.style.display = "none";
    continueBtn.style.display = "block";
}

function continueTimer() {
    isPaused = false
    pauseBtn.style.display = "block";
    continueBtn.style.display = "none";
}

function resetTimer() {
    isPaused = false;
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesE.textContent = "00"
    secondsE.textContent = "00"
    millisecondsE.textContent = "000"

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}
