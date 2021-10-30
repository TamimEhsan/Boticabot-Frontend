// Set the date we're counting down to
var checkupCountDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

const timerFunction = function () {
    var now = new Date().getTime();
    var distance = checkupCountDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds<10) seconds = "0"+seconds;
    if(minutes<10) minutes = "0"+minutes;
    if(hours<10) hours = "0"+hours;
    if(days<10) days = "0"+days;

    document.getElementById("next-checkup-timer").innerHTML = `${1}d ${hours}h ${minutes}m`;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("next-checkup-timer").innerHTML = "EXPIRED";
    }

    document.getElementById("next-medicine-timer").innerHTML = `<span class="timer-box">${0}d</span> <span class="timer-box">${hours}h</span> <span class="timer-box">${minutes}m</span> <span class="timer-box">${seconds}s</span>`;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("next-medicine-timer").innerHTML = "EXPIRED";
    }
}
var x = setInterval(timerFunction, 1000);
timerFunction();
