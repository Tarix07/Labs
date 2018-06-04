'use strict'
     
var myVar = setInterval(myPuld, 1000);
function myPuld() {
    $("#paud").animate({
        width: '+=12px',
        top: '-=1px'
    })
    };

function myFunction() {
   var myVar = setTimeout(alert, 1200);
};

function alert() {
  $(".reuse").css("visibility", "visible")
};

function myFunction4() {
   var myVar = setTimeout(text, 700);
};

function text() {
  $("#text").css("visibility", "visible")
};

function myFunction3() {
   var myVar = setTimeout(stop, 25000);
};

function stop() {
    clearInterval(myVar);
    $("#paud").animate({
    });
};


var raining=setInterval (blink, 1000); 
 function blink() {
    Rain1();
    startRain2();
    startRain3();
 };

 function Rain1() {
  $("#rain5").fadeIn(1000).fadeOut(1000);
 };

  function Rain2() {
  $("#rain6").fadeIn(1000).fadeOut(1000);
 };

 function Rain3() {
  $("#rain7").fadeIn(1000).fadeOut(1000)
 };


 function startRain2(){
	var myVar=setTimeout(Rain2,300);
};

function startRain3(){
	var myVar=setTimeout(Rain3,600);
};




$(document).ready(function(){  

    myPuld();
    blink(); 
    myFunction3();

    $(".main").click(function(){

       clearInterval(raining);  

         $("#paud").hide(1000);
       
        $(".rainrow").hide();
      
      
           $(".row").hide();

        $("#cloud1").animate({
            left: '10px',
            opacity: '0.3',
           
        });

        $("#cloud2").animate({
            right: '10px',
            opacity: '0.3',
            
        });

         $("#sun").animate({
         	width: '+=150px',
         	height: '+=150px'
         })
           
         myFunction();
         myFunction4();
         $("body").css("background-color", "white");
         $("#thun").Hide();
         
         

    });

    $(".thunder").click(function(){
    document.getElementById('grim').play();

    $("#thun").fadeIn(100).fadeOut(100);

    var div = $(".flex-container");
    div.animate({width: '90%', opacity: '0.2'},500);
    div.animate({width: '98%', opacity: '0.6'},500);
    div.animate({width: '92%', opacity: '0.5'},500);
    div.animate({width: '100%', opacity: '1'},500);
    });
       
  
     $(".reuse").click(function(){location.reload();});

});

