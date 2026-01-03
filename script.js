let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let random = Math.ceil(Math.random() * 100);

function checkGuess() {

    let guess = parseInt(userInput.value);
    if (guess === random) {
        gameResult.textContent = "YOU WON!";
        gameResult.style.backgroundColor = "green";
    } else if (guess > random) {
        gameResult.textContent = "TOO HIGH! TRY AGAIN.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guess < random) {
        gameResult.textContent = "TOO LOW! TRY AGAIN.";
        gameResult.style.backgroundColor = "lightgreen";
    } else {
        gameResult.textContent = "Invalid Input.";
        gameResult.style.backgroundColor = "red";
    }

}
