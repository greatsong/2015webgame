window.addEventListener("load", drawScreen, true);

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.fillStyle = "#FF0000";
	Context.fillRect(0,0,1000,700);
}
drawScreen();