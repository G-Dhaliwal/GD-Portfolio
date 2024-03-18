const modeButton = document.querySelector("#buttonLightDark");
let main = document.querySelector("#mainSection");
let currentMode = "light";

modeButton.onclick = lightDark;

function lightDark() {
    if (currentMode == "light") {
        main.classList.add("darkMode");
        currentMode = "dark";
    } else {
        main.classList.remove("darkMode");
        currentMode = "light";
    }
}