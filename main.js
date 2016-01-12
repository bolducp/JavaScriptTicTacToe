"use strict";

$(document).ready(init);

var gameApp = {};
gameApp.playerXtiles = [];
gameApp.playerOtiles = [];
gameApp.currentPlayer = "X";


function init(){
  makeBoard();
  clickHandler();
}


function clickHandler(){
  $('.tile').click(tileClicked);
 //$('#reset').click(reset);
 //$('#start').click(startGame);
}


function tileClicked(event){
  if (gameApp.currentPlayer === "X"){
    playerXMove($(this));
    console.log("x's move");
  } else {
    playerOMove($(this));
    console.log("o's move");
  }
}




function playerXMove($tile){
  console.log($tile);
  $('h1').text("Player O's move:");
  $tile.append($('<div>X</div>'));
  $tile.addClass('unselectable');
  gameApp.playerXtiles.push($tile.data("tile"));
  gameApp.currentPlayer = "O";

  if (checkForWin(gameApp.playerXtiles)){
    gameWon("X");
  }
}


function playerOMove($tile){
  $('h1').text("Player X's move:");
  $tile.append($('<div>O</div>'));
  $tile.addClass('unselectable');
  gameApp.playerOtiles.push($tile.data("tile"));
  gameApp.currentPlayer = "X";

  if (checkForWin(gameApp.playerOtiles)){
    gameWon("O");
}
}


function checkForStaleMate(){
  return gameApp.playerXtiles.concat(gameApp.playerOtiles).length === 9;
}


function checkForWin(playerTiles){
  var playerTilesArray = playerTiles.concat();
  var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
        [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < winningCombos.length; i++){
      var playerCount = 0;
      for (var j = 0; j < winningCombos[i].length; j++){
        if (playerTilesArray.indexOf(winningCombos[i][j]) > -1){
          playerCount += 1;
        }
      if (playerCount === 3){
        return true;
      }
    }
  } return false;
}


function gameWon(playerSymbol){
  $('h1').text('Player ' + playerSymbol + ' wins!!');
}


function makeBoard(){
}
