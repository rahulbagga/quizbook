
//use form validation on 2 inputs (10)
function validate(){
  var name = document.getElementById("name").value.length;
  var num = document.getElementById("phone").value;
  var numl = document.getElementById("phone").value.length;
  var email = document.getElementById("email").value;
  var lengthemail = document.getElementById("email").value.length;
  var msg = document.getElementById("comment").value.length;
  var error_message = document.getElementById("error_message");

    //using different if statements
  if(name<3){
    alert("The name is invalid");
    return false;
  }

  if(isNaN(num) || numl != 10){
    alert("The phone number is not correct");
    return false;
  }
  if(email.indexOf("@") == -1 || lengthemail<5){
    alert("The email address is not correct");
    return false;
  }
  if(msg <= 140){
    alert("Please enter minimum 140 characters to continue");
    return false;
  }
  alert("Message Sent, we will contact you shortly");
  return true;
}
//use a third party api (10)
//Bing Maps API
var mapKey = 'Ar6Unt1ib4ANFwM2cGVHXQ-PFnrqNUc5f1u4BEGFa8_Gy4WB_rK_taT61oaC0oiW';
 function GetMap(){ //function that loads the map using api key
   var myLocation = new Microsoft.Maps.Location(43.40322, -80.28455);
   var map = new Microsoft.Maps.Map('#myMap', {
    credentials: mapKey,
    center: myLocation ,
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 14});
    //disableScrollWheelZoom: true,
    //disablePanning: true
    //Create custom Pushpin
           var pin = new Microsoft.Maps.Pushpin(myLocation, {
               title: 'Coulthard',
               subTitle: 'Cambridge',

           });

           //Add the pushpin to the map
           map.entities.push(pin);
 };
 