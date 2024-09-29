
let userInput = 'Scissor';
let ComputerMove = getComputerMove();

/* Logs to test the values for development */
console.log(userInput);
console.log(ComputerMove);


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

/*Rock paper scissor game that plays the game upon user input and random generated select*/
  function playRPSCGame(){
    if (userInput === 'Rock') {
      if (ComputerMove === 'Rock') {
        console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Draw!`);
      } else if(ComputerMove === 'Paper') {
        console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Computer Win!`);
      } else if(ComputerMove === 'Scissor') {
        console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Player Win!`);
      }
      }else if (userInput === 'Paper') {
        if (ComputerMove === 'Rock') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Player Win!`);
        } else if(ComputerMove === 'Paper') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Draw!`);
        } else if(ComputerMove === 'Scissor') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Computer Win!`);
        }
      } else if (userInput === 'Scissor') {
        if (ComputerMove === 'Rock') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Computer Win!`);
        } else if(ComputerMove === 'Paper') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Player Win!`);
        } else if(ComputerMove === 'Scissor') {
          console.log(`Player choose ${userInput} and Computer choose ${ComputerMove}, result: Draw!`);
        }
      }
    }

/* Calling functions */
  playRPSCGame();


