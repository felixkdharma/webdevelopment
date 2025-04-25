var arrayColerOrder = [];
var arrayUserOrder = [];
var correct = true;
var startGame = false;
var gameOver = false;

$(document).keypress(function (event) {
  //   debugger;
  var key = event.key;

  if (key === "a") {
    $("h1").text("Level 1");
    startGame = true;
    generateFirstSequence();
  } else {
    $("h1").text("Press A to Start the Game");
    generateFirstSequence();
  }
});

function clickButton(e) {
  debugger;
  var classButton = $(e).attr("class");

  if (classButton === "button r") {
    $(e).fadeOut(200, function () {
      $(e).fadeIn(200, function () {
        arrayUserOrder.push("r");
        checkSequence();
        generateSequence();
      });
    });
  } else if (classButton === "button g") {
    $(e).fadeOut(200, function () {
      $(e).fadeIn(200, function () {
        arrayUserOrder.push("g");
        checkSequence();
        generateSequence();
      });
    });
  } else if (classButton === "button y") {
    $(e).fadeOut(200, function () {
      $(e).fadeIn(200, function () {
        arrayUserOrder.push("y");
        checkSequence();
        generateSequence();
      });
    });
  } else if (classButton === "button b") {
    $(e).fadeOut(200, function () {
      $(e).fadeIn(200, function () {
        arrayUserOrder.push("b");
        checkSequence();
        generateSequence();
      });
    });
  }
}

function generateSequence() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;

  if (correct === true) {
    if (randomNumber === 1) {
      arrayColerOrder.push("r");
      $(".button.r").hide();
      $(".button.r").fadeIn();
    } else if (randomNumber === 2) {
      arrayColerOrder.push("g");
      $(".button.g").hide();
      $(".button.g").fadeIn();
    } else if (randomNumber === 3) {
      arrayColerOrder.push("b");
      $(".button.b").hide();
      $(".button.b").fadeIn();
    } else if (randomNumber === 4) {
      arrayColerOrder.push("y");
      $(".button.y").hide();
      $(".button.y").fadeIn();
    }
  } else {
    arrayColerOrder.length = 0;
    arrayUserOrder.length = 0;
    correct = false;
    gameOver = true;
    generateFirstSequence();
  }
}

function generateFirstSequence() {
  //   debugger;
  if (startGame === true) {
    if (gameOver === false) {
      var randomNumber = Math.floor(Math.random() * 4) + 1;
      if (randomNumber === 1) {
        arrayColerOrder.push("r");
        $(".button.r").hide();
        $(".button.r").fadeIn();
      }

      if (randomNumber === 2) {
        arrayColerOrder.push("g");
        $(".button.g").hide();
        $(".button.g").fadeIn();
      }

      if (randomNumber === 3) {
        arrayColerOrder.push("b");
        $(".button.b").hide();
        $(".button.b").fadeIn();
      }

      if (randomNumber === 4) {
        arrayColerOrder.push("y");
        $(".button.y").hide();
        $(".button.y").fadeIn();
      }
    } else {
      $("h1").text("Game Over, Prees Any Key to Restart");
      $(document).keypress(function () {
        if (randomNumber === 1) {
          arrayColerOrder.push("r");
          $(".button.r").hide();
          $(".button.r").fadeIn();
        } else if (randomNumber === 2) {
          arrayColerOrder.push("g");
          $(".button.g").hide();
          $(".button.g").fadeIn();
        } else if (randomNumber === 3) {
          arrayColerOrder.push("b");
          $(".button.b").hide();
          $(".button.b").fadeIn();
        } else if (randomNumber === 4) {
          arrayColerOrder.push("y");
          $(".button.y").hide();
          $(".button.y").fadeIn();
        }
      });
    }
  }
}

function checkSequence() {
  //   debugger;
  if (arrayUserOrder.length === arrayColerOrder.length) {
    for (var i = 0; i < arrayUserOrder.length; i++) {
      if (arrayUserOrder[i] !== arrayColerOrder[i]) {
        correct = false;
        console.log(correct);
      } else {
        correct = true;
        console.log(correct);
      }
    }
  }

  return correct;
}
