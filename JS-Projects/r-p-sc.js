
/* Function generates random moves via Math.random function */

  let userInput = 'Rock';

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
      return computerMove = 'Scissors';
      console.log(computerMove);
    } 
  };

  let ComputerMove = getComputerMove();

  console.log(ComputerMove);


  function playRPSCGame(){
    if (userInput === 'Rock') {
      if (ComputerMove === 'Rock' ) {
        console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: draw!`);
      }
      else ('Under development');
    }

  }

  playRPSCGame();


