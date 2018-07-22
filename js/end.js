// this js file executes after player wins game and was placed in a different file to wait for entire DOM to build

// popup modal to indicate win, ask if play again
function playerWin() {
  document.querySelector(".end-modal").classList.toggle("show-modal");
}

//reloads the page for a new game
function newGame() {
  location.reload();
}

document.getElementById("playAgain").addEventListener("click", newGame);
