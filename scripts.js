
let myFunc;

function inputChange() {
    $("#start").prop("disabled", true);

    let mins = 00;

    mins = $("#mins-input").val();

    var countDownDate = new Date().getTime();

    //add minutes to countdown date
    countDownDate = addMinutes(countDownDate, mins);

    //add seconds to countdown date

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


var iframeElement = document.querySelector('iframe');
var iframeElementID = iframeElement.id;
var widget = SC.Widget(iframeElement);
var x = document.getElementById("play");




widget.bind(SC.Widget.Events.FINISH, function () {
    widget.getCurrentSound(function (currentSound) {
        document.getElementById("currentTrack").innerHTML = currentSound.title;
    });
});

function play() {
    if (x.innerHTML === "▶") {
        x.innerHTML = "||";
    } else {
        x.innerHTML = "▶";
    }
    widget.toggle();
};

function next() {
    x.innerHTML = "||";
    widget.next();
    widget.seekTo(0);
    widget.getCurrentSound(function (currentSound) {
        document.getElementById("currentTrack").innerHTML = currentSound.title;
    });
};

function prev() {
    x.innerHTML = "||";
    widget.prev();
    widget.seekTo(0);
    widget.getCurrentSound(function (currentSound) {
        document.getElementById("currentTrack").innerHTML = currentSound.title;
    });
};

widget.bind(SC.Widget.Events.READY, function () {
    widget.getCurrentSound(function (currentSound) {
        document.getElementById("currentTrack").innerHTML = currentSound.title;

        widget.getSounds(function (tracks) {
            for (var i in tracks) {
                if (tracks[i].title != undefined) {
                    $('#tracklist').append("<li class='track-item' id='" + i + "'" + ">" + tracks[i].title + "</li>");

                }
            }

            $(".track-item").click(function () {
                var s = this.id
                widget.seekTo(0);
                widget.skip(s);
                x.innerHTML = "||"; widget.getCurrentSound(function (currentSound) {
                    document.getElementById("currentTrack").innerHTML = currentSound.title;
                });

            });



        });

    });
});

