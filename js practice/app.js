// Write logic for computer to choose between rock, paper scissors
// Write logic for human to choose " " " " 
// if choice is equal to 0 - 32 choose rock, if else 33 - 0.66 choose paper, else return scissors 

function randomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getComputerChoice(min,max) { 
    if (randomNum < 33) {
        return "Rock!";
    } else if (randomNum > 33 && randomNum < 66) {
        return "Paper!";
    } else return "Scissors!";
}

console.log (randomNum(0,100));