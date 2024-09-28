console.log('Hello');



function getComputerMove() {

  const randomNumber = Math.random();
  let computerMove;

  console.log(randomNumber);

  if (randomNumber >= 0 && randomNumber <= 0.3 ) {
    computerMove = 'Rock';
    console.log(computerMove)
  }
  else if (randomNumber > 0.3 && randomNumber <= 0.6) {
    computerMove = 'Paper';
    console.log(computerMove)
  } 
  else if (randomNumber > 0.6 && randomNumber <= 1) {
    computerMove = 'Scissors';
    console.log(computerMove)
  } 
};

getComputerMove();