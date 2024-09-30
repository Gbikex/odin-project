
  let humanScore = 0;
  let computerScore = 0;

/* Logs to  see the values of the variables for development purposes 
  console.log(userInput);
  console.log(ComputerMove);
*/


/* Player move => input value, accepts only rock/paper/scissors case sensitivity does not matter, handled in the function*/
  function playerMove() {

    let playerMove = prompt('To start the game please type in : rock, paper or scissor!');

    playerMove = playerMove;

    if (playerMove == '' || playerMove === null ) {
      console.log('No value inserted');
    } else {

    playerMove = playerMove.toLowerCase();
    playerMove = playerMove.charAt(0).toUpperCase() + playerMove.slice(1);
    
    if (playerMove === 'Rock' || playerMove === 'Paper' || playerMove === 'Scissor') {
      return playerMove
    } else alert('Please type in rock,paper or scissor to start the game!');
    location.reload();
    }
  }

/* Function generates random moves via Math.random function */
  function getComputerMove() {

    const randomNumber = Math.random();
    let computerMove;
    /*console.log(randomNumber);*/

    if (randomNumber >= 0 && randomNumber <= 0.3 ) {
      return computerMove = 'Rock';
      console.log(computerMove);
    }
    else if (randomNumber > 0.3 && randomNumber <= 0.6) {
      return computerMove = 'Paper';
      console.log(computerMove);
    } 
    else if (randomNumber > 0.6 && randomNumber <= 1) {
      return computerMove = 'Scissor';
      console.log(computerMove);
    } 
  };

/* Rock paper scissor game that plays the game upon user input and random generated select*/
  function playRPSCGame(){

    let userInput = playerMove();
    let ComputerMove = getComputerMove();


    if (userInput === 'Rock') {
      if (ComputerMove === 'Rock') {
        console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Draw!`);
      }else if (ComputerMove === 'Paper') {
        console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Computer Win!`);
      }else if (ComputerMove === 'Scissor') {
        console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Player Win!`);
      }
      }else if (userInput === 'Paper') {
        if (ComputerMove === 'Rock') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Player Win!`);
        }else if (ComputerMove === 'Paper') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Draw!`);
        }else if (ComputerMove === 'Scissor') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Computer Win!`);
        }
      }else if (userInput === 'Scissor') {
        if (ComputerMove === 'Rock') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Computer Win!`);
        }else if (ComputerMove === 'Paper') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Player Win!`);
        }else if (ComputerMove === 'Scissor') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Draw!`);
        }
      }
    }

  function playRound(humanChoice ,computerChoice) {

    humanChoice = playerMove();
    computerChoice = getComputerMove();

    if (humanChoice === 'Rock') {
      if(computerChoice === 'Rock'){

        console.log(`${humanChoice} hits ${computerChoice} it is a draw!`);

        computerScore ++;
        humanScore ++;

        console.log(computerScore,humanScore)

      }else if (computerChoice === 'Paper') {

        console.log(`${computerChoice} beats ${humanChoice}, Computer wins!`);

        computerScore ++;

        console.log(computerScore,humanScore);
      }else if (computerChoice === 'Scissor') {

        console.log(`${humanChoice} beats ${computerChoice} Player wins!`)

        humanScore ++;

        console.log(computerScore,humanScore);
      }
    }else if (humanChoice === 'Paper') {
      if(computerChoice === 'Rock'){

        console.log(`${humanChoice} beats ${computerChoice} Player wins!`);

        humanScore ++;

        console.log(computerScore,humanScore)

      }else if (computerChoice === 'Paper') {

        console.log(`${humanChoice} hits ${computerChoice} it is a draw!`);

        humanScore ++;
        computerScore ++;

        console.log(computerScore,humanScore);
      }else if (computerChoice === 'Scissor') {

        console.log(`${computerChoice} beats ${humanChoice}, Computer wins!`)

        computerScore ++;

        console.log(computerScore,humanScore);
      }
    }else if (humanChoice === 'Scissor') {
      if(computerChoice === 'Rock'){

        console.log(`${computerChoice} beats ${humanChoice}, Computer wins!`);

        computerScore ++;

        console.log(computerScore,humanScore)

      }else if (computerChoice === 'Paper') {

        console.log(`${humanChoice} beats ${computerChoice} Player wins!`);

        humanScore ++;

        console.log(computerScore,humanScore);
      }else if (computerChoice === 'Scissor') {

        console.log(`${humanChoice} hits ${computerChoice} it is a draw!`)

        computerScore ++;
        computerScore ++;

        console.log(computerScore,humanScore);
      }
    }
  }


/* Calling functions */
 /*  playRPSCGame(); */


 playRound();