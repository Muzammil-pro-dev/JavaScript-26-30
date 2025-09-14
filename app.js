// TASk 1
function round() {
    let number = 3.45214;

    console.log("number:", number);
    console.log("round off value:", Math.round(number));
    console.log("floor value:", Math.floor(number));
    console.log("ceil value:", Math.ceil(number));
}

// Task 2
function negativeValue() {
    let number = -2.673;

    console.log("number:", number);
    console.log("round off value:", Math.round(number));
    console.log("floor value:", Math.floor(number));
    console.log("ceil value:", Math.ceil(number));
}

// Task 3



// Task 4
function diceValue() {
    let diceValue = Math.floor(Math.random() * 6) + 1;

    console.log("random dice value: " + diceValue);
}

// Task 5
function coinToss() {
    let coinValue = Math.floor(Math.random() * 2) + 1;

    console.log(coinValue);

    let result = (coinValue == 1) ? "Tails" : "Heads";

    console.log("random coin value: " + result);
}

// Task 6
function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("random number between 1 and 100: " + randomNumber);

}

// Task 7

// Task 8
function secretNumber() {
    

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = +prompt("Enter a number between 1 and 10");

console.log("userGuess" + userGuess)
console.log("secretNumber" + secretNumber)


if (userGuess == secretNumber) {
    alert("Congratulations! You guessed the secret number: " + secretNumber);
} else {
    alert("Try again! The secret number was: " + secretNumber);
}
}




