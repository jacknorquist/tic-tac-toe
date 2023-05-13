

let playerSelection ="";
let computorSelectionMarkArray = "";
let boardArray=[];
let arrayLength = 1;
let numberPicked = "";
//Initialize Game Components 


const startGame = (()=>{
    let xBtn = document.getElementById("X");
    let oBtn = document.getElementById("O");
    let boardForm = document.querySelector(".form-div");
    boardForm.style.display="none";

    let threeBtn = document.getElementById("3-btn");
    let fourBtn = document.getElementById("4-btn");
    let fiveBtn = document.getElementById("5-btn");

    xBtn.addEventListener('click', function(){
        $("#X").fadeOut();
        $("#O").fadeOut();
        $("#choose-mark").fadeOut();
        playerSelection = "X";
        $(".form-div").fadeIn();
        startGame.computorSelection();
     })

     oBtn.addEventListener('click', function (){
         $("#X").fadeOut();
         $("#O").fadeOut();
         $("#choose-mark").fadeOut();
         playerSelection = "O" ;
         $(".form-div").fadeIn();
         startGame.computorSelection();
     })

        //Sets mark to opposite of player selection
        const computorSelection = () =>{
            if (playerSelection == "X"){
                computorSelectionMarkArray = "O"
            } else {
                computorSelectionMarkArray = "X"
            }
        }

    threeBtn.addEventListener('click', function(){
        event.preventDefault();
        numberPicked=3;
        $(".form-div").fadeOut();
        gameBoard.createBoard();
        gameBoard.createArray();
        gameBoard.board.style.display="block";
    })
    fourBtn.addEventListener('click', function(){
        event.preventDefault();
        numberPicked = 4;
        $(".form-div").fadeOut();
        gameBoard.createBoard();
        gameBoard.createArray();
        gameBoard.board.style.display="block";
        
    })
    fiveBtn.addEventListener('click', function(){
        event.preventDefault();
        numberPicked = 5;
        $(".form-div").fadeOut();
        gameBoard.createBoard();
        gameBoard.createArray();
        gameBoard.board.style.display="block";
    })

return{computorSelection, xBtn, oBtn,};

})();



//Create Dynamic Board and Array for Game
 const gameBoard = (() =>{
    const boardDiv = document.querySelector("#board")
    const board = document.createElement("div");
    board.classList.add("board");
    

        const createBoard = () =>{  

                for (let i=0; i<numberPicked; i++){
                    const rows = document.createElement("div");  
                    rows.classList.add("board-rows");
            
                    for(let j=0; j<numberPicked; j++){
                        const columns = document.createElement("div");
                        columns.setAttribute("id", arrayLength)
                        columns.classList.add("board-columns");
                        arrayLength++;
                        rows.appendChild(columns);
                        board.appendChild(rows);
                        boardDiv.appendChild(board);
                    }
                }
        
            }
        const createArray = ()=>{
                boardArray = Array(arrayLength-1).fill("");
            }

            return{createBoard, board, createArray, arrayLength, boardDiv};       
 })();




// Adding Selections to Game Board




const appendMarks = (()=>{
        let idNum = "";
        let currentColumn = "";

        const buttonClick = function (e){
            idNum =e.target.id;
            currentColumn = document.getElementById(idNum);
            console.log(currentColumn);
            appendMarks.appendPlayerMark();
        }


        const appendPlayerMark = () =>{
            let playerMarker = document.createElement("div");
            playerMarker.classList.add(playerSelection);
            playerMarker.textContent = playerSelection
            let idNumArray = idNum - 1;
            if (boardArray[idNumArray] == ""){
            currentColumn.appendChild(playerMarker);
            boardArray[idNumArray]=playerSelection;
            console.log(boardArray);
            winner.player[numberPicked]();
            }
        }


        const appendComputorSelection = ()=> {
            const randomNumber = Math.floor(Math.random()*arrayLength);
            const computorMarker = document.createElement("div");
            computorMarker.classList.add(computorSelectionMarkArray);
            computorMarker.textContent = computorSelectionMarkArray;
            let computorColumn = document.getElementById(randomNumber);
            let idNumArray = randomNumber - 1;
            if (boardArray[idNumArray] == ""){
            computorColumn.appendChild(computorMarker);
            boardArray[idNumArray] = computorSelectionMarkArray;
            winner.computor[numberPicked]();
            }else {
                appendComputorSelection();
            }
        } 

    
    return {buttonClick, appendPlayerMark, appendComputorSelection};
})();




//Checks for a winner and ends game if winner
const winner = (()=>{


   const player = {
        3: () =>{
            if( [0, 1, 2].every(index => boardArray[index] === playerSelection) ||
                [3, 4, 5].every(index => boardArray[index] === playerSelection) ||
                [6, 7, 8].every(index => boardArray[index] === playerSelection) ||
                [0, 3, 6].every(index => boardArray[index] === playerSelection) ||
                [1, 4, 7].every(index => boardArray[index] === playerSelection) ||
                [2, 5, 8].every(index => boardArray[index] === playerSelection) ||
                [2, 4, 6].every(index => boardArray[index] === playerSelection) ||
                [0, 4, 8].every(index => boardArray[index] === playerSelection) 
            ){
                winner.winnerAppend();
            } else { appendMarks.appendComputorSelection();}
        },
        4: () => {
            if ([0, 1, 2, 3].every(index => boardArray[index] === playerSelection) ||
                [4, 5, 6, 7].every(index => boardArray[index] === playerSelection) ||
                [8, 9, 10, 11].every(index => boardArray[index] === playerSelection) ||
                [12, 13, 14, 15].every(index => boardArray[index] === playerSelection) ||
                [0, 4, 8, 12].every(index => boardArray[index] === playerSelection) ||
                [1, 5, 9, 13].every(index => boardArray[index] === playerSelection) ||
                [2, 6, 10, 14].every(index => boardArray[index] === playerSelection) ||
                [3, 7, 11, 15].every(index => boardArray[index] === playerSelection) ||
                [0, 5, 10, 15].every(index => boardArray[index] === playerSelection) ||
                [3, 6, 9, 12].every(index => boardArray[index] === playerSelection)) {
                winner.winnerAppend();
            }else {appendMarks.appendComputorSelection()}
;        },
        5:  ()=>{
            if( [0, 1, 2, 3, 4].every(index => boardArray[index] === playerSelection) ||
                [5, 6, 7, 8, 9].every(index => boardArray[index] === playerSelection) ||
                [10, 11, 12, 13, 14].every(index => boardArray[index] ===playerSelection) ||
                [15, 16, 17, 18, 19].every(index => boardArray[index] === playerSelection) ||
                [20, 21, 22, 23, 24].every(index => boardArray[index] === playerSelection) ||
                [0, 5, 10, 15, 20].every(index => boardArray[index] === playerSelection) ||
                [1, 6, 11, 16, 21].every(index => boardArray[index] === playerSelection) ||
                [2, 7, 12, 17, 22].every(index => boardArray[index] === playerSelection) ||
                [3, 8, 13, 18, 23].every(index => boardArray[index] === playerSelection) ||
                [4, 9, 14, 19, 24].every(index => boardArray[index] === playerSelection) ||
                [0, 6, 12, 18, 24].every(index => boardArray[index] === playerSelection) ||
                [4, 8, 12, 16, 20].every(index => boardArray[index] === playerSelection)  
            ){
                winner.winnerAppend();
            }else { appendMarks.appendComputorSelection();}

        }
    }
    const computor = {
        3: ()=>{
            if( [0, 1, 2].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [3, 4, 5].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [6, 7, 8].every(index => boardArray[index] ===computorSelectionMarkArray) ||
                [0, 3, 6].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [1, 4, 7].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [2, 5, 8].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [2, 4, 6].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [0, 4, 8].every(index => boardArray[index] === computorSelectionMarkArray) 
            ){
                console.log("you lost")
            }
        },
        4:()=>{
            if( [0, 1, 2, 3].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [4, 5, 6, 7].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [8, 9, 10, 11].every(index => boardArray[index] ===computorSelectionMarkArray) ||
                [12, 13, 14, 15].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [0, 4, 8, 12].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [1, 5, 9, 13].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [2, 6, 10, 14].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [3, 7, 11, 15].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [0, 5, 10, 15].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [3, 6, 9, 12].every(index => boardArray[index] === computorSelectionMarkArray) 
            ){
                console.log("you lost")
            }

        },
        5: ()=>{
            if( [0, 1, 2, 3, 4].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [5, 6, 7, 8, 9].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [10, 11, 12, 13, 14].every(index => boardArray[index] ===computorSelectionMarkArray) ||
                [15, 16, 17, 18, 19].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [20, 21, 22, 23, 24].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [0, 5, 10, 15, 20].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [1, 6, 11, 16, 21].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [2, 7, 12, 17, 22].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [3, 8, 13, 18, 23].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [4, 9, 14, 19, 24].every(index => boardArray[index] === computorSelectionMarkArray) ||
                [0, 6, 12, 18, 24].every(index => boardArray[index] === computorSelectionMarkArray)||
                [4, 8, 12, 16, 20].every(index => boardArray[index] === playerSelection)  
            ){
                console.log("You Lost!")
            }

        }
    }


    const winnerAppend = ()=>{
        winnerMsg.style.display = "block";
    }

    const loserAppend = ()=>{
        loserMsg.style.display = "block";
    }


    return{player, computor, winnerAppend, loserAppend};
})();

//End of Game 
const playAgainBtn = document.getElementById("play-again");
const resetBtn = document.getElementById("reset-btn");

const endGame = (()=>{
    const playAgain = ()=>{
        let markersA = document.querySelectorAll(".X");
        markersA.forEach(markersA=>{
            markersA.remove();
        });
        let markersB = document.querySelectorAll(".O");
        markersB.forEach(markersB=>{
            markersB.remove();
        });
        boardArray = Array(arrayLength-1).fill("");
        winnerMsg.style.display = "none";
        loserMsg.style.display = "none";

    }
    const reset = ()=>{
        boardArray = [];
        startGame.xBtn.style.display = "flex";
        startGame.oBtn.style.display = "flex";
        winnerMsg.style.display = "none";
        loserMsg.style.display = "none";
        $(gameBoard.board).empty();
        playerSelection="";
        computorSelectionMarkArray="";
        arrayLength = 1;
        $("#choose-mark").fadeIn();
        

    }
    return{playAgain, reset}

})();

gameBoard.board.addEventListener('click', gameBoard.createArray, {once: true});
gameBoard.board.addEventListener('click', appendMarks.buttonClick);

resetBtn.addEventListener('click', endGame.reset);
playAgainBtn.addEventListener('click', endGame.playAgain);
const winnerMsg = document.getElementById("winner-msg");
const loserMsg = document.getElementById("loser-msg");









