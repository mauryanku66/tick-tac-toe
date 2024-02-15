let boxes = document.querySelectorAll(".choice");
let playerOne = "X";
let playerTwo = "Y";
let count = 0;
let playTime = true;
let msg = document.querySelector("#msg");
let reset = document.getElementById("reset");
let playerOneScore = 0;
let playerTwoScore = 0;
let score = document.querySelectorAll('.playerScore');
let playAgain   =document.getElementById("playAgain");
let messageBox = document.querySelector(".message")
let winPatterns = [
    [0, 1 ,2],
    [0, 3 ,6],
    [0, 4 ,8],
    [3, 4 ,5],
    [6, 7 ,8],
    [1, 4 ,7],
    [2, 5 ,8],
    [2, 4 ,6]
]
let check  = [["hello ", "how ", 'are '],['i'],['am'],['fine']];

for (const val of check) {
    console.log(val);
}
boxes.forEach((val)=>{
val.addEventListener("click",()=>{
if ( playTime == true) {
    val.innerText = "X"
    console.log(val);
    playTime = false;
    val.classList.add("blue")
    val.classList.remove('red')
}    
else {
    val.innerText = "O"
    playTime = true;
    val.classList.add("red")
    val.classList.remove("blue")
}
    val.disabled = true;
  count++;
  

  let gamewin = gameResult()
  if (count == 9 && !gamewin) {
      gameDraw();   
      
  }

})
});
function gameDraw() {
    msg.innerText= "match was draw ";
    messageBox.classList.remove("hide");
    boxdiseable()
}
function playerwin(pos1Val) {
    let player ;
    if (pos1Val == "X") {
        player = "player 1"
        playerOneScore++;
        score[0].innerText = playerOneScore;
    }
    else{
        player = "player 2"
        playerTwoScore++;
        score[1].innerText = playerTwoScore;
    }
    msg.innerText = `winner is ${player}`;
    messageBox.classList.remove("hide");
    boxdiseable()
}



const format = ()=>{
 msg.innerText = "message"
 messageBox.classList.add("hide")

 boxenable()
};

const boxenable = ()=>{
    boxes.forEach((val)=>{
        val.innerText = "";
        val.disabled = false;      
        count = 0;
    })
};
const boxdiseable = ()=>{
  boxes.forEach((val)=>{
      val.disabled = true;

  })
  
};

const gameResult = ()=>{
    for (const val of winPatterns) {
        let pos1val = boxes[val[0]].innerText;

        let pos2val = boxes[val[1]].innerText;

        let pos3val = boxes[val[2]].innerText;
        
        

        if (pos1val !== "" &&pos2val !== "" &&pos3val !=="") {
            if (pos1val == pos2val && pos2val == pos3val) {
                let result = true;
                console.log(pos1val);
                playerwin(pos1val);
                return result;
            }
        }
        
    }
    
};




reset.addEventListener("click",format);
playAgain.addEventListener("click", format);