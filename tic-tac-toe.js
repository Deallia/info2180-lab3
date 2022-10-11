


let classX = document.createElement("p");
classX.innerHTML='X';
console.log(classX);

window.onload = (event) => {

var Board = Array.from(document.getElementById("board").children);
console.log(Board);
for (let i of Board){
	i.classList.add("square");
}
var player;
const playerX ="X";
const playerO ="O";

const wins=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[1,4,7],
[2,5,8]
]

const grid = () => Array.from(document.getElementsByClassName("square"));
const enableListeners =() => grid().forEach(cell => cell.addEventListener("click", function(event){
currentPlayer = player ? playerO : playerX;

event.target.innerHTML=currentPlayer;
event.target.classList.add(currentPlayer);


nextPlayer();
checkWin();
}, {once:true}));

function nextPlayer(){
player=!player;
}


enableListeners();
};

