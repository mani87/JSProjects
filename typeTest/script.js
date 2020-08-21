const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#original-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Start timer
function start() {
    let textEnterLength = testArea.value.length;
    console.log(textEnterLength);
}

// compare two texts
function spellCheck() {
    let textEnt = testArea.value;
    console.log(textEnt);
}

// reset all
function reset() {
    console.log("Reset button!");
}

// Event Listeners
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
theTimer.addEventListener("click", reset, false);