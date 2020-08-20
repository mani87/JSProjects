const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDSHAND = document.querySelector("#seconds");

var date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// degrees given to each hand
let hourPos = hours*360/12 + (minutes*(360/60)/12);
let minPos = minutes*360/60 + (seconds*(360/60)/60);
let secPos = seconds*360/60;

function runClock(){
    hourPos = hourPos + (3/360);
    minPos = minPos + (6/60);
    secPos = secPos + 6;

    HOURHAND.style.transform = "rotate(" + hourPos + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
    SECONDSHAND.style.transform = "rotate(" + secPos + "deg)";
}


var interval = setInterval(runClock, 1000);