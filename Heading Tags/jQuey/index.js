$("h1").css("color", "red");

$("a").attr("href", "https://www.youtube.com/");

$("button").click( function () {
    $("h1").css("color", "blue")
    $("h1").fadeToggle();
})

$(document).keypress( function (event) {
    // $("h1").toggle();
});

// console.log($("a").attr("href"));