function clickButton(e) {

    var classButton = $(e).attr("class")

    if (classButton === "button r") {
        $(e).fadeOut(200, function () {
            $(e).fadeIn(200, function () {
            })
        })
    }
}