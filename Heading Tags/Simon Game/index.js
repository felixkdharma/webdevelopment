$("document").keypress(function (event) {
    var key = event.key.toLowerCase();

    console.log(key);
    
})

function clickButton(e) {

    var classButton = $(e).attr("class")

    if (classButton === "button r") {
        $(e).fadeOut(200, function () {
            $(e).fadeIn(200, function () {
            })
        })
    } else if (classButton === "button g") {
        $(e).fadeOut(200, function () {
            $(e).fadeIn(200, function () {
            })
        })
    }
    else if (classButton === "button y") {
        $(e).fadeOut(200, function () {
            $(e).fadeIn(200, function () {
            })
        })
    } else if (classButton === "button b") {
        $(e).fadeOut(200, function () {
            $(e).fadeIn(200, function () {
            })
        })
    }
}