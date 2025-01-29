let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

function checkGuess() {
    let guessingNumber = userInput.value;
    let guessingValue = parseInt(guessingNumber)

    if (randomNumber > guessingValue) {
        userInput.textContent = "Too low! Please Try Again";
        gameResult.style.backgroundColor = "blue";
    } else if (randomNumber < guessingValue) {
        gameResult.textContent = "Too high! Please Try Again";
        gameResult.style.backgroundColor = "blue";
    } else if (randomNumber === guessingValue) {
        gameResult.textContent = "Congratulations! You got it Right...";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please Provide Valid Input!";
        gameResult.style.backgroundColor = "blue";
    }

}