/* 
randomize cpu choice between 3 options
player selects own choice from 3 buttons
declare winner
*/

let cpuChoice
let playerChoice
let playerScore = 0
let cpuScore = 0

function cpuChoiceRandom(){
  var cpuSelectOne = Math.random();
  
  console.log(cpuSelectOne);
  
  if(cpuSelectOne < 0.34){
   cpuChoice = "rock";
  }
  else if (cpuSelectOne < 0.67){
   cpuChoice = "paper";
  }
  else {
   cpuChoice = "scissors";
  }
  
  console.log(cpuChoice);
  playerGameStart()
}

function playerGameStart(){
    let playerPrompt = prompt("rock, paper, or scissors?");

    if(playerPrompt.toLowerCase() === "rock"){
        playerChoice = "rock";
    }
    else if (playerPrompt.toLowerCase() === "paper"){
        playerChoice = "paper";
    }
    else if (playerPrompt.toLowerCase() === "scissors"){
        playerChoice = "scissors";
    }
    else {
        alert("that is not a valid choice, game over");
    }
    console.log(playerChoice);
    scoreBoard()
}


function scoreBoard(){
    if (playerChoice === "rock" && cpuChoice === "scissors"){
        playerScore+=1;
    }
    else if (playerChoice === "rock" && cpuChoice === "paper"){
        cpuScore+=1;
    }
    else if (playerChoice === "paper" && cpuChoice === "rock"){
        playerScore+=1;
    }
    else if (playerChoice === "paper" && cpuChoice === "scissors"){
        cpuScore+=1;
    }
    else if (playerChoice === "scissors" && cpuChoice === "paper"){
        playerScore+=1;
    }
    else if (playerChoice === "scissors" && cpuChoice === "rock"){
        cpuScore+=1;
    }
    alert(playerScore + " " + '-' + " " + cpuScore);

    let playAgain = prompt("play again? yes or no");
    if(playAgain.toLowerCase() === "yes"){
        cpuChoiceRandom();
    }
    else {
        alert("game ending");
    }
}

// function scoreBoard() {

//     if(playerWin){
//         playerScore+=1;
//     }
//     else if (cpuWin){
//         cpuScore+=1;
//     }
//     alert(playerScore + " " + '-' + " " + cpuScore);

//     let playAgain = prompt("play again? yes or no");
//     if(playAgain.toLowerCase() === "yes"){
//         cpuChoiceRandom;
//     }
//     else {
//         alert("game ending");
//     }

// }