let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let gussedNumeber = parseInt(userInput.value);
    if (gussedNumeber > randomNumber) {
        gameResult.textContent = "To high try Againe";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussedNumeber < randomNumber) {
        gameResult.textContent = "To low try Againe";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussedNumeber === randomNumber) {
        gameResult.textContent = "Congratulation yo got it correct...!";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please Provide a valid input";
        gameResult.style.backgroundColor = "red";
    }
}