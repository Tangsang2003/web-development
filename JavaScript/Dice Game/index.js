window.onload = function() {
    rollDice();
}
function rollDice() {
    var playerOneDice = Math.floor(Math.random() * 6) + 1;
    var playerTwoDice = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice .img1").setAttribute("src", "images/dice"+playerOneDice+".png");
    document.querySelector(".dice .img2").setAttribute("src", "images/dice"+playerTwoDice+".png");
    if (playerOneDice > playerTwoDice) {
        document.querySelector(".container h1").textContent="🚩Player 1 wins!";
    }
    else if (playerOneDice < playerTwoDice) {
        document.querySelector(".container h1").textContent="Player 2 wins!🚩";
    }
    else if (playerOneDice === playerTwoDice) {
        document.querySelector(".container h1").textContent="Draw!";
    }
}