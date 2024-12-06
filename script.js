let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; //Player-X or Player-O.
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("Box was Clciked!");
    if(turn0){
      box.innerText = "O";
      turn0 = false;
    }
    else{
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkWinner = ()=>{
  for(pattern of winPatterns){
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    if(posVal1!=""&&posVal2!=""&&posVal3!=""){
      if(posVal1===posVal2&&posVal2===posVal3){
        console.log("Winner",posVal1);
        showWinner(posVal1);
      }
    }
  }
}
const disableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}
const showWinner = (winner)=>{
  msg.innerText = `Congragulations! , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}
const enableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText="";
  }
}
const resetGame = ()=>{
  turn0 = true;
enableBoxes();
msgContainer.classList.add("hide");
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
