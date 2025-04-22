// alert("JS Added");
var numberOfDrum = document.querySelectorAll(".drum").length
for (var i = 0; i < numberOfDrum; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var tomOne = new Audio("sounds/tom-1.mp3");
        tomOne.play();
    });

}


