window.addEventListener("load", drawScreen, true);

var imgWarrior = new Image();
imgWarrior.src = "html5man.jpg";

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

Context.beginPath();
Context.moveTo(10,10);
Context.lineTo(150,100);
Context.strokeStyle="#000";
Context.stroke();
}
drawScreen();