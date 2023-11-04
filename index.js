
/*---------- HOME ----------*/ 
let homeEl = document.getElementById("home-count")
let homeResult = 0

function homeAdd1(){
     homeResult = homeResult + 1
    homeEl.textContent = homeResult
}

function homeAdd2(){
     homeResult = homeResult + 2
    homeEl.textContent = homeResult
}

function homeAdd3(){
     homeResult = homeResult + 3
    homeEl.textContent = homeResult
}

/*---------- QTR ----------*/ 

let qtrEl = document.getElementById("qtr-count")
let qtrResult = 0

function qtrAdd1(){
     qtrResult = qtrResult + 1
    qtrEl.textContent = qtrResult
}

/*---------- GUEST ----------*/ 

let guestEl = document.getElementById("guest-count")
let guestResult = 0

function guestAdd1(){
     guestResult = guestResult + 1
    guestEl.textContent = guestResult
}

function guestAdd2(){
     guestResult = guestResult + 2
    guestEl.textContent = guestResult
}

function guestAdd3(){
     guestResult = guestResult + 3
    guestEl.textContent = guestResult
}

/*---------- TIMER ----------*/ 

    let seconds = 0;
    let intervalId = null;
    const timerElement = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetButton');

    function updateDisplay() {
        const displayMinutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const displaySeconds = (seconds % 60).toString().padStart(2, '0');
        timerElement.textContent = displayMinutes + ':' + displaySeconds;
    }

    function startTimer() {
        if (intervalId === null) {
            intervalId = setInterval(function () {
                seconds++;
                updateDisplay();
            }, 1000);
        }
    }

    function stopTimer() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function resetTimer() {
        stopTimer();
        seconds = 0;
        updateDisplay();
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);

    // Initialize display
    updateDisplay();