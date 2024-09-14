let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let newbtn=document.querySelector(".new-game");
let turn0=true;//Initialising that the 0 is the input by default.
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const enableboxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerHTML="";
  }
}

const resetgame=()=>{
  let turn0=true;
  enableboxes();
  msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {//here in the place of box we can use any variable this line bassically means for each i(any variable her box) in boxes
    box.addEventListener("click", () => {
      console.log("The box was clicked.");
      if (turn0){
        box.innerHTML="0";
        turn0=false;
      } else{
        box.innerHTML="X";
        turn0=true;
      }
      box.disabled=true;//Akbar button e input howar por button disable hoa jabe r second time click register korbe na.
      checkWinner();//Will check winner after every click
    });
    
});
const disableboxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");//Agee Winner message the hide thakbe jei kau win hbe thn hide ta remove hoye display hoye jabe.
  disableboxes();
}
const checkWinner = ()=>{
  for(let pattern of winpatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if(pos1val!= "" && pos2val!= "" && pos3val!= ""){
      if(pos1val === pos2val && pos2val === pos3val){
        console.log("Winner");
        showWinner(pos1val);
      }
    }
  }
};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);