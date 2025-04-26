var arrayColerOrder = [];
var arrayUserOrder = [];
var correct = true;
var startGame = false;
var gameOver = false;
var level = 1;

$(document).keypress(function (event) {
  var key = event.key;

  console.log(key);
  if (key === "a") {
    $("h1").text("Level 1");
    startGame = true;

    generateLevel();
  }
});

function clickButton(e) {
  // debugger;
  const $btn = $(e);

  if ($btn.hasClass("r")) {
    arrayUserOrder.push("red");
    $btn.addClass("pressed");
    setTimeout(function () {
      $btn.removeClass("pressed");
    }, 100);
  } else if ($btn.hasClass("b")) {
    arrayUserOrder.push("blue");
    $btn.addClass("pressed");
    setTimeout(function () {
      $btn.removeClass("pressed");
    }, 100);
  } else if ($btn.hasClass("g")) {
    arrayUserOrder.push("green");
    $btn.addClass("pressed");
    setTimeout(function () {
      $btn.removeClass("pressed");
    }, 100);
  } else if ($btn.hasClass("y")) {
    arrayUserOrder.push("yellow");
    $btn.addClass("pressed");
    setTimeout(function () {
      $btn.removeClass("pressed");
    }, 100);
  }
}

function generateLevel() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;

  if (randomNumber === 1) {
    arrayColerOrder.push("red");
    $(".button.r").fadeOut(200).fadeIn(200);
  } else if (randomNumber === 2) {
    arrayColerOrder.push("blue");
    $(".button.b").fadeOut(200).fadeIn(200);
  } else if (randomNumber === 3) {
    arrayColerOrder.push("green");
    $(".button.g").fadeOut(200).fadeIn(200);
  } else if (randomNumber === 4) {
    arrayColerOrder.push("yellow");
    $(".button.y").fadeOut(200).fadeIn(200);
  }
}

function checkAnswer(currentLevel) {}
