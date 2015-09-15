	var imgBackground = new Image();
	imgBackground.src = "background.png";

	var imgPlayer = new Image();
	imgPlayer.src = "html5small.png";
	imgPlayer.addEventListener("load", drawScreen, false);
	

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	
	Context.drawImage(imgBackground, 0, 0); 
 	Context.drawImage(imgPlayer, 350, 250); 	
}

drawScreen();