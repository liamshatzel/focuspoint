
let myFunc;

function inputChange() {
    $("#start").prop("disabled", true);

    let mins = 00;
    let secs = 00;

    mins = $("#mins-input").val();
    secs = $("#secs-input").val();

    var countDownDate = new Date().getTime();

    //add minutes to countdown date
    countDownDate = addMinutes(countDownDate, mins);

    //add seconds to countdown date
    countDownDate = addSeconds(countDownDate, secs);
    const origTime = countDownDate;

    //with jquery
    myfunc = setInterval(function () {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;
        time = timeleft;

        // Calculating the days, hours, minutes and seconds left
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        if (hours > 0) {
            $("#hours").html(hours + ":")
            $("#hours").show();
        }

        minutes = minutes.toString().padStart(2, '0')

        seconds = seconds.toString().padStart(2, '0')

        console.log(timeleft);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

        if (timeleft < 0) {
            clearInterval(myfunc);
            $("#minutes").html("00");
            $("#seconds").html("00");
        }
    }, 1000)
}

function callClearInterval() {
    clearInterval(myfunc);
    myFunc = null;
    $("#hours").hide();
    $("#minutes").html("00");
    $("#seconds").html("00");
    $("#mins-input").val("");
    $("#secs-input").val("");
    $("#start").prop("disabled", false);
}


function addMinutes(date, minutes) {
    return new Date(date + minutes * 60000);
}

function addSeconds(date, seconds) {
    return new Date(date + seconds * 1000);
}

