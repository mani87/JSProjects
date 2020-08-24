const textWrapper = document.querySelector(".text-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#original-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;

// helper function: for leading zero(s)
function leadingZero(time) {
    if (time <= 9){
        time = "0" + time;
    }
    return time;
}

// run timer
function runTimer(){
    theTimer.innerHTML = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - timer[0]*60);
    timer[2] = Math.floor(timer[3] - timer[1]*100 - timer[0]*6000);
}

// Start timer
function start() {
    let textEnterLength = testArea.value.length;
    if (textEnterLength === 0 && !timerRunning){
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
}

// compare two texts
function spellCheck() {
    let textEnt = testArea.value;
    let originalTextMatch = originText.substring(0, textEnt.length);

    if (textEnt == originText){
        clearInterval(interval);
        testArea.style.borderColor = "#432322";
    }else{
        if (textEnt == originalTextMatch){
            testArea.style.borderColor = "65CCf3";
        }else{
            testArea.style.borderColor = "E95D0F";
        }
    }
}

// reset all
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
}

// Event Listeners
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);

// Minify code by removing extra spaces using tools online to reduce time and space
// Linting of code to write a good code (standardized)