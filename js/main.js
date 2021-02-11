$(document).ready(function(a1, a2, a3, a4, a5, a6, a7){ //a custom function using parameters
    $("#scdiv, #cong, #sugg, #purchase, #back").hide();
    var a=0;// global variable for score
    $("#2, #3, #4, #5, #6, #7").css("display", "none");
    
    //an Immediately Invoked Function Expression (IFFE) which contains the quiz qyeries
  $("#q1").click(function(){
      //Use 5 jQuery methods
       $("#2").animate({
          marginLeft: "100px",
      }, 1000, function(){
           //Use 5 jQuery methods
           $("#1").hide("slow");
       });
      
      $("#2").css("display", "block");
      $(" #3").css("display", "none");
      
      a1 = $("input[name='lp1']:checked" ).val();
      if(a1 == "a"){
          a = a+1;
          document.getElementById("sc").innerHTML=a;
      }
  });
    
    $("#q2").click(function(){
        $("#3").css("display", "block");
        //Use 5 jQuery methods animation
        $("#3").animate({
             marginLeft: "100px",
        }, 1000, function(){
            //Use 5 jQuery methods
            $("#2").hide("slow");
        }
       );
        //hiding previous question
        $("#1").css("display", "none");
        
        a2 = $("input[name='lp2']:checked" ).val();
        if(a2 == "b"){
          a++;
            //Use the innerHTML property
          document.getElementById("sc").innerHTML=a;
      }
  });
    $("#q3").click(function(){
        $("#4").css("display", "block");
        $("#4").animate({
             marginLeft: "100px",
        }, 1000, function(){
            $("#3").hide("slow");
        }
       );
        $("#2").css("display", "none");
        
        a3 = $("input[name='lp3']:checked" ).val();
        if(a3 == "a"){
          a++;
         //   Use the innerHTML property which updates score
          document.getElementById("sc").innerHTML=a;
      }
  });
    
    $("#q4").click(function(){
        $("#5").css("display", "block");
        $("#5").animate({
            //defining the position from left using animation
             marginLeft: "100px",
        }, 1000, function(){
            $("#4").hide("slow");
        }
       );
        $("#3").css("display", "none");
        
        a4 = $("input[name='lp4']:checked" ).val();
        if(a4 == "d"){
          a++;
              //   Use the innerHTML property which updates score
          document.getElementById("sc").innerHTML=a;
      }
  });
    $("#q5").click(function(){
        $("#6").css("display", "block");
        $("#6").animate({
             marginLeft: "100px",
        }, 1000, function(){
            $("#5").hide("slow");
        }
       );
        $("#4").css("display", "none");
        
        a5 = $("input[name='lp5']:checked" ).val();
        if(a5 == "b"){
          a++;
              //   Use the innerHTML property which updates score
          document.getElementById("sc").innerHTML=a;
      }
  });
    $("#q6").click(function(){
        $("#7").css("display", "block");
        $("#7").animate({
             marginLeft: "100px",
        }, 1000, function(){
            $("#6").hide("slow");
        }
       );
        $("#5").css("display", "none");
        
        a6 = $("input[name='lp6']:checked" ).val();
        if(a6 == "a"){
          a++;
              //   Use the innerHTML property which updates score
          document.getElementById("sc").innerHTML=a;
      }
  });
    $("#q7").click(function(){
       // $("#3").css("display", "block");
   /**     $("#3").animate({
             marginLeft: "100px",
        }, 1000, function(){
            
        }
       ); **/
        $("#7").hide("slow");
        $("#6, #7").css("display", "none");
        $("#scdiv, #cong, #sugg, #purchase").show();
        $("#back").show("slow");
        a7 = $("input[name='lp7']:checked" ).val();
        if(a7 == "c"){
          a++;
              //   Use the innerHTML property which updates score
          document.getElementById("sc").innerHTML=a;
      }
  });
    
    var hs = localStorage.setItem("highscore", a);
    
});
$("#back").click(function(){
    history.back();
});