window.addEventListener("load", drawScreen, true);

var imgWarrior = new Image();
imgWarrior.src = "html5man.jpg";

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	
	var gradient=Context.createLinearGradient(0,0,170,0);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","red");	

	Context.fillStyle = "#000";
	Context.fillRect(0,0,1000,700);
	Context.fill();

	// Fill with gradient
	Context.strokeStyle=gradient;
	Context.lineWidth=5;
	Context.strokeRect(5,5,160,100);

	Context.beginPath();
	Context.moveTo(10,10);
	Context.lineTo(160,100);
	Context.strokeStyle="#fff";
	Context.stroke();
	Context.beginPath();
	Context.moveTo(160,10);
	Context.lineTo(10,100);
	Context.strokeStyle="#fff";
	Context.stroke();
	Context.beginPath();
	Context.arc(83,50,50,1*Math.PI,2*Math.PI,true); //시작점(x,y),반지름,시작각도,끝각도
	Context.fillStyle="#FF0";
	Context.fill();
	Context.beginPath();
	Context.arc(83,60,30,1*Math.PI,2*Math.PI,true); //시작점(x,y),반지름,시작각도,끝각도
	Context.fillStyle="#FFF";
	Context.fill();
	Context.beginPath();
	Context.arc(60,20,15,0,2*Math.PI,true); //시작점(x,y),반지름,시작각도,끝각도
	Context.arc(105,20,15,0,2*Math.PI,true); //시작점(x,y),반지름,시작각도,끝각도
	Context.fillStyle="#fff";
	Context.fill();
	
}

drawScreen();