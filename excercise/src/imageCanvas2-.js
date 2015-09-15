window.addEventListener("load", drawScreen, true);

var imgWarrior = new Image();
imgWarrior.src = "html5man.jpg";

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	Context.beginPath();
	Context.arc(200,80,50,1*Math.PI,1.5*Math.PI,true); 
	//시작점(x,y),반지름,시작각도,끝각도,반시계방향
	Context.fillStyle="#000";
	Context.fill();
}
drawScreen();