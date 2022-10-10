"use strict"



window.onload = (event) => {
var result = [], parent = document.getElementById("board");
for (var i = 0, l = parent.childNodes.length; i < l; i++) 
    result.push(parent.childNodes[i]);
for (var i = 0, l = result.length; i < l; i++) 
    
	result[i].className="square";
};


