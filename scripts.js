function inputChange() {
    var start = new Date();
    var elapsed = new Date() - start;
    console.log(elapsed);
    let mins = 00;
    let secs = 00;

    mins = $("#mins-input").val();
    secs = $("#secs-input").val();

    mins = mins.toString().padStart(2, '0')
    secs = secs.toString().padStart(2, '0')

    $("#minutes").html(mins);
    $("#seconds").html(secs);
}