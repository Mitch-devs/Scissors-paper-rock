// Write logic for computer to choose between rock, paper scissors
// Write logic for human to choose " " " " 
// if choice is equal to 0 - 32 choose rock, if else 33 - 0.66 choose paper, else return scissors 
// let winner be rock beats scissors, scissors beats paper, paper beats rock


function getComputerChoice() { 
    let randomNum = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    let compChoice;   
    if (randomNum < 33) {
        compChoice = "rock";
    } 
        else if (randomNum > 33 && randomNum < 66) {
        compChoice = "paper";
    } 
            else 
             compChoice = "scissors";
    return compChoice;
}


//button on click, choose between rock, paper, scissors.
function getHumanChoice() {
    let humanChoice = prompt("Which will you choose?")
    if (humanChoice.toLowerCase() === "rock" ||
        humanChoice.toLowerCase() === "scissors" ||
        humanChoice.toLowerCase() === "paper") {
            return humanChoice.toLowerCase();
    } else if (humanChoice === null) {
        return null; //handles cancellation
    }
    else {
        alert("Please enter a valid option");
        return getHumanChoice();
    }
}
getHumanChoice();

// create 2 new variables named humanScore and computerScore, initialize those values with 0.



//Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,compChoice) {
        if (humanChoice === "rock" && compChoice === "scissors") {
            console.log("Congrats you rocked 'em!");
            humanScore +=1;
        } else if (humanChoice === "rock" && compChoice === "paper") {
            console.log("You Lose! Loser!");
            computerScore +=1;
        } else if (humanChoice === "paper" && compChoice === "rock") {
            console.log("You won! Paper beats rock.");
            humanScore +=1;
        } else if (humanChoice === "paper" && compChoice === "scissors") {
            console.log("You've been cut into a million pieces, you have lost.");
        } else if (humanChoice === "scissors" && compChoice === "paper") {
            console.log("You've won! Cut 'em up good.");
            humanScore +=1;
        } else if (humanChoice === "scissors" && compChoice === "rock") {
            console.log("The rock has smashed you, you lost.");
            computerScore +=1;
        } else {
        console.log("It's a Tie! Nobody wins .... or loses?");
        }
    }  // Play 5 rounds
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        if (humanSelection === null) {
            console.log("Game cancelled");
            return;
        }
        const computerSelection = getComputerChoice();
        playRound (humanSelection, computerSelection);
        console.log(`You chose ${humanSelection}, Computer chose ${computerSelection}.`);
        console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
    }
    //Declare overall winner
    if (humanScore === 5) {
        console.log("Congrats! You are the winner winner chicken dinner!");
    } else if (computerScore === 5) {
        console.log("Wap wap waaaaap, you have lost! The computers have begun to take over");
    } else {
        console.log("It's a tie! I cannot believe it!");
    }
}


playGame();