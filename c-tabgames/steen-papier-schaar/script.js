const userChoice1Display = document.getElementById('player1');
const userChoice2Display = document.getElementById('player2');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let player1Selection = "";
let player2Selection = "";



document.getElementById("player1").innerHTML = "Speler 1, kies je optie !";

function choice1(choiceP1) {
    document.getElementById("player1").innerHTML = "";
    document.getElementById("player2").innerHTML = "Speler 2, kies je optie !";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "block";
    player1Selection = choiceP1;
}

function choice2(choiceP2) {
    document.getElementById("player1").innerHTML = "";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    player2Selection = choiceP2;

    if (player1Selection === player2Selection) {
        document.getElementById("result").innerHTML = "Gelijkspel!";
    } if (player1Selection === 'Steen' && player2Selection === "Papier") {
        document.getElementById("result").innerHTML = "Speler 2 heeft gewonnen!";
    } if (player1Selection === 'Steen' && player2Selection === "Schaar") {
        document.getElementById("result").innerHTML = "Speler 1 heeft gewonnen";
    } if (player1Selection === 'Papier' && player2Selection === "Schaar") {
        document.getElementById("result").innerHTML = "Speler 2 heeft gewonnen";
    } if (player1Selection === 'Papier' && player2Selection === "Steen") {
        document.getElementById("result").innerHTML = "Speler 1 heeft gewonnen!";
    } if (player1Selection === 'Schaar' && player2Selection === "Steen") {
        document.getElementById("result").innerHTML = "Speler 2 heeft gewonnen!";
    } if (player1Selection === 'Schaar' && player2Selection === "Papier") {
        document.getElementById("result").innerHTML = "Speler 1 heeft gewonnen!";
    }
}