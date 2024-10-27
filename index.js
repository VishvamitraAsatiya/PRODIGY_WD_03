var box = [];
var taken = [];
var board = [];
var gameOver = false;
var x = "X";
var o = "O";


for (var i=0; i<9; i++){
  box[i] = document.getElementById('b' + [i]);
  taken[i] = false;
}

function state(z){

  if (!taken[z]){
    taken[z] = true;
    board[z] = "X";
    box[z].style.background = "#000";
    box[z].style.webkitTransform = "rotateY(180deg)";
    box[z].style.MozTransform = "rotateY(180deg)";
    setTimeout(function(){
      document.getElementById("b" + z).className = "x";
      document.getElementById("b" + z).innerHTML = x;
      aiMove();
    }, 311);
    setTimeout(isWinner, 600);
  }
}
function aiMove(){
  var ranMove = Math.random();
  if(board[0]=="X" && board[1]=="X" && !taken[2]){
    makeO(2);
  } else if(board[0]=="X" && board[2]=="X" && !taken[1]){
    makeO(1);
  } else if(board[1]=="X" && board[2]=="X" && !taken[0]){
    makeO(0);
  } else if(board[3]=="X" && board[4]=="X" && !taken[5]){
    makeO(5);
  } else if(board[3]=="X" && board[5]=="X" && !taken[4]){
    makeO(4);
  } else if(board[4]=="X" && board[5]=="X" && !taken[3]){
    makeO(3);
  } else if(board[6]=="X" && board[7]=="X" && !taken[8]){
    makeO(8);
  } else if(board[6]=="X" && board[8]=="X" && !taken[7]){
    makeO(7);
  } else if(board[7]=="X" && board[8]=="X" && !taken[6]){
    makeO(6);
  }  else if(board[0]=="X" && board[3]=="X" && !taken[6]){
    makeO(6);
  } else if(board[0]=="X" && board[6]=="X" && !taken[3]){
    makeO(3);
  } else if(board[3]=="X" && board[6]=="X" && !taken[0]){
    makeO(0);
  } else if(board[1]=="X" && board[4]=="X" && !taken[7]){
    makeO(7);
  } else if(board[1]=="X" && board[7]=="X" && !taken[4]){
    makeO(4);
  } else if(board[4]=="X" && board[7]=="X" && !taken[1]){
    makeO(1);
  } else if(board[2]=="X" && board[5]=="X" && !taken[8]){
    makeO(8);
  } else if(board[2]=="X" && board[8]=="X" && !taken[5]){
    makeO(5);
  } else if(board[5]=="X" && board[8]=="X" && !taken[5]){
    makeO(5);
  } else if(board[0]=="X" && board[4]=="X" && !taken[8]){
    makeO(8);
  } else if(board[0]=="X" && board[8]=="X" && !taken[4]){
    makeO(4);
  } else if(board[4]=="X" && board[8]=="X" && !taken[0]){
    makeO(0);
  } else if(board[2]=="X" && board[4]=="X" && !taken[6]){
    makeO(6);
  } else if(board[2]=="X" && board[6]=="X" && !taken[4]){
    makeO(4);
  } else if(board[4]=="X" && board[6]=="X" && !taken[2]){
    makeO(2);
  }

  else if(ranMove < 0.1 && !taken[0]){
    makeO(0);
  } else if (ranMove < .2 && !taken[1]) {
    makeO(1);
  } else if (ranMove < .3 && !taken[2]) {
    makeO(2);
  } else if (ranMove < .4 && !taken[3]) {
    makeO(3);
  } else if (ranMove < .5 && !taken[4]) {
    makeO(4);
  } else if (ranMove < .6 && !taken[5]) {
    makeO(5);
  } else if (ranMove < .7 && !taken[6]) {
    makeO(6);
  } else if (ranMove < .8 && !taken[7]) {
    makeO(7);
  } else if (ranMove < .9 && !taken[8]) {
    makeO(8);
  } else {aiMove();}
}
function makeO(x){
  taken[x] = true;
  board[x] = "O";
  box[x].style.background = "#000";
  box[x].style.webkitTransform = "rotateY(180deg)";
  box[x].style.MozTransform = "rotateY(180deg)";
  setTimeout(function(){
    document.getElementById("b" + x).className = "o";
    document.getElementById("b" + x).innerHTML = o;
  }, 311);
  // box[x].style.opacity = "0.5";
  }

  function isWinner(){
    if (!gameOver){
        if(board[0] == "X" && board[1] == "X" && board[2] == "X"){
          showWinner("You Win");
        } else if(board[3] == "X" && board[4] == "X" && board[5] == "X"){
          showWinner("You Win");
        } else if(board[6] == "X" && board[7] == "X" && board[8] == "X"){
          showWinner("You Win");
        } else if(board[0] == "X" && board[3] == "X" && board[6] == "X"){
          showWinner("You Win");
        } else if(board[1] == "X" && board[4] == "X" && board[7] == "X"){
          showWinner("You Win");
        } else if(board[2] == "X" && board[5] == "X" && board[8] == "X"){
          showWinner("You Win");
        } else if(board[0] == "X" && board[4] == "X" && board[8] == "X"){
          showWinner("You Win");
        } else if(board[2] == "X" && board[4] == "X" && board[6] == "X"){
          showWinner("You Win");
        }  else if(board[0] == "O" && board[1] == "O" && board[2] == "O"){
          showWinner("You Lose");
        }  else if(board[3] == "O" && board[4] == "O" && board[5] == "O"){
          showWinner("You Lose");
        }  else if(board[6] == "O" && board[7] == "O" && board[8] == "O"){
          showWinner("You Lose");
        }  else if(board[0] == "O" && board[3] == "O" && board[6] == "O"){
          showWinner("You Lose");
        }  else if(board[1] == "O" && board[4] == "O" && board[7] == "O"){
          showWinner("You Lose");
        }  else if(board[2] == "O" && board[5] == "O" && board[8] == "O"){
          showWinner("You Lose");
        }  else if(board[0] == "O" && board[4] == "O" && board[8] == "O"){
          showWinner("You Lose");
        }  else if(board[2] == "O" && board[4] == "O" && board[6] == "O"){
          showWinner("You Lose");
        } else if ((board[0]=="X" || board[0]=="O") && (board[1]=="X" || board[1]=="O") && (board[2]=="X" || board[2]=="O") && (board[3]=="X" || board[3]=="O") && (board[4]=="X" || board[4]=="O") && (board[5]=="X" || board[5]=="O") && (board[6]=="X" || board[6]=="O") && (board[7]=="X" || board[7]=="O") && (board[8]=="X" || board[8]=="O")) {
          showWinner("Tie Game");
        }
      }
    }
function showWinner(x){
  alert(x);
  gameOver = true;
}
