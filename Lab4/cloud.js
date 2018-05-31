'use strict'
     
     var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");

var myVar = setInterval(myPuld, 1000);


function myPuld() {
    $("#paud").animate({
        width: '+=50px',
        heith: '-=50px'})
    };



$(document).ready(function(){  

    myPuld();



    $("button").click(function(){
       clearInterval(myVar);
      
        

        $("#cloud1").animate({
            left: '10px',
            opacity: '0.5',
        });

        $("#cloud2").animate({
            right: '10px',
            opacity: '0.5',
        });


         $("#paud").hide(1000);
          $("#rain").hide();
           $(".row").hide();


         $("#sun").animate({
         	width: '+=150px',
         	height: '+=150px'
         })
           

         $("body").css("background-color", "white")
         

    });

});

