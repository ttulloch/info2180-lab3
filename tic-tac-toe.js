window.onload = function(){
    //Exercise 1
    var BoardState = ["", "", "", "", "", "", "", "", ""];
    var GameBoxes = document.getElementById("board").getElementsByTagName("div");
    var statusText =  document.getElementById("status");
    var ActivePlayer = "X";
    const winMessage = () => `Player ${ActivePlayer} has won!`;
    const drawMessage = () => `Game ended in a draw!`;
    const activePlayerTurn = () => `It's ${ActivePlayer}'s turn`;

   

    
    

    for (var i = 0; i < GameBoxes.length; i++) 
    {
        GameBoxes[i].classList.add("square");
        GameBoxes[i].addEventListener("click", function(e){
        var square_index = Array.prototype.slice.call(GameBoxes);
        var activeSquare = square_index.indexOf(e.target);

//Exercise 2
if (ActivePlayer == "X"){
    this.innerHTML = "X"; 
    this.classList.add("X");
    this.style.pointerEvents = 'none';
    BoardState[activeSquare] = ActivePlayer;
    checkWinner(ActivePlayer);
    ActivePlayer = "O"; 
    statusText.innerHTML = activePlayerTurn
}

else if (ActivePlayer == "O"){
    this.innerHTML = "O";
    this.classList.add("O");
    this.style.pointerEvents = 'none';
    BoardState[activeSquare] = ActivePlayer;
    checkWinner(ActivePlayer);
    ActivePlayer = "x";
    statusText.innerHTML = activePlayerTurn
}
});

 //Excercise #3
 GameBoxes[i].addEventListener("mouseover", function(){
    this.classList.add("hover");
});

GameBoxes[i].addEventListener("mouseout", function(){
    this.classList.remove("hover");
});
//Exercize #4
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function winnercheck(ActivePlayer) {
    let winner = false;
    for (let i = 0; i <= 7; i++) {
        const winif = winningConditions[i];
        let a = BoardState[winCondition[0]];
        let b = BoardState[winCondition[1]];
        let c = BoardState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            winif = true;
            break
        }
    }

    if (winner) {
        statusDisplay.innerHTML = winMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !BoardState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    
    //Exercise #5
    var button = document.getElementsByClassName("btn");
    button[0].addEventListener("click", function(){
        BoardState = ["", "", "", "", "", "", "", "", ""];
        ActivePlayer = "X";
        statusText.classList.remove("you-won");
        statusText.innerHTML = "Move your mouse over a square and click to play an X or an O.";

        for (var c of GameBoxes){
            c.style.pointerEvents = 'auto';
            c.classList.remove("X");
            c.classList.remove("O");
            c.innerHTML = "";
        }
    });
    console.log(ActivePlayer);
    if(ActivePlayer == "X"){
        statusText.classList.add("you-won");
        statusText.innerHTML = winMessage ;
    }else if(ActivePLayer == "O"){
        statusText.classList.add("you-won");
        statusText.innerHTML = winMessage ;
    }
}
    }
}
