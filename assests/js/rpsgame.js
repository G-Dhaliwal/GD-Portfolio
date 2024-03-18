const modeButton = document.querySelector("#buttonLightDark");
let main = document.querySelector("#mainSection");
let sun = document.querySelector("#sunIMG");
let moon = document.querySelector("#moonIMG");
let currentMode = "light";

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