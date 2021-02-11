

(function() {
  "use strict";
//a custom javascript function
  document.addEventListener("DOMContentLoaded",function() {
    var state=document.getElementById("s-state");

    document.getElementById("cart-hplus").addEventListener("submit", estimateTotal);

    var btnEstimate=document.getElementById("btn-estimate");

    btnEstimate.disabled=true;
    //using ifelse condition 
    
    state.addEventListener("change",function(){
      if(state.value===""){
        btnEstimate.disabled=true;
      }else{
        btnEstimate.disabled=false;
      }
    });

//using the focus function to focus on input select value
    function estimateTotal(event){
      event.preventDefault();
      //use of 'focus' (2)
      if (state.value==="") {
          //it will show shipping status
        alert("Please choose your shipping state");

        state.focus();

        return;
      }

      var itemBball=parseInt(document.getElementById("txt-q-bball").value, 10) || 0,
        itemJersey=parseInt(document.getElementById("txt-q-jersey").value, 10) || 0,
        itemPower=parseInt(document.getElementById("txt-q-power").value, 10) || 0,
        shippingState=state.value,
        shippingMethod=document.querySelector("[name=r_method]:checked").value || "";

      var totalQty=itemBball+itemJersey+itemPower,
        shippingCostPer,
        shippingCost,
        taxFactor=1,
        estimate,
        totalItemPrice=90 * itemBball + 25 * itemJersey + 30 * itemPower;

      if (shippingState==="CA") {
        taxFactor=1.075;
      }
//usng switch statement to check condition on multiple entries

      switch(shippingMethod) {
        case "usps":
          shippingCostPer=2;
          break;
        case "ups":
          shippingCostPer=3;
          break;
        case "fedex":
          shippingCostPer=4;
          break;
        default:
          shippingCostPer=0;
          break;
      }

      shippingCost=shippingCostPer*totalQty;
            /**
            
             $("#7").hide("slow");
        $("#6, #7").css("display", "none");
        $("#scdiv, #cong, #sugg, #purchase").show();
        $("#back").show("slow");
        a7 = $("input[name='lp7']:checked" ).val();
        if(a7 == "c"){
          a++;
          document.getElementById("sc").innerHTML=a;
          
          **/
      estimate = "$" + (totalItemPrice * taxFactor + shippingCost).toFixed(2);

      document.getElementById("txt-estimate").value=estimate;

      var results=document.getElementById("results");
//use of innerHTML (2)

      results.innerHTML = "Total items: " + totalQty + "<br>";
      results.innerHTML +=
        "Total shipping: $" + shippingCost.toFixed(2) + "<br>";
      results.innerHTML +=
        "Tax: " +
        ((taxFactor - 1) * 100).toFixed(2) +
        "% (" +
        shippingState +
        ")<br>";
//document.write("Thanks for purchasing");
      // total items
      // total shipping cost
      // tax
        
        document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('getMessage').onclick=function(){
      // Add requesting new xmlhttp request
      datarequest=new XMLHttpdatarequestuest();
      datarequest.open("GET",'/data.json',true);
      datarequest.send();
      datarequest.onload=function(){
      json=JSON.parse(datarequest.responseText);
        //using this function which relates to its json object
          var myObj = JSON.parse(this.responseText);
          //using for loop to execute all testimonials
          for(i=0;i<4;i++){
              document.getElementById("mm").innerHTML += myObj.testimonials[i].testimby;
          }
          
    
          /*
          $.getJSON("data.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#demo").append(
                            "Name: " + value.testimby + "<br>" + 
                            "Testimonial: " + value.testdata + "<br>" 
                        
                        );
                    });
                });
            });
          */
      document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
};
      
      // Add your code above this line
    };
  });
        
    }
  });
})();
