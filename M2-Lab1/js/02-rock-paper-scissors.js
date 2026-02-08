// function that promts user to enter rock, paper, or scissors
function getUserChoice() {
  let userInput = prompt("Please enter rock, paper, or scissors:");
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    alert("Invalid input. Please try again.");
    return getUserChoice();
  }
}

// function that randomly generates computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// function that determines the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("You win!");
  } else {
    alert("Computer wins!");
  }
}

// main function to play the game
function playGame() {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
}

playGame();
