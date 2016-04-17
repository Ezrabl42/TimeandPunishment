
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
      var date = new Date();
      var alarmStartTime = date.getTime();
      chrome.alarms.create("alarm",{delayInMinutes:1 } );

      chrome.alarms.onAlarm.addListener(function ()
      {
          //background listener
          chrome.history.search({text:"", startTime:alarmStartTime, endTime:date.getTime()}, function(data)
     		{
     			data.forEach(function(page)
     			{
     				console.log(page.url);
     			});
     		});
          console.log("ayo");
       });


  }, false);
}, false);