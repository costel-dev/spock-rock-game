import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreElem = document.getElementById("player-score");
const playerChoiceElem = document.getElementById("player-choice");
const computerScoreElem = document.getElementById("computer-score");
const computerChoiceElem = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");

// Player 
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");
const playerLizard = document.getElementById("player-lizard");
const playerSpock = document.getElementById("player-spock");
//Computer
const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const computerLizard = document.getElementById("computer-lizard");
const computerSpock = document.getElementById("computer-spock");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
  stopConfetti();
  removeConfetti();
}

// Reset Score & playerChoice / computerChoice
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreElem.textContent = playerScoreNumber;
  computerScoreElem.textContent = computerScoreNumber;
  playerChoiceElem.textContent = "";
  computerChoiceElem.textContent = "";
  resultText.textContent = "";
  resetSelected();
}
window.resetAll = resetAll;

// Random Computer Choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if(computerChoiceNumber < 0.2) {
    computerChoice = "rock";
  } else if(computerChoiceNumber <= 0.4) {
    computerChoice = "paper";
  } else if(computerChoiceNumber <= 0.6) {
    computerChoice = "scissors";
  } else if(computerChoiceNumber <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

// Add 'selected' styling & computerChoice
function displayComputerChoice()  {
  // Add 'selected' styling & computerChoice
  switch (computerChoice) {
    case "rock":
        computerRock.classList.add("selected");
        computerChoiceElem.textContent = " --- ROCK";
      break;
      case "paper":
        computerPaper.classList.add("selected");
        computerChoiceElem.textContent = " --- PAPER";
      break;
      case "scissors":
        computerScissors.classList.add("selected");
        computerChoiceElem.textContent = " --- SCISSORS";
      break;
      case "lizard":
        computerLizard.classList.add("selected");
        computerChoiceElem.textContent = " --- LIZARD";
      break;
      case "spock":
        computerSpock.classList.add("selected");
        computerChoiceElem.textContent = " --- SPOCK";
      break;
    default:
      break;
  }
} 

// Check result, increase scores, update resultText
function updateScore(playerChoice) {
  if(playerChoice === computerChoice) {
    resultText.textContent = "It's a tie";
  } else {
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      startConfetti();
      playerScoreNumber++;
      playerScoreElem.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost!";
      computerScoreNumber++;
      computerScoreElem.textContent = computerScoreNumber;
    }
  }
}

// Call function to process turn
function checkResult(playerChoice) {  
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Passing player selection value and styling icons
function select(playerChoice)  {
  checkResult(playerChoice);
  // Add 'selected' styling & playerChoice
  switch (playerChoice) {
    case "rock":
        playerRock.classList.add("selected");
        playerChoiceElem.textContent = " --- ROCK";
      break;
      case "paper":
        playerPaper.classList.add("selected");
        playerChoiceElem.textContent = " --- PAPER";
      break;
      case "scissors":
        playerScissors.classList.add("selected");
        playerChoiceElem.textContent = " --- SCISSORS";
      break;
      case "lizard":
        playerLizard.classList.add("selected");
        playerChoiceElem.textContent = " --- LIZARD";
      break;
      case "spock":
        playerSpock.classList.add("selected");
        playerChoiceElem.textContent = " --- SPOCK";
      break;
  
    default:
      break;
  }
}
window.select = select;

// On start, set initial values
resetAll();

