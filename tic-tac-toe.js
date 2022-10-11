


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


function enableHover(){
	grid().forEach(cell =>cell.addEventListener("mouseover", function(e){e.target.classList.add("hover")}))
}


function disableHover(){
	grid().forEach(cell =>cell.addEventListener("mouseout", function(e)					{e.target.classList.remove("hover")}))
}


function checkWin(){
	for (var i; i < wins.length; i++){
		const [a,b,c] = wins[i];
		if ( grid()[a].state!= "" && grid()[a].state==grid()[b].state
			&&grid()[a].state==grid()[c].state)
			console.log("TRUE")
	}
}


enableListeners();
enableHover();
disableHover();
};

