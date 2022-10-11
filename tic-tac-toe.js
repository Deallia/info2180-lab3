
window.onload = (event) => {

var Board = Array.from(document.getElementById("board").children);

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
	var currentPlayer = player ? playerO : playerX;

	event.target.innerHTML=currentPlayer;
	event.target.classList.add(currentPlayer);
       
      
		
		nextPlayer();
		winner(currentPlayer);
	

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


function winner(player){
   if (checkWin()){
	if (player==playerX){
			document.getElementById("status").innerHTML="Congratulations! X is the Winner!";
			document.getElementById("status").classList.add("you-won");}
			
			else {
				document.getElementById("status").innerHTML="Congratulations! O is the Winner!";
				document.getElementById("status").classList.add("you-won");
			}
	}
}


function checkWin(){
	var victory= false;
	for (var i=0; i < wins.length; i++){
		const a = wins[i][0];
		const b = wins[i][1];
		const c = wins[i][2];	 
		const Squares = grid();
																if ( Squares[a].innerHTML !== "" && Squares[a].innerHTML === Squares[b].innerHTML
			&& Squares[a].innerHTML === Squares[c].innerHTML) {

			victory=true;
			break;
		}
		
			
	}
	return victory;
}

	enableListeners();
	enableHover();
	disableHover();
	
};

