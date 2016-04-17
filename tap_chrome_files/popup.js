


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
<<<<<<< HEAD
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
=======
      chrome.alarms.create("alarm",{delayInMinutes:time } );


      chrome.alarms.onAlarm.addListener(function (){

          //background listener
          


          console.log("hey it works!");
        });


>>>>>>> 3008e26e77011c69f690a83d62b9abb7ca56eb65


  }, false);
}, false);
