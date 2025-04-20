function generateDotDice() {

    // Dice 1
    var dice = document.getElementById("dice1");
    for (var i = 1; i <= 9; i++) {
        var dot = document.createElement("div");
        dot.id = "dot" + i;
        dot.className = "dot-dice";
        dice.appendChild(dot);
    }

    //     // Buat Awal buka
    for (var x = 2; x <= 9; x = x+3 ) {
        var hideDot2 = document.getElementById("dot" + x);
        hideDot2.className = "";
    
        var hideDot5 = document.getElementById("dot" + x);
        hideDot5.className = "";
    
        var hideDot8 = document.getElementById("dot" + x);
        hideDot8.className = "";
    }


     // Dice 2
     var dice = document.getElementById("dice2");
     for (var i = 10; i <= 18; i++) {
         var dot = document.createElement("div");
         dot.id = "dot" + i;
         dot.className = "dot-dice";
         dice.appendChild(dot);
     }
 
     //     // Buat Awal buka
     for (var x = 11; x <= 18; x = x+3 ) {
        var hideDot11 = document.getElementById("dot" + x);
        hideDot11.className = "";
    
        var hideDot14 = document.getElementById("dot" + x);
        hideDot14.className = "";
    
        var hideDot14 = document.getElementById("dot" + x);
        hideDot14.className = "";
    }

}

function getDice1() {

    var getDice1 = Math.floor(Math.random() * 6 + 1);

    if (getDice1 === 1) {
        for (var i = 1; i <= 9; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot1 = document.getElementById("dot5");
        popDot1.className = "dot-dice";
    }

    if (getDice1 === 2) {
        for (var i = 1; i <= 9; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot2 = document.getElementById("dot1");
        popDot2.className = "dot-dice";

        var popDot2 = document.getElementById("dot9");
        popDot2.className = "dot-dice";
    }

    if (getDice1 === 3) {
        for (var i = 1; i <= 9; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot1 = document.getElementById("dot1");
        popDot1.className = "dot-dice";

        var popDot5 = document.getElementById("dot5");
        popDot5.className = "dot-dice";

        var popDot9 = document.getElementById("dot9");
        popDot9.className = "dot-dice";
    }

    if (getDice1 === 4) {
        for (var i = 1; i <= 9; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot1 = document.getElementById("dot1");
        popDot1.className = "dot-dice";

        var popDot3 = document.getElementById("dot3");
        popDot3.className = "dot-dice";

        var popDot7 = document.getElementById("dot7");
        popDot7.className = "dot-dice";

        var popDot9 = document.getElementById("dot9");
        popDot9.className = "dot-dice";
    }

    if (getDice1 === 5) {
        for (var i = 1; i <= 9; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot1 = document.getElementById("dot1");
        popDot1.className = "dot-dice";

        var popDot3 = document.getElementById("dot3");
        popDot3.className = "dot-dice";

        var popDot5 = document.getElementById("dot5");
        popDot5.className = "dot-dice";

        var popDot7 = document.getElementById("dot7");
        popDot7.className = "dot-dice";

        var popDot9 = document.getElementById("dot9");
        popDot9.className = "dot-dice";
    }

    if (getDice1 === 6) {
        for (var i = 1; i <= 9; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot1 = document.getElementById("dot1");
        popDot1.className = "dot-dice";

        var popDot3 = document.getElementById("dot3");
        popDot3.className = "dot-dice";

        var popDot4 = document.getElementById("dot4");
        popDot4.className = "dot-dice";

        var popDot6 = document.getElementById("dot6");
        popDot6.className = "dot-dice";

        var popDot7 = document.getElementById("dot7");
        popDot7.className = "dot-dice";

        var popDot9 = document.getElementById("dot9");
        popDot9.className = "dot-dice";
    }

    console.log(getDice1);
    return getDice1;
    

}

function rollDice() {
    getDice1();
    getDice2();
    getTheWinner();
}
function getDice2() {

    var getDice2 = Math.floor(Math.random() * 6 + 1);

    if (getDice2 === 1) {
        for (var i = 10; i <= 18; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot14 = document.getElementById("dot14");
        popDot14.className = "dot-dice";
    }

    if (getDice2 === 2) {
        for (var i = 10; i <= 18; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot10 = document.getElementById("dot10");
        popDot10.className = "dot-dice";

        var popDot18 = document.getElementById("dot18");
        popDot18.className = "dot-dice";
    }

    if (getDice2 === 3) {
        for (var i = 10; i <= 18; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot10 = document.getElementById("dot10");
        popDot10.className = "dot-dice";

        var popDot14 = document.getElementById("dot14");
        popDot14.className = "dot-dice";

        var popDot18 = document.getElementById("dot18");
        popDot18.className = "dot-dice";
    }

    if (getDice2 === 4) {
        for (var i = 10; i <= 18; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot10 = document.getElementById("dot10");
        popDot10.className = "dot-dice";

        var popDot12 = document.getElementById("dot12");
        popDot12.className = "dot-dice";

        var popDot16 = document.getElementById("dot16");
        popDot16.className = "dot-dice";

        var popDot18 = document.getElementById("dot18");
        popDot18.className = "dot-dice";
    }

    if (getDice2 === 5) {
        for (var i = 10; i <= 18; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot10 = document.getElementById("dot10");
        popDot10.className = "dot-dice";

        var popDot12 = document.getElementById("dot12");
        popDot12.className = "dot-dice";

        var popDot14 = document.getElementById("dot14");
        popDot14.className = "dot-dice";

        var popDot16 = document.getElementById("dot16");
        popDot16.className = "dot-dice";

        var popDot18 = document.getElementById("dot18");
        popDot18.className = "dot-dice";
    }

    if (getDice2 === 6) {
        for (var i = 10; i <= 18; i++) {
            var hideDot = document.getElementById("dot" + i);
            hideDot.className = "";
        }

        var popDot10 = document.getElementById("dot10");
        popDot10.className = "dot-dice";

        var popDot12 = document.getElementById("dot12");
        popDot12.className = "dot-dice";

        var popDot13 = document.getElementById("dot13");
        popDot13.className = "dot-dice";

        var popDot15 = document.getElementById("dot15");
        popDot15.className = "dot-dice";

        var popDot16 = document.getElementById("dot16");
        popDot16.className = "dot-dice";

        var popDot18 = document.getElementById("dot18");
        popDot18.className = "dot-dice";
    }

    console.log(getDice2);
    return getDice2;

}

function getTheWinner() {

    var dice1 = getDice1();
    var dice2 = getDice2();
    var result = "";

    const winner = document.getElementById("result");
    winner.className = "align-center";
    winner.style.marginTop = "12vh";

    if (dice1 > dice2) {
        result = "Player 1 Win!";
        winner.textContent = result;
        
    } else if (dice1 < dice2) {
        result = "Player 2 Win!";
        winner.textContent = result;

    } else if (dice2 < dice1) {
        result = "Player 1 Win!";
        winner.textContent = result;
        
    } else if (dice2 > dice1) {
        result = "Player 2 Win!";
        winner.textContent = result;

    } else {
        result = "Draw!";
        winner.textContent = result;
        
    }
    
    return result;

}