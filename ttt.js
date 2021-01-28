
/*
const gameboard = (() => {
  let board = Array(9).fill(null);
  board[0]="X";
  board[1]="";

  const setSpot = (index, mark) => {
    if(board[index]==""){
    board[index] = mark;
    updateBoard();
    }
    else{
      return;
    }
  };

  const getSpot = (index) => {
    return board[index];
  };

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  };

  return {setSpot, getSpot, reset};
})();

const updateBoard = () => {
  const board = document.getElementById("grid");
  let totalBoard= [];
  while (board.lastChild){  //delete child elements if they exist so as to clear the grid;
    board.removeChild(board.lastChild);
  };
  console.log(board);
  
  let spot = document.createElement("div")
  //spot.innerHTML = `<p>${gameboard.getSpot(i)}</p>`;

  let i = 0;
  spot.id = i;
  console.log(spot);

  
  for(i=0;i<9;i++){
    console.log("gameboard spot "+ i + " = " + gameboard.getSpot(i));
    spot.innerHTML = `<p>${gameboard.getSpot(i)}</p>`;
    console.log("spot = " + spot.innerHTML);
    spot.className = "boardPosition";
    spot.id = i;
    totalBoard[i] = spot;
    //board.appendChild(spot).className='boardPosition';
    //displayBoard(spot,i);
  }
  console.log(totalBoard);
  for(i=0;i<9;i++){
    console.log(totalBoard[i]);
    board.appendChild(totalBoard[i]);
  }

}

const displayBoard = (spot, i) => {
  const board = document.getElementById('grid');
  spot.id = i;
  board.appendChild(spot).className = "boardPosition";  
  return;
}

//console.log(gameboard.getSpot(0));
gameboard.setSpot(4,"O");
*/

// Store gameboard in an Array in an Object

// Store players in Objects

// Display a game board using contents of the Array stored in the object

// When player clicks a spot, display a game piece(X or O) but only if spot not taken.

// Check for Game Won conditions and declare a winner

// Give players the option to input thier name

// Add buttons to start/restart game


const spotTL = document.getElementById("0");
spotTL.onclick = function(){game.click(this)};

const spotTM = document.getElementById("1");
spotTM.onclick = function(){game.click(this)};

const spotTR = document.getElementById("2");
spotTR.onclick = function(){game.click(this)};

const spotML = document.getElementById("3");
spotML.onclick = function(){game.click(this)};

const spotMM = document.getElementById("4");
spotMM.onclick = function(){game.click(this)};

const spotMR = document.getElementById("5");
spotMR.onclick = function(){game.click(this)};

const spotBL = document.getElementById("6");
spotBL.onclick = function(){game.click(this)};

const spotBM = document.getElementById("7");
spotBM.onclick = function(){game.click(this)};

const spotBR = document.getElementById("8");
spotBR.onclick = function(){game.click(this)};


//    Doesn't Work, Would be nice to just listen to the boardPostition class for a click and return
//    the div element that was clicked. 

//const spot = document.getElementsByClassName('boardPosition');
//spot.onclick = function(){click(this)};
/*
function click(e){
  const move = document.createElement("p");
  move.textContent = "X";

  console.log(e.textContent);

  if(e.children[0].textContent == "X"){
    move.textContent = "O";
  }
  else if (e.children[0].textContent == "O"){
    move.textContent = "X";
  }
  else{
    move.textContent = "X";
  }
  
  e.removeChild(e.children[0]);
  e.append(move);
  console.log(e.textContent);
  console.log(e);
}
*/
const game = (() => {
  let gameBoard = Array(9).fill("");
  let playerTurn = "X";
  let win = false;
  
  const xName = prompt("Who wants to play as X?");
  const oName = prompt("Who wants to play as O?")
  display.textContent = `${xName}'s Turn`;
  const checkWin = (e) => {
    const display = document.getElementById('display');
    

    if(gameBoard[0]==gameBoard[1]&&gameBoard[1]==gameBoard[2]&&(gameBoard[2]=="X"||gameBoard[2]=="O")){
      if(gameBoard[2]=="X"){
        display.textContent = `${xName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      else{
        display.textContent = `${oName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      win = true;
      return;
    }
    else if(gameBoard[3]==gameBoard[4]&&gameBoard[4]==gameBoard[5]&&(gameBoard[5]=="X"||gameBoard[5]=="O")){
      if(gameBoard[5]=="X"){
        display.textContent = `${xName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      else{
        display.textContent = `${oName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      win = true;
      return;
    }
    else if(gameBoard[6]==gameBoard[7]&&gameBoard[7]==gameBoard[8]&&(gameBoard[8]=="X"||gameBoard[8]=="O")){
      if(gameBoard[8]=="X"){
        display.textContent = `${xName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      else{
        display.textContent = `${oName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      win = true;
      return;
    }
    else if(gameBoard[0]==gameBoard[3]&&gameBoard[3]==gameBoard[6]&&(gameBoard[6]=="X"||gameBoard[6]=="O")){
      if(gameBoard[6]=="X"){
        display.textContent = `${xName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      else{
        display.textContent = `${oName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      win = true;
      return;
    }
    else if(gameBoard[1]==gameBoard[4]&&gameBoard[4]==gameBoard[7]&&(gameBoard[7]=="X"||gameBoard[7]=="O")){
      if(gameBoard[7]=="X"){
        display.textContent = `${xName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      else{
        display.textContent = `${oName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      win = true;
      return;
    }
    else if(gameBoard[2]==gameBoard[5]&&gameBoard[5]==gameBoard[8]&&(gameBoard[8]=="X"||gameBoard[8]=="O")){
      if(gameBoard[8]=="X"){
        display.textContent = `${xName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }

      else{
        display.textContent = `${oName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      win = true;
      return;
    }
    else if(gameBoard[0]==gameBoard[4]&&gameBoard[4]==gameBoard[8]&&(gameBoard[8]=="X"||gameBoard[8]=="O")){
      if(gameBoard[8]=="X"){
        display.textContent = `${xName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      else{
        display.textContent = `${oName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      win = true;
      return;
    }
    else if(gameBoard[2]==gameBoard[4]&&gameBoard[4]==gameBoard[6]&&(gameBoard[6]=="X"||gameBoard[6]=="O")){
      if(gameBoard[6]=="X"){
        display.textContent = `${xName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      else{
        display.textContent = `${oName} Wins!!!`;
        document.getElementById("reset").style.display = "flex";
      }
      win = true;
      return;
    }
    return;
  }

  const updateBoard = () => {
    for(let i=0;i<9;i++){
      let spot = document.getElementById(`p${i}`);
      spot.textContent = gameBoard[i];
    }    
  };

  const click = (e) => {
  if(win == false){
    const move = document.createElement("p");
    move.textContent = "X";
    const display = document.getElementById('display');

    if(e.children[0].textContent == ""){
      if (playerTurn=="O"){
        move.textContent = "O";
        playerTurn="X";
        display.textContent = `${xName}'s Turn`;
      }
      else if (playerTurn=="X"){
        move.textContent="X";
        playerTurn="O";
        display.textContent = `${oName}'s Turn`;
      }
    }
    else {
      return;
    }
  
    gameBoard[e.id] = move.textContent;
    console.log(gameBoard);
    e.removeChild(e.children[0]);
    e.append(move);
    checkWin(e);
    //console.log(e.textContent);
    //console.log(e);
  }
  else{
    const display = document.getElementById('display');
    display.className = "W";
    display.textContent = "The game has been won."
    const h = document.createElement('p');
    h.style.fontSize = "40px";
    h.style.paddingLeft = "15px";
    h.textContent = "Refresh page for new game."
    display.append(h);
  }
  }

  

  return {gameBoard, updateBoard, click, checkWin};
})();

