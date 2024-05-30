let textInput = document.getElementById('textInput');
let button = document.getElementById('checkButton');
let result = document.getElementById('resultText');
let userInput;
let inputReverse;


button.onclick = runCheck;


function runCheck() {
    let userInput = textInput.value;
    inputReverse = reverseString(userInput);
    if (userInput == "") {
        result.innerText = `Please enter a word`;
    } else if (userInput == inputReverse) {
        result.innerText = `${userInput.toUpperCase()} IS a palindrome.`;
    } else {
        result.innerText = `${userInput.toUpperCase()} is NOT a palindrome.`;
    }
    result.classList.remove("hidden");
    textInput.value = "";
}

function reverseString(userInput) {
    let splitString = userInput.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
