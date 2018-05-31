window.onload = function() {
	var cloud1 = document.getElementById("cloud1");
	var ctx1 = cloud1.getContext("2d");
	ctx1.lineWidth = 5;
	ctx1.beginPath();
	ctx1.arc(60, 160, 50, 0.5*Math.PI, 1.5 * Math.PI);
	ctx1.arc(110, 110, 50, 0.9*Math.PI, 1.9 * Math.PI);
	ctx1.arc(200, 80, 50, 1*Math.PI, 2.15 * Math.PI);
	ctx1.arc(250, 140, 50, 1.5*Math.PI, 2.1* Math.PI);
	ctx1.arc(260, 170, 50, 1.8*Math.PI, 2.3* Math.PI);
	ctx1.closePath();
	ctx1.stroke();
	ctx1.fillStyle = '#666699'
	ctx1.fill();


	var cloud2 = document.getElementById("cloud2");
	var ctx2 = cloud2.getContext("2d");
	ctx2.lineWidth = 5;
	ctx2.beginPath();
	ctx2.arc(60, 170, 50, 0.7*Math.PI, 1.2* Math.PI);
	ctx2.arc(70, 140, 50, 0.9*Math.PI, 1.5* Math.PI);
	ctx2.arc(120, 80, 50, 0.85*Math.PI, 2 * Math.PI);
	ctx2.arc(210, 110, 50, 1.1*Math.PI, 2.1 * Math.PI);
	ctx2.arc(260, 160, 50, 1.5*Math.PI, 0.5 * Math.PI);
	ctx2.closePath();
    ctx2.stroke();
	ctx2.fillStyle = '#666699'
	ctx2.fill();


	var padl = document.getElementById("paud");
	var ctx3 = padl.getContext("2d");
    ctx3.lineWidth = 5;
    ctx3.beginPath();
	ctx3.arc(100,75,50,0.5*Math.PI,1.5*Math.PI);
    ctx3.arc(240,75,50,1.5*Math.PI,0.5*Math.PI);
	ctx3.closePath();
	ctx3.stroke();
    ctx3.fillStyle = ' #000099'
 	ctx3.fill();


 	var sun = document.getElementById("sun");
	var ctx4 = sun.getContext("2d");
	ctx4.beginPath();
	ctx4.lineWidth = 5;
	ctx4.arc(55, 55, 50, 0, 2 * Math.PI);
	ctx4.closePath();
	ctx4.stroke();
	ctx4.fillStyle = '#ffcc00'
 	ctx4.fill();

 	var rain = document.getElementById("rain");
	var ctx5 = rain.getContext("2d");
	ctx5.lineWidth=10;
	ctx5.strokeStyle="blue";
	ctx5.beginPath();
	ctx5.moveTo(60,20);
	ctx5.lineTo(30,100);
	ctx5.moveTo(110,20);
	ctx5.lineTo(80,100);
	ctx5.moveTo(160,20);
	ctx5.lineTo(130,100);
	ctx5.moveTo(210,20);
	ctx5.lineTo(180,100);
	ctx5.moveTo(260,20);
	ctx5.lineTo(230,100);
	ctx5.moveTo(310,20);
	ctx5.lineTo(280,100);
	ctx5.moveTo(360,20);
	ctx5.lineTo(330,100);
	ctx5.moveTo(410,20);
	ctx5.lineTo(380,100);
	ctx5.moveTo(460,20);
	ctx5.lineTo(430,100);
	ctx5.moveTo(510,20);
	ctx5.lineTo(480,100);
	ctx5.stroke();
}