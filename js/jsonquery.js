document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      // Add your code below this line
        //new request
      req=new XMLHttpRequest();
      req.open("GET",'/data.json',true);
        //sending request
      req.send();
      req.onload=function(){
      json=JSON.parse(req.responseText);
    //parsing of json data and using this function
          var object=JSON.parse(this.responseText);
          
          for(i=0;i<4;i++){
              document.getElementById("demo").innerHTML+=object.testimonials[i].testimby;
          }
          
    
          /*
          
          $.getJSON("data.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#demo").append(
                            "Name: " + value.testimby + "<br>" + 
                            "Testimonial: " + value.testdata + "<br>" 
                        req=new XMLHttpRequest();
      request.get("POST",'/data.json',true);
      request.send();
      request.onload=function xml(){
      json=JSON.parse(req.responseText);
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