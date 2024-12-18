let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result")
const scoreHuman = document.getElementById("human-score")
const scoreComputer = document.getElementById("computer-score")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.value);
  });
});

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
  }

function playRound(HumanChoice) {
  const ComputerChoice = getComputerChoice()
  if (
    (HumanChoice == "rock" && ComputerChoice == "scissors") ||
    (HumanChoice == "paper" && ComputerChoice == "rock") ||
    (HumanChoice == "scissors" && ComputerChoice == "paper")
  ) {
    humanScore++;
    result.textContent = `You win ${HumanChoice} beats ${ComputerChoice}`;
    scoreHuman.textContent = `Your score: ${humanScore}`;
  } else if (
    (ComputerChoice == "rock" && HumanChoice == "scissors") ||
    (ComputerChoice == "paper" && HumanChoice == "rock") ||
    (ComputerChoice == "scissors" && HumanChoice == "paper")
  ) {
    computerScore++;
    result.textContent = `You lost ${ComputerChoice} beats ${HumanChoice}`;
    scoreComputer.textContent = `Computer score: ${computerScore}`;
  } else {
    result.textContent = `Both are tie`;
  }

  if(humanScore == 5) {
    result.textContent = `You won`;
    setTimeout(reset, 2000)
  } 
  
  else if(computerScore == 5) {
    result.textContent = `You lose`;
    reset()
    setTimeout(reset, 2000)
  }
  return;
}

function reset() {
  
  humanScore = 0;
  computerScore = 0;
  scoreHuman.textContent = `Your score: ${humanScore}`;
  scoreComputer.textContent = `Computer score: ${computerScore}`;
  result.textContent = `Game has been reset. Start playing again!`;
  
}






