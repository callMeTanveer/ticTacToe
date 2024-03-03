/*
Winning Possibilities: 
[
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9], 
    [1, 4, 7], 
    [2, 5, 8,], 
    [3, 6, 9], 
    [1, 5, 9], 
    [3, 5, 7]
]


*/

let boxes = document.querySelectorAll(".box"); 
let resetBtn = document.querySelector("#reset-btn"); 
let resetGamebtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game")

let turnO = true; 

const winPatterns = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false; 
        box.innerText = ""; 
    }
}

const resetGame = () => {
    turnO = true; 
    enableBoxes(); 
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O"; 
            turnO = false; 
        }
        else{
            box.innerText = "X"; 
            turnO = true; 
        }
        box.disabled = true;

        checkWinner();
    });
    
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true; 
    }
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;  
        let pos3Val = boxes[pattern[2]].innerText; 

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log(pos1Val + " is Winner!!"); 
                let msg = document.querySelector("#msg"); 
                msg.innerText = pos1Val + " is Winner!!"
                disableBoxes(); 
            }
        }
    }
};

resetGamebtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame)