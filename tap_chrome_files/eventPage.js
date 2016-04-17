
      console.log("hey dumbass");
      var hasSinned = false;
      var date = new Date();
      var alarmStartTime = date.getTime();
      var facebook = /facebook/gi;
      var youtube = /youtube/gi;
      var twitter = /twitter/gi;
      var forbidden = [facebook, youtube, twitter];
      chrome.alarms.create("alarm",{delayInMinutes:1 } );

      chrome.alarms.onAlarm.addListener(function ()
      {
          var endDate = new Date();
          //background listener
          chrome.history.search({text:"", startTime:alarmStartTime, endTime:endDate.getTime()}, function(data)
     		{
     			data.forEach(function(page){
           console.log(page.url);
            if (page.url.search(facebook)!=-1||page.url.search(youtube)!=-1||page.url.search(twitter)!=-1)
            {
              hasSinned = true;
            }
            console.log(hasSinned);

          });
     		});
          console.log("ayo");
       })