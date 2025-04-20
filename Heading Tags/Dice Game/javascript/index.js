function getDice() {

    var getDice1 = Math.floor(Math.random() * 6 + 1);
    var getDice2 = Math.floor(Math.random() * 6 + 1);


    var hideElement1 = document.getElementsByClassName("dot-dice")[1];
    var hideElement2 = document.getElementsByClassName("dot-dice")[4];
    var hideElement3 = document.getElementsByClassName("dot-dice")[7];
    hideElement1.className = "";
    hideElement2.className = "";
    hideElement3.className = "";

    if (getDice1 === 2) {
        var dot1 = document.getElementsByClassName("dot-dice")[0];
        var dot2 = document.getElementsByClassName("dot-dice")[1];
        var dot3 = document.getElementsByClassName("dot-dice")[4];
        var dot4 = document.getElementsByClassName("dot-dice")[4];
        dot1.className = "";
        dot2.className = "";
    }
}