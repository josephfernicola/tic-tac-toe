const gameBoard = (() => {   // Module
    const board = ["" , "" , "" , "" , "" , "" , "" , "" , ""];
    return { board };
})();

const playerFactory = (marker) => { // factory function 
    return { marker };
};

const container = document.getElementById("container");
const resetButton = document.getElementById("reset");
const displayWinner = document.getElementById("displayWinner");
const turn = document.getElementById("turn");
const playerX = playerFactory("X");
const playerO = playerFactory("O");
playerX.marker = true; 
playerO.marker = false;
let stopButton = true;

function fillBoard() { 
    for (let i = 0; i < 9; i++) {
        const arrayItem = document.createElement('div');
        const piece = document.createElement('button');
        arrayItem.classList.add("square");
        arrayItem.setAttribute("data-index" , i);
        piece.classList.add("piece");
        container.appendChild(arrayItem);
        arrayItem.appendChild(piece); 

        if (stopButton == true) {
            piece.addEventListener('click' , () => {
               
                    if (playerX.marker) {
                        if (gameBoard.board[(arrayItem.getAttribute("data-index"))] == "") {
                            gameBoard.board[(arrayItem.getAttribute("data-index"))] = "X";
                        }
                    
                        if (piece.textContent == "") {
                            piece.textContent = "X";
                            turn.textContent = `${playerTwoName}'s Turn`;
                            playerX.marker = false; 
                            playerO.marker = true;
                        }
                    }
                    else if (playerO.marker)  {
                        
                        if (gameBoard.board[(arrayItem.getAttribute("data-index"))] == "") {
                            gameBoard.board[(arrayItem.getAttribute("data-index"))] = "O";
                        }
                       
                        if (piece.textContent == "") {
                            piece.textContent = "O";
                            turn.textContent = `${playerOneName}'s Turn`;
                            playerO.marker = false; 
                            playerX.marker = true;
                        }
                        
                    };
                    checkForWinner(); 
            });
        };
        resetButton.addEventListener('click' , () => { //reset the game board
            playerX.marker = true;
            playerO.marker = false;
            stopButton = false;
            displayWinner.textContent = "";
            turn.textContent = `${playerOneName}'s Turn`;
            gameBoard.board = ["" , "" , "" , "" , "" , "" , "" , "" , ""];
            piece.textContent = "";
            console.log("stop button FALSE Original:" , stopButton);
            console.log("player X" , playerX.marker);
            console.log("player O" , playerO.marker);
            console.log("array" , gameBoard.board);    
            
        });
    };

};

let playerOneName = document.getElementById("nameOne");
let playerTwoName = document.getElementById("nameTwo");
const playerButton = document.getElementById("submit");

playerButton.addEventListener('click' , () => {
    playerOneName = document.querySelector("#nameOne").value;
    playerTwoName = document.querySelector("#nameTwo").value;
    if (playerTwoName !== "" && playerOneName !== "") {
        
        turn.textContent = playerOneName + " vs " + playerTwoName + ". It is " + playerOneName + "'s Turn";
        document.querySelector(".name").style.visibility = "hidden";
        fillBoard();
        const reset = document.getElementById("reset");
        document.querySelector(".name").remove();
        reset.style.visibility = "visible";
    };
});

function checkForWinner () {
    //Horizontal each way
    if (gameBoard.board[0] == "X" && gameBoard.board[1] == "X" && gameBoard.board[2] == "X") {
        displayWinner.textContent = `${playerOneName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    else if (gameBoard.board[3] == "X" && gameBoard.board[4] == "X" && gameBoard.board[5] == "X") {
        displayWinner.textContent = `${playerOneName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }      
    else if (gameBoard.board[6] == "X" && gameBoard.board[7] == "X" && gameBoard.board[8] == "X") {
        displayWinner.textContent = `${playerOneName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }  
    //vertical each way
    else if (gameBoard.board[0] == "X" && gameBoard.board[3] == "X" && gameBoard.board[6] == "X") {
        displayWinner.textContent = `${playerOneName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    else if (gameBoard.board[1] == "X" && gameBoard.board[4] == "X" && gameBoard.board[7] == "X") {
        displayWinner.textContent = `${playerOneName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    else if (gameBoard.board[2] == "X" && gameBoard.board[5] == "X" && gameBoard.board[8] == "X") {
        displayWinner.textContent = `${playerOneName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    //diagonal
    else if (gameBoard.board[0] == "X" && gameBoard.board[4] == "X" && gameBoard.board[8] == "X") {
        displayWinner.textContent = `${playerOneName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    else if (gameBoard.board[2] == "X" && gameBoard.board[4] == "X" && gameBoard.board[6] == "X") {
        displayWinner.textContent = `${playerOneName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    //Horizontal each way
    if (gameBoard.board[0] == "O" && gameBoard.board[1] == "O" && gameBoard.board[2] == "O") {
        displayWinner.textContent = `${playerTwoName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    else if (gameBoard.board[3] == "O" && gameBoard.board[4] == "O" && gameBoard.board[5] == "O") {
        displayWinner.textContent = `${playerTwoName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }      
    else if (gameBoard.board[6] == "O" && gameBoard.board[7] == "O" && gameBoard.board[8] == "O") {
        displayWinner.textContent = `${playerTwoName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }  
    //vertical each way
    else if (gameBoard.board[0] == "O" && gameBoard.board[3] == "O" && gameBoard.board[6] == "O") {
        displayWinner.textContent = `${playerTwoName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    else if (gameBoard.board[1] == "O" && gameBoard.board[4] == "O" && gameBoard.board[7] == "O") {
        displayWinner.textContent = `${playerTwoName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    else if (gameBoard.board[2] == "O" && gameBoard.board[5] == "O" && gameBoard.board[8] == "O") {
        displayWinner.textContent = `${playerTwoName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    //diagonal
    else if (gameBoard.board[0] == "O" && gameBoard.board[4] == "O" && gameBoard.board[8] == "O") {
        displayWinner.textContent = `${playerTwoName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }   
    else if (gameBoard.board[2] == "O" && gameBoard.board[4] == "O" && gameBoard.board[6] == "O") {
        displayWinner.textContent = `${playerTwoName} is the Winner!`;
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
        return;
    }
    else if (gameBoard.board.every(element => element !== "")) {
        displayWinner.textContent = "Tie! Try Again";
        turn.textContent = "";
        playerX.marker = true;
        playerO.marker = false;
    }
};