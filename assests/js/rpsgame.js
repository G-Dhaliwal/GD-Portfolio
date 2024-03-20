const modeButton = document.querySelector("#buttonLightDark");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorButton");
const restartButton = document.querySelector("#restartButton");

let main = document.querySelector("#mainSection");
let sun = document.querySelector("#sunIMG");
let moon = document.querySelector("#moonIMG");
let mainGameText = document.querySelector("#mainGameText");
let playerPointText = document.querySelector("#playerPointText");
let computerPointText = document.querySelector("#computerPointText");

const playerRock = document.querySelector("#playerGameRock"); 
const playerPaper = document.querySelector("#playerGamePaper"); 
const playerScissor = document.querySelector("#playerGameScissor"); 
const computerRock = document.querySelector("#computerGameRock"); 
const computerPaper = document.querySelector("#computerGamePaper"); 
const computerScissor = document.querySelector("#computerGameScissor"); 

let currentMode = "light";
let computerChoice;
let playerPoints = 0;
let computerPoints = 0;



modeButton.onclick = lightDark;

rockButton.onclick = rockChoiceGame;
paperButton.onclick = paperChoiceGame;
scissorsButton.onclick = scissorChoiceGame;
restartButton.onclick = newGame;


function lightDark() {
    if (currentMode == "light") {
        main.classList.add("darkMode");
        currentMode = "dark";
        sun.classList.remove("hide")
        moon.classList.add("hide")
    } else {
        main.classList.remove("darkMode");
        currentMode = "light";
        sun.classList.add("hide")
        moon.classList.remove("hide")
    }
}

function rockChoiceGame() {
    hideGamePieces();
    playerRock.classList.remove("hide");
    computerRandom();
    if (computerChoice == "paper") {
        computerPaper.classList.remove("hide");
        mainGameText.innerText = "You lost this round. Try Again.";
        lostRound();

    } else if (computerChoice == "scissors") {
        computerScissor.classList.remove("hide");
        mainGameText.innerText = "You won this round. Congrats!";
        wonRound();

    } else {
        computerRock.classList.remove("hide");
        mainGameText.innerText = "It's a Draw. Try Again.";
    }
}

function paperChoiceGame() {
    hideGamePieces()
    playerPaper.classList.remove("hide");
    computerRandom();
    if (computerChoice == "scissors") {
        computerScissor.classList.remove("hide");
        mainGameText.innerText = "You lost this round. Try Again.";
        lostRound();

    } else if (computerChoice == "rock") {
        computerRock.classList.remove("hide");
        mainGameText.innerText = "You won this round. Congrats!";
        wonRound();
        
    } else {
        computerPaper.classList.remove("hide");
        mainGameText.innerText = "It's a Draw. Try Again.";
    }
}

function scissorChoiceGame() {
    hideGamePieces()
    playerScissor.classList.remove("hide");
    computerRandom();
    if (computerChoice == "rock") {
        computerRock.classList.remove("hide");
        mainGameText.innerText = "You lost this round. Try Again.";
        lostRound();

    } else if (computerChoice == "paper") {
        computerPaper.classList.remove("hide");
        mainGameText.innerText = "You won this round. Congrats!";
        wonRound();
        
    } else {
        computerScissor.classList.remove("hide");
        mainGameText.innerText = "It's a Draw. Try Again.";
    }
}

function computerRandom() {
    computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice < 33) {
        computerChoice = "rock";
    } else if (computerChoice > 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}

function hideGamePieces() {
    playerRock.classList.add("hide");
    playerPaper.classList.add("hide");
    playerScissor.classList.add("hide");
    computerRock.classList.add("hide");
    computerPaper.classList.add("hide");
    computerScissor.classList.add("hide");
}

function wonRound() {
    playerPoints++;
    playerPointText.innerText = `Points: ${playerPoints}`;
    declareWinner();
}

function lostRound() {
    computerPoints++;
    computerPointText.innerText = `Points: ${computerPoints}`;
    declareWinner();
}

function declareWinner() {
    if (playerPoints == 5) {
        mainGameText.innerText = "You got 5 points, You Win!";
        playAgain();
    } else if (computerPoints == 5) {
        mainGameText.innerText = "Computer got 5 points, You Lose!";
        playAgain();
    } else {

    }
}

function playAgain() {
    rockButton.classList.add("hide");
    paperButton.classList.add("hide");
    scissorButton.classList.add("hide");
    restartButton.classList.remove("hide");
}

function newGame() {
    rockButton.classList.remove("hide");
    paperButton.classList.remove("hide");
    scissorButton.classList.remove("hide");
    restartButton.classList.add("hide");
    playerPoints = 0;
    computerPoints = 0;
    playerPointText.innerText = `Points: ${playerPoints}`;
    computerPointText.innerText = `Points: ${computerPoints}`;
    mainGameText.innerText = "First to 5 points wins. Choose an option below to start!";
    hideGamePieces();
}