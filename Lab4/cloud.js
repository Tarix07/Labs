'use strict'
     
   
var myVar = setInterval(myPuld, 1000);
function myPuld() {
    $("#paud").animate({
        width: '+=30px',
        top: '-=5px'})
    };


var myVar;

function myFunction() {
    myVar = setTimeout(alert, 2200);
}

function alert() {
  $(".reuse").css("visibility", "visible")
}

var myVar2=setInterval (blink, 3000);
 function blink() {
  $("#rain").fadeIn(3000).fadeOut(3000)
 };


$(document).ready(function(){  

    myPuld();
    blink();

    $(".main").click(function(){

       clearInterval(myVar2);
       clearInterval(myVar);

        $("#rain").css("display", "none")       
       
        

        $("#cloud1").animate({
            left: '10px',
            opacity: '0.5',
            width: '-=100px'
        });

        $("#cloud2").animate({
            right: '10px',
            opacity: '0.5',
            width: '-=100px'
        });


         $("#paud").hide(1000);
          $("#rain").hide(100);
           $(".row").hide();


         $("#sun").animate({
         	width: '+=150px',
         	height: '+=150px'
         })
           

         $("body").css("background-color", "white")

         
      myFunction();

    });

     $(".reuse").click(function(){location.reload();});

});

