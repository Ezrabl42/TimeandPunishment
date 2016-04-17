
document.addEventListener('DOMContentLoaded', function() {
  console.log("hi");
  var checkPageButton = document.getElementById('buttonclick');
  checkPageButton.addEventListener('click', function() {
console.log("clicked");

      d = document;
<<<<<<< HEAD
      var phoneNumber = d.getElementById("phone_value").value;
      var time = d.getElementById("timer_value").value;
      
      console.log("time",time);
      console.log("phoneNumber", phoneNumber);
      chrome.alarms.create("alarm",{delayInMinutes:time.value } )

      chrome.alarms.onAlarm.addListener(function (){
          //background listener
          console.log("hey it works!");})
=======
      var f = d.createElement('form');
      var phoneNumber = "+1" + d.getElementById("phone_value").value;
      var time = d.getElementById("timer_value").value;

console.log("time",time);
console.log("phoneNumber", phoneNumber);

>>>>>>> 56dcaa1ccbbce4fbcb5b206465bc9be538bf5ee6
  }, false);
}, false);
