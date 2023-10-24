//hover on circle
$("#one").hover(
    function () {
        $(this).css("background-color", "blue");
    }, function () {
        $(this).css("background-color", "yellow");
    });

//click circle
$("#one").on("click", function () {
    $("#one").fadeOut("slow");
});
