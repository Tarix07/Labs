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


 	var rain5 = document.getElementById("rain5");
    var ctx5 = rain5.getContext("2d");
	ctx5.lineWidth=5;
	ctx5.strokeStyle="blue";
	ctx5.beginPath();  
    for(var x=1;x<=10;x++){
    ctx5.moveTo(x*50,20);
	ctx5.lineTo((x*50)-20,50);
    }  
	ctx5.stroke();

	var rain6 = document.getElementById("rain6");
    var ctx6 = rain6.getContext("2d");
	ctx6.lineWidth=5;
	ctx6.strokeStyle="blue";
	ctx6.beginPath();  
    for(var x=1;x<=10;x++){
    ctx6.moveTo(x*50,20);
	ctx6.lineTo((x*50)-20,50);
    }  
	ctx6.stroke();

	var rain7 = document.getElementById("rain7");
    var ctx7 = rain7.getContext("2d");
	ctx7.lineWidth=5;
	ctx7.strokeStyle="blue";
	ctx7.beginPath();  
    for(var x=1;x<=10;x++){
    ctx7.moveTo(x*50,20);
	ctx7.lineTo((x*50)-20,50);
    }  
	ctx7.stroke();


        var thunder = document.getElementById("thun");
		var ctx9 = thunder.getContext("2d");
		ctx9.beginPath(); 
		ctx9.lineWidth = 5;
		ctx9.moveTo(10,10);
		ctx9.lineTo(10,70);
		ctx9.lineTo(20,70);
		ctx9.lineTo(20,120);
		ctx9.lineTo(30,120);
		ctx9.lineTo(25,150);
		ctx9.lineTo(70,60);
		ctx9.lineTo(55,60);
		ctx9.lineTo(55,10);
		ctx9.closePath(); 
		ctx9.stroke();
		ctx9.fillStyle = '#ffcc00';
		ctx9.fill();
}