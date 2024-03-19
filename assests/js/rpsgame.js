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
let playerPoints = 0;
let computerPoints = 0;




modeButton.onclick = lightDark;

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