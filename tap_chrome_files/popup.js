
document.addEventListener('DOMContentLoaded', function() {
  console.log("hi");
  var checkPageButton = document.getElementById('buttonclick');
  checkPageButton.addEventListener('click', function() {
console.log("clicked");

      d = document;
      var phoneNumber = d.getElementById("phone_value").value;
      var time = d.getElementById("timer_value").value;
      
      console.log("time",time);
      console.log("phoneNumber", phoneNumber);
      chrome.alarms.create("alarm",{delayInMinutes:1 ,periodInMinutes: time.value} )

      chrome.alarms.onAlarm.addListener(function (){
          console.log("hey it works!");})
  }, false);
}, false);