function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

const correctNumber = getRandomNumber();
let guess;
let tries = 0;

do {
    guess = parseInt(prompt("Guess a number between 1 and 6:"));
    tries++;
} while (guess !== correctNumber);


let triesMessage = tries === 1 ? "1 try" : `${tries} tries`;


alert(`Congratulations, you guessed the correct number in ${triesMessage}`);
