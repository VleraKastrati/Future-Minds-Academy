let answer = Math.floor(Math.random() * 20) + 1;

let playerOne = parseInt(prompt('Player One:'));
let playerTwo = parseInt(prompt('Player Two:'));
if(isNaN(playerOne) || isNaN(playerTwo))
    throw new Error('Please write only numbers!');

if((playerOne < 0 || playerOne > 20) ||
(playerTwo <0 || playerTwo > 20)){
    throw new error('Only select numbers between 0-20');
}

let playerOneDistance = Math.abs(answer - playerOne);
let playerTwoDistance = Math.abs(answer - playerTwo);

let winner;
if(playerOneDistance < playerTwoDistance)
    winner = 'Player Two';

console.log(`The correct answer is ${winner}`);
console.log(`The winner is ${winner}`);