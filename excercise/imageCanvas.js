window.addEventListener("load", drawScreen, true);

var imgWarrior = new Image();
imgWarrior.src = "html5.png";

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	
	Context.fillStyle = "#000000";
	Context.fillRect(0,0,1000,700);
	
	Context.drawImage(imgWarrior,150, 10);
}

drawScreen();
