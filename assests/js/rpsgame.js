const modeButton = document.querySelector("#buttonLightDark");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorButton");

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
    playerRock.classList.remove("hide");
    playerScissor.classList.add("hide");
    playerScissor.classList.add("hide");
    computerRandom();
    if (computerChoice == "paper") {
        computerPaper.classList.remove("hide");
        computerRock.classList.add("hide");
        computerScissor.classList.add("hide");
        mainGameText.innerText = "You lost this round. Try Again.";

    } else if (computerChoice == "scissors") {
        computerScissor.classList.remove("hide");
        computerRock.classList.add("hide");
        computerPaper.classList.add("hide");
        mainGameText.innerText = "You won this round. Congrats!";
        
    } else {
        computerRock.classList.remove("hide");
        computerPaper.classList.add("hide");
        computerScissor.classList.add("hide");
        mainGameText.innerText = "It's a Draw. Try Again.";
    }
}

function paperChoiceGame() {
    
}

function scissorChoiceGame() {
    
}

function computerRandom() {
    computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice <= 33) {
        computerChoice = "rock";
    } else if (computerChoice >= 66) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
}
