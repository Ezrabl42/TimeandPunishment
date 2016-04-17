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
     				console.log(page.URL);
            
              alert("you searched google");
            
              
     			});
     		});
          console.log("ayo");
       });