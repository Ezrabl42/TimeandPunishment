


document.addEventListener('DOMContentLoaded', function() {
  console.log("hi");
  var checkPageButton = document.getElementById('buttonclick');
  checkPageButton.addEventListener('click', function() {
console.log("clicked");

      d = document;
      var phoneNumber = "+1" + d.getElementById("phone_value").value;
      var time = Number(d.getElementById("timer_value").value);

      console.log("time",time);
      console.log("phoneNumber", phoneNumber);
      chrome.alarms.create("alarm",{delayInMinutes:time } );


      chrome.alarms.onAlarm.addListener(function (){

          //background listener
          


          console.log("hey it works!");
        });




  }, false);
}, false);
