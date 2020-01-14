/**
 * 
 */
var clickedcounter = 0;

function divclick(){
	clickedcounter++;
	console.log("clickedcounter: " + clickedcounter);
	window.document.getElementById("clicked").innerHTML = clickedcounter;
	changeShape();
	changeAnimation();
}

function changeAnimation(){
	console.log('Animation: ');
	console.log(window.getComputedStyle(window.document.getElementById("circle")).animationName);
	window.document.getElementById("circle").style.animationName = 'example2'
}

function changeShape(){
	window.document.getElementById("circle").style.width = window.document.getElementById("circle").clientWidth-1 + "px";
	window.document.getElementById("circle").style.height = window.document.getElementById("circle").clientHeight-1 + "px";
	//console.log(window.document.getElementById("circle").clientWidth);
}

window.onload = function(){
	console.log("log naar de console" + clickedcounter)
}

